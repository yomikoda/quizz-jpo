// GET QUESTIONS

function getquestions() {

    $.get("questions",null,function(data){

        console.log(data);
    });

};

getquestions();

// QUESTIONS

function HQquizz() {



    var quizzQ = [

        {
            question: "Sesame Street was almost called what ?",
            answers: {
                a: "Big Bird and Friends",
                b: "Jim Henson's Muppets",
                c: "123 Avenue B"
            },
            correctAnswer: "Jim Henson's Muppets"
        },
        {
            question: "Where does one go to get tech support for an Apple product ?",
            answers: {
                a: "Smart Pub",
                b: "Erudite Truck Stop",
                c: "Genius Bar"
            },
            correctAnswer: "Genius Bar"
        },
        {
            question: "What's Sam and Dean Winchester's family motto ?",
            answers: {
                a: "What's Dead Should stay dead",
                b: "Saving People, Hunting Things, The family business",
                c: "Driver picks the music, shotgun shuts his piehole"
            },
            correctAnswer: "Saving People, Hunting Things, The family business"
        },
        {
            question: "What's the name of the best Teen Wolf Ship ? ",
            answers: {
                a: "STETER",
                b: "SCILES",
                c: "STEREK"
            },
            correctAnswer: "STEREK"
        },
        {
            question: "Rick Sanchez turned into what vegetable ?",
            answers: {
                a: "Pickle",
                b: "Cucumber",
                c: "Eggplant"
            },
            correctAnswer: "Pickle"
        }
    ];



    var quizzlength = quizzQ.length;
    console.log(quizzlength);


    var q = 0;
    var score = 0;
    console.log("BASIC SCORE FOR A BASIC HUMAN IS : " + score);

    function loadquestion(i) {

        var question = '<div class="question">' + quizzQ[i].question + '</div><div class="answer-container"><div class="answer"><p>' + quizzQ[i].answers.a + '</p></div><div class="answer"><p>' + quizzQ[i].answers.b + '</p></div><div class="answer"><p>' + quizzQ[i].answers.c + '</p></div></div>';

        $(".qanda").html(question);


    }


    loadquestion(q);
    console.log(q);





    // TIMER


//        var timeleft = 10;

//        function timer(){
//            document.getElementsByClassName("countdown").value = 10 - --timeleft;
//            $(".countdown").html(timeleft);
//                    console.log(timeleft);
//            if(timeleft <= 0){
//                clearInterval(questionTimer);
//            }
//        }
//        var questionTimer = setInterval(function(){
//            timer();
//            var lol = $('.countdown').html;
//            console.log(lol);
//
//        },1000);

    var questionTimer;
    function startTimer (timeleft){
        //var timeleft = 10
        $('.countdown').html(timeleft);
        questionTimer = setInterval(function(){
            if(timeleft <= 0){
                clearInterval(questionTimer);
            } else{
                timeleft--;
                $('.countdown').html(timeleft);
            }

        },1000);

    }
    function stopTimer (){
        clearInterval(questionTimer);
    }
    startTimer(10);


    //ANSWER CHECK and NEXT QUESTION

    var youranswer;
    $('#intro').on('click', '.answer p', function () {
        console.log(this.innerHTML);
        youranswer = this.innerHTML;
        document.getElementById('score').innerHTML = youranswer;
        //        clearInterval(questionTimer);

        console.log(youranswer);
        console.log(quizzQ[q].correctAnswer);

        checkrightanswer();
    });


    function checkrightanswer() {
        console.log(score);
        console.log("YOU CLICKED ME ! HOW DARE YOU ! STOP IT ! ");

        if (youranswer == quizzQ[q].correctAnswer) {
            console.log('YAS');
            score = score + 10;
            console.log("YOU +1 your score you rascal, you're now at : " + score);
            $("#currentscore").html("<p>SCORE : "+ score+"</p>");
        } else {
            console.log("WHYYYYYY");
            score = score - 5;
            console.log("BOO YOU WHORE ! YOU FAILED SO HARD THE PLASTICS ARE KICKING YOU OUT : " + score);
            $("#currentscore").html("<p>SCORE : "+ score+"</p>");
            console.log(lol);
        }


        q++;
        console.log(q);
        loadquestion(q);

    }

};

HQquizz();


function addUser(e) {
    e.preventDefault();
    //
    //                var _firstname = document.getElementById("firstname").value,
    //                    _lastname = document.getElementById("lastname").value,
    //                    _email = document.getElementById("email").value;

    var newUser = {
        'firstname': $('#firstname').val(),
        'lastname': $('#lastname').val(),
        'email': $('#email').val()
    }

    // Use AJAX to post the object to our adduser service
    $.ajax({
            type: 'POST',
            data: newUser,
            url: '/addname'
        })
        .fail(function (a, b, c) {


        })
        .done(function (response) {
            console.log(response);

            if (response == "Email already in use - Please enter another e-mail adress") {
                mailerror(response);

            } else {
                console.log("DA ID IZ : " + response);
                var playerId = response;
                launchQuizz(playerId); //Function that launches the next step

            }



        });

};

function mailerror(response) {

    $("#mail").html('<label for="email">E-mail </label><input type="email" name="email" id="email">').append("  <p class='mail-error'>" + response + "</p>");
    $("#email").css({
        'background-color': 'rgba(223,51,107,0.5)'
    });
}

function launchQuizz(playerId) {
    $("#intro").css("height", "80%").fadeOut(1000, function () {
        $(this).empty().load('quizz.html', startQuizz(playerId)).fadeIn(2500);
    });
}

startQuizz();

function startQuizz(playerId) {
    //    loadquestion(q);
    //    console.log(q);
    $(".answer").on('click', function (e) {

        $(this).toggleClass("selectedanswer");

    })



}

$("#subscribe").click(function () {
    console.log('lol');

    $("#intro").fadeOut(1000, function () {
        $(this).empty().load('form.html', function () {

            $("#subform").on('submit', addUser);

        }).fadeIn(2500);
    });


});
