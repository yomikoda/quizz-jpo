var b = window.innerHeight + 'px';
$('main').height(b);
console.log(b);

$('#burger').click(function () {

    $('#burger').toggleClass('clickedburger');
});





var quizzQ = [
    {
        subject : "SECTION SUBJECT 00",
        question: "SECTION QUESTION SECTION QUESTION SECTION QUESTION",
        answers: {
            a: "ANSWER A",
            b: "ANSWER B",
            c: "ANSWER C",
            d: "ANSWER D"
        },
        correctAnswer: "a"
    },
    {
        subject : "SECTION SUBJECT 01",
        question: "SECTION QUESTION SECTION QUESTION SECTION QUESTION",
        answers: {
            a: "ANSWER A",
            b: "ANSWER B",
            c: "ANSWER C",
            d: "ANSWER D"
        },
        correctAnswer: "b"
    },
    {
        subject : "SECTION SUBJECT 02",
        question: "SECTION QUESTION SECTION QUESTION SECTION QUESTION",
        answers: {
            a: "ANSWER A",
            b: "ANSWER B",
            c: "ANSWER C",
            d: "ANSWER D"
        },
        correctAnswer: "c"
    },
    {
        subject : "SECTION SUBJECT 03",
        question: "SECTION QUESTION SECTION QUESTION SECTION QUESTION",
        answers: {
            a: "ANSWER A",
            b: "ANSWER B",
            c: "ANSWER C",
            d: "ANSWER D"
        },
        correctAnswer: "d"
    }
];



for ( var i=0; i < quizzQ.length ;i++){
    var allthequestions = "<section class='qanda section"+i+"' id='questionumero"+i+"'><h3>"+ quizzQ[i].subject+"</h3><p class='question'>"+ quizzQ[i].question+"</p><div class='answer'><label class='option' for='A"+i+"'>"+ quizzQ[i].answers.a+"</label><label class='option' for='B"+i+"'>"+ quizzQ[i].answers.b+"</label><label class='option' for='C"+i+"'>"+ quizzQ[i].answers.c+"</label><label class='option' for='D"+i+"'>"+ quizzQ[i].answers.d+"</label></div><form id='question01'><input type='radio' name='question0"+i+"' id='A"+i+"' value='a'><input type='radio' name='question0"+i+"' id='B"+i+"' value='b'><input type='radio' name='question0"+i+"' id='C"+i+"' value='c'><input type='radio' name='question0"+i+"' id='D"+i+"' value='d'><input type='submit' value='Submit' onclick='checkrightanswer()' id='submit0"+i+"'></form></section>";
    $('main').append(allthequestions);

    console.log(allthequestions);
}

setTimeout(function(){

    for ( var i=0; i < quizzQ.length ;i++){
        $('nav>ul').append("<li><a href='#questionumero"+i+"'>"+quizzQ[i].subject+"</a></li>");


    }
    $("nav>ul>li>a").on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top }, 1000);
        $('#burger').toggleClass('clickedburger');

    });


    for ( var i=0; i < quizzQ.length ;i++){

        $("#submit0"+i).click(function(){
            $("#submit0"+i).attr("disabled", true);
            var answer = $("#question0"+i).prev();
            $(answer).children().css('pointer-events','none');
            console.log( "#submit0"+i);
        });

    }
},0);



$("label").click(function(){
    $(".option").removeClass('selected');
    $(this).toggleClass('selected');
    console.log('click label');

});




function checkrightanswer(e){
    event.preventDefault();

    console.log("submit pushed");
    if ($("input[type='radio']").is(':checked')) {
        console.log($("input[type='radio']:checked").val());
        compare();
    }
    else{
        console.log("WHYYYYYY");
    }
};

function compare(){//sent the clicked element as a parameter
    var zevalue = $("input[type='radio']:checked").val();
    console.log('what I checked :'+ zevalue);
    console.log('the correct answer : '+ quizzQ[0].correctAnswer);
    if(zevalue == quizzQ[0].correctAnswer){
        console.log('YAAAAAS');

    }
    else{
        console.log('NOPE');
    }

}


