var express = require('express');
var app = express();
var http = require('http').Server(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.drivers = {};
app.drivers.mongodb = require('./drivers/mongodb');

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://yomikoda:databasepasswordL33T@ds225308.mlab.com:25308/quizz-hq-webstart");




var userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    score : Number,
    id : Number
});

var User = mongoose.model("User", userSchema);


var questionSchema = new mongoose.Schema({
    question: String,
    answerA : String,
    answerB : String,
    answerC : String,
    correctAnswer : String
});

var Question = mongoose.model("Question", questionSchema);


// POSTS

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    var firstname = req.body.firstname;
    var lasttname = req.body.lastname;
    var email = req.body.email;
    var score = req.body.score;



    User.find({ 'email': email }, function (err, docs) {

//        console.log(err);
//        console.log(docs);

        if( docs.length <= 0 ){

            myData.save()
                .then(item => {
//                var _id = myData._id
                console.log(myData);
                res.status(200).send(myData._id);

                //        console.log(myData);
                //        console.log(email);
                //        console.log(firstname);
                //        console.log(lasttname);

            })
                .catch(err => {
                res.status(400).send("unable to save to database");
            });

        }

        else{

            res.status(200).send("Email already in use - Please enter another e-mail adress");

        }



    });



});


// Question Post

app.post("/addquestions", (req, res) => {
    var myData = new Question(req.body);
    var question = req.body.question;
    var answerA = req.body.answer;
    var answerB = req.body.answer;
    var answerC = req.body.answer;
    var correctAnswer = req.body.correctAnswer;



    Question.find({ }, function (err, docs) {

                console.log("err " + err);
                console.log("docs" + docs);

            myData.save()
                .then(item => {
                //                var _id = myData._id
                console.log(myData);
                res.status(200).send(myData._id);

                //        console.log(myData);
                //        console.log(email);
                //        console.log(firstname);
                //        console.log(lasttname);

            })
                .catch(err => {
                res.status(400).send("unable to save Question to database");
            });




    });



});


// GETS


app.get('/users', function (req, res){

    User.find({}, function(err, results){
        if (err){console.log(err);return err;}
        console.log("okay");
        console.log(results);
        res.send(results);
    })

});



app.get('/questions', function (req, res){

    Question.find({}, function(err, results){
        if (err){console.log(err);return err;}
        console.log("Here's all the questions that were ever asked you nosy nelly ! ");
        console.log(results);
        res.send(results);
    })

});


app.models = {};
app.models.user = require('./models/user');
app.models.user = require('./models/question');

app.use('/js', express.static('assets/js'));
app.use('/css', express.static('assets/css'));
app.use('/img', express.static('assets/img'));
app.use('/fonts', express.static('assets/fonts'));
app.use('/videos', express.static('assets/videos'));
app.use('/', express.static('assets/html'));

app.get('/test', function (req, res) {
    res.send('<h1>Hello TEST</h1>');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.get('/top-scores', function (req, res) {
    res.sendFile(__dirname + '/top-scores.html');
});

app.get('/add_question', function (req, res) {
    res.sendFile(__dirname + '/add_question.html');
});

http.listen(8000, function () {
    console.log('listening on *:8000');
});




