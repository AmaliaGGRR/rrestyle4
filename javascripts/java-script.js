document.addEventListener("DOMContentLoaded", function() {
    let malimg = document.querySelector(".bhistory");
    if (malimg) {
        malimg.addEventListener("mouseover", function() {
            malimg.setAttribute("src", "./image/bighis.png");
        });

        malimg.addEventListener("mouseout", function() {
            malimg.setAttribute("src", "./image/bhistory.svg");
        });
    } else {
        console.log('.bhistory not found');
    }

    let umka = document.querySelector(".bum");
    if (umka) {
        umka.addEventListener("mouseover", function() {
            umka.setAttribute("src", "./image/bumbl.png");
        });

        umka.addEventListener("mouseout", function() {
            umka.setAttribute("src", "./image/bum.svg");
        });
    } else {
        console.log('.bum not found');
    }

    let resik = document.querySelector(".resss");
    if (resik) {
        resik.addEventListener("mouseover", function() {
            resik.setAttribute("src", "./image/resspink.png");
        });

        resik.addEventListener("mouseout", function() {
            resik.setAttribute("src", "./image/resss.svg");
        });
    } else {
        console.log('.resss not found');
    }

    let ytik = document.querySelector(".ytka");
    if (ytik) {
        ytik.addEventListener("mouseover", function() {
            ytik.setAttribute("src", "./image/ytkablue.png");
        });

        ytik.addEventListener("mouseout", function() {
            ytik.setAttribute("src", "./image/ytka.svg");
        });
    } else {
        console.log('.ytka not found');
    }

    let kor = document.querySelector(".korzina");
    if (kor) {
        kor.addEventListener("mouseover", function() {
            kor.setAttribute("src", "./image/korgreen.png");
        });

        kor.addEventListener("mouseout", function() {
            kor.setAttribute("src", "./image/korzina.svg");
        });
    } else {
        console.log('.korzina not found');
    }

    let kas = document.querySelector(".kastom");
    if (kas) {
        kas.addEventListener("mouseover", function() {
            kas.setAttribute("src", "./image/kastom.png");
        });

        kas.addEventListener("mouseout", function() {
            kas.setAttribute("src", "./image/kastom.svg");
        });
    } else {
        console.log('.kastom not found');
    }
});
