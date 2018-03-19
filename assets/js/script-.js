var quizzQ = [
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
        question: "Sesame Street was almost called what ?",
        answers: {
            a: "Big Bird and Friends",
            b: "Jim Henson's Muppets",
            c: "123 Avenue B"
        },
        correctAnswer: "b"
    },
    {
        question: "What's Sam and Dean Winchester's family motto ?",
        answers: {
            a: "What's Dead Should stay dead",
            b: "Saving People, Hunting Things, The family business",
            c: "Driver picks the music, shotgun shuts his piehole"
        },
        correctAnswer: "b"
    }
];



var quizzlength = quizzQ.length;
console.log(quizzlength);


var q = 0;



function loadquestion(i){

    var question ='<div class="question">'+quizzQ[i].question+'</div><div class="answer-container"><div class="answer"><p>'+quizzQ[i].answers.a+'</p></div><div class="answer"><p>'+quizzQ[i].answers.b+'</p></div><div class="answer"><p>'+quizzQ[i].answers.c+'</p></div></div>';

    $(".qanda").html(question);


}

loadquestion(q);







// QUESTION - timer _ click - Check answer - Update Score - Load Next Q




var timeleft = 10;

function timer(){
    document.getElementsByClassName("countdown").value = 10 - --timeleft;
    $(".countdown").html(timeleft);
    console.log(timeleft);
    if(timeleft <= 0){
        clearInterval(questionTimer);
    }

}
var questionTimer = setInterval(function(){

    timer();
    var lol = $('.countdown').html;
    console.log(lol);

},1000);




//if($('.timer'.value ==0)){
//    q++;
//    console.log(q);
//    loadquestion(q);
//}





var youranswer;

$('.answer p').click(function(){


    console.log(this.innerHTML);
    youranswer = this.innerHTML;
    document.getElementById('score').innerHTML = youranswer;
    clearInterval(questionTimer);

    console.log(youranswer);
    console.log(quizzQ[q].correctAnswer);

    checkrightanswer();


});

function checkrightanswer(){


    if (youranswer== quizzQ[q].correctAnswer) {
        console.log('YAS');

    }
    else{
        console.log("WHYYYYYY");
    }

    q++;
    console.log(q);
    loadquestion(q);

}



