let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const itemCount = items.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showItem(index) {
    items.forEach((item, i) => {
        item.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function showNextItem() {
    currentIndex = (currentIndex + 1) % itemCount;
    showItem(currentIndex);
}

function showPrevItem() {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    showItem(currentIndex);
}

prevButton.addEventListener('click', showPrevItem);
nextButton.addEventListener('click', showNextItem);

showItem(currentIndex);
