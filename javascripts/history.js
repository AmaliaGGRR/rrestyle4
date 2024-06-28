document.addEventListener("DOMContentLoaded", function() {
    let his = document.querySelector('.plajhis');
    
    his.addEventListener('click', function() {
        // Получаем ширину и высоту элемента
        let hisWidth = his.offsetWidth;
        let hisHeight = his.offsetHeight;

        his.style.display = 'none';

        setTimeout(function() {
            // Убедитесь, что родительский элемент имеет position: absolute или position: fixed
            his.parentElement.style.position = 'fixed';

            // Рассчитать случайные позиции и центр
            let maxWidth = window.innerWidth - hisWidth;
            let maxHeight = window.innerHeight - hisHeight;
            let randomX = Math.random() * maxWidth;
            let randomY = Math.random() * maxHeight;
            let centerX = (window.innerWidth - hisWidth) / 2;
            let centerY = (window.innerHeight - hisHeight) / 2;

            // Решить случайно, куда переместить элемент
            let moveToCenter = Math.random() > 0.8;
            let newX = moveToCenter ? centerX : randomX;
            let newY = moveToCenter ? centerY : randomY;

            // Переместить родительский элемент на новую позицию
            his.parentElement.style.left = `${newX}px`;
            his.parentElement.style.top = `${newY}px`;

            // Показать изображение снова
            his.style.display = 'block';
        }, 100);
    });
});
