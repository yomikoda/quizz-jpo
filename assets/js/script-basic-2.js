// GET QUESTIONS


var q = 0;
var score = 0;
$("#currentscore").html("<p>SCORE : "+ score+"</p>");

// QUESTIONS

function HQquizz() {


    $.get("questions",null,function(data){

        var quizzQ = data;
//        console.log(quizzQ);
        var quizzlength = quizzQ.length;
//        console.log(quizzlength);


        function loadquestion(i) {
            if (q < quizzlength ){
                var question = '<div class="question">' + quizzQ[i].question + '</div><div class="answer-container"><div class="answer"><p>' + quizzQ[i].answerA + '</p></div><div class="answer"><p>' + quizzQ[i].answerB + '</p></div><div class="answer"><p>' + quizzQ[i].answerC + '</p></div></div>';

                $(".qanda").html(question);

            }
            else{
                var question = '<div class="question">' + "Your Final Score :" + '</div><div class="answer-container"><div class="answer"><p>' + score+ '</p></div></div>';
                $(".qanda").html(question);
            }

        }

        loadquestion(q);


        // TIMER


        var timeleft = 10;



        var questionTimer;

        function startTimer (timeleft){

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

            youranswer = this.innerHTML;
            document.getElementById('score').innerHTML = youranswer;
            //        clearInterval(questionTimer);

//            console.log(youranswer);
//            console.log(quizzQ[q].correctAnswer);

            checkrightanswer();





        });


        function checkrightanswer() {
            console.log(score);

            if (youranswer == quizzQ[q].correctAnswer) {
//                console.log('YAS');
                score = score + 10;
//                console.log("YOU +1 your score you rascal, you're now at : " + score);
                $("#currentscore").html("<p>SCORE : "+ score+"</p>");
            } else {

                if ( score == 0 ){
                    score == 0;
                }
                else{
//                    console.log("WHYYYYYY");
                    score = score - 5;
                    console.log("BOO YOU WHORE ! YOU FAILED SO HARD THE PLASTICS ARE KICKING YOU OUT : " + score);
                    $("#currentscore").html("<p>SCORE : "+ score+"</p>");
                }

            }


            q++;
//            console.log(q);
            loadquestion(q);

        };

    });





};




function addUser(e) {
    e.preventDefault();

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
//            console.log(response);

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

//startQuizz();

function startQuizz(playerId) {

    HQquizz(q);


}

$("#subscribe").click(function () {
//    console.log('lol');

    $("#intro").fadeOut(1000, function () {
        $(this).empty().load('form.html', function () {

            $("#subform").on('submit', addUser);

        }).fadeIn(2500);
    });


});
