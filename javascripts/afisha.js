document.addEventListener("DOMContentLoaded", function() {
    let master = document.querySelector(".master-class");

    master.addEventListener("mouseover", function(){
        master.setAttribute("src", "./image/blue.png");
    });

    master.addEventListener("mouseout", function(){
        master.setAttribute("src", "./image/master-class.svg")
    });



    let lecture = document.querySelector(".lecture");

    lecture.addEventListener("mouseover", function(){
        lecture.setAttribute("src", "./image/green.png");
    });

    lecture.addEventListener("mouseout", function(){
        lecture.setAttribute("src", "./image/newyear.svg")
    });


    let aarrhiv = document.querySelector(".arhiv");

    aarrhiv.addEventListener("mouseover", function(){
        aarrhiv.setAttribute("src", "./image/orange.png");
    });

    aarrhiv.addEventListener("mouseout", function(){
        aarrhiv.setAttribute("src", "./image/arhiv.svg")
    });


    let leclo = document.querySelector(".lolo");

    leclo.addEventListener("mouseover", function(){
        leclo.setAttribute("src", "./image/pink.png");
    });

    leclo.addEventListener("mouseout", function(){
        leclo.setAttribute("src", "./image/lecture.svg")
    });

    
});