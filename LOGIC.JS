let aaalll = document.querySelector(".JsAll");
let baataa = document.querySelector(".JsBata");
let puuuma = document.querySelector(".JsPima");
let niiike = document.querySelector(".JsNike");
let guucci = document.querySelector(".JsGucci");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let ten = document.querySelector("#ten");
let eleven = document.querySelector("#eleven");
let twelve = document.querySelector("#twelve");
let thirteen = document.querySelector("#thirteen");
let fourteen = document.querySelector("#fourteen");
let fifteen = document.querySelector("#fifteen");
let sixteen = document.querySelector("#sixteen");

aaalll.addEventListener("click", function(){
    aaalll.classList.add("active");
    baataa.classList.remove("active");
    puuuma.classList.remove("active");
    niiike.classList.remove("active");
    guucci.classList.remove("active");

    one.style.display = "block";
    two.style.display = "block";
    three.style.display = "block";
    four.style.display = "block";

    five.style.display = "block";
    six.style.display = "block";
    seven.style.display = "block";
    eight.style.display = "block";

    nine.style.display = "block";
    ten.style.display = "block";
    eleven.style.display = "block";
    twelve.style.display = "block";

    thirteen.style.display = "block";
    fourteen.style.display = "block";
    fifteen.style.display = "block";
    sixteen.style.display = "block";
});

baataa.addEventListener("click", function(){
    aaalll.classList.remove("active");
    baataa.classList.add("active");
    puuuma.classList.remove("active");
    niiike.classList.remove("active");
    guucci.classList.remove("active");



    thirteen.style.display = "block";
    fourteen.style.display = "block";
    fifteen.style.display = "block";
    sixteen.style.display = "block";


    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    six.style.display = "none";
    seven.style.display = "none";
    eight.style.display = "none";
    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";
});

puuuma.addEventListener("click", function(){
    aaalll.classList.remove("active");
    baataa.classList.remove("active");
    puuuma.classList.add("active");
    niiike.classList.remove("active");
    guucci.classList.remove("active");



    one.style.display = "block";
    two.style.display = "block";
    three.style.display = "block";
    four.style.display = "block";

    five.style.display = "none";
    six.style.display = "none";
    seven.style.display = "none";
    eight.style.display = "none";

    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";

    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
});

niiike.addEventListener("click", function(){
    aaalll.classList.remove("active");
    baataa.classList.remove("active");
    puuuma.classList.remove("active");
    niiike.classList.add("active");
    guucci.classList.remove("active");



    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";

    five.style.display = "block";
    six.style.display = "block";
    seven.style.display = "block";
    eight.style.display = "block";

    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";

    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
});

guucci.addEventListener("click", function(){
    aaalll.classList.remove("active");
    baataa.classList.remove("active");
    puuuma.classList.remove("active");
    niiike.classList.remove("active");
    guucci.classList.add("active");




    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";

    five.style.display = "none";
    six.style.display = "none";
    seven.style.display = "none";
    eight.style.display = "none";

    nine.style.display = "block";
    ten.style.display = "block";
    eleven.style.display = "block";
    twelve.style.display = "block";

    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";

});


//jQuery......>

$(function(){
    let heading = $('.test');

    heading.on("click", function(){
        $(this).hide();
    });

    let addBorder = $(".border");
    let removeBorder = $(".remove");

    let show = $(".show");
    let hide = $(".hide");
    let toggle = $(".toggle");

    let box = $(".box");

    addBorder.on("click", function(){
        box.css({
            border: "5px solid red"
            
        });
        addBorder.css({
            display: "none"
        });
        removeBorder.css({
            display: "inline-block"
        });
    });

    removeBorder.on("click", function(){
        removeBorder.css({
            display: "none"
        });
        addBorder.css({
            display: "inline-block"
        });

        box.css({
            border: "5px solid green"
        });
    });

    show.on("click", function(){
        box.slideDown();
    });

    hide.on("click", function(){
        box.slideUp();
    });

    toggle.on("click", function(){
        box.slideToggle();
    });

   



});


$(function(){
    let refresh = $(".ref")
    let start = $(".start");
    let stop = $(".stop");

    let box_two = $(".box_two");

    refresh.on("click", function(){
        box_two.animate({
            width: '1%'
        })
    })


    start.on("click", function(){
         box_two.animate({
             width: '100%'
         },5000);
    });

    stop.on("click", function(){
        box_two.stop();
    });


});

$(function(){
    let question = $(".question");
    let answer = $(".answer");

    let span = $('span');
    let iii = $("i");



    question.on("click", function(){
        answer.slideToggle()

      
    });

    let question_two = $(".question_two");
    let answer_two = $(".answer_two");

    question_two.on("click", function(){
        answer_two.slideToggle()
    });

    let question_three = $(".question_three");
    let answer_three = $(".answer_three");

    question_three.on("click", function(){
        answer_three.slideToggle()
    });
});