document.addEventListener('DOMContentLoaded', function () {
    let cards = document.querySelectorAll('.card');
    let prevBtn = document.getElementById('prevBtn');
    let nextBtn = document.getElementById('nextBtn');
    let carouselStatus = document.getElementById('carouselStatus');
    let currentIndex = 0;

    function getCardsToShow() { 
        return window.innerWidth <= 1440 ? 1 : 4;
    }

    function updateCarousel() {
        let cardsToShow = getCardsToShow();
        let offset = -currentIndex * 100 / cardsToShow; 

        cards.forEach(card => { 
            card.style.transform = `translateX(${offset}%)`;
        });

        carouselStatus.textContent = `${Math.min(currentIndex + cardsToShow, cards.length)}/${cards.length}`;
    }

    prevBtn.addEventListener('click', function () {
        const cardsToShow = getCardsToShow();

        currentIndex -= cardsToShow;
        if (currentIndex < 0) {
            currentIndex = cards.length - cardsToShow;
        }
        updateCarousel();
    });

    nextBtn.addEventListener('click', function () {
        const cardsToShow = getCardsToShow();
    
        currentIndex += cardsToShow;
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }
        updateCarousel();
    });

    window.addEventListener('resize', function () {
        currentIndex = 0;
        updateCarousel();
    });

    updateCarousel();
});
