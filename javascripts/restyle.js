document.addEventListener("DOMContentLoaded", function() {
    let mani = document.querySelector(".mani");
    let text = document.querySelector(".text");
    let kar = document.querySelector(".kar");
    let kon = document.querySelector(".kon");
    let tar = document.querySelector(".tar");

    mani.addEventListener("click", function(){
       text.setAttribute("src", "./image/manifest.svg");
       kar.setAttribute("src", "./image/page1.svg")
    });
   
    kon.addEventListener("click", function(){
       kar.setAttribute("src", "./image/page2.svg");
       text.setAttribute("src", "./image/taarr.svg")
    });

    tar.addEventListener("click", function(){
       text.setAttribute("src", "./image/konsept.svg");
       kar.setAttribute("src", "./image/page3.svg")
     });
 
 


});