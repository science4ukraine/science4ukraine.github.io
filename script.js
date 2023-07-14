// JavaScript code for automatic fading carousel

const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicators li');

let currentSlideIndex = 0;
let interval;

const showSlide = () => {
    slides.forEach((slide, index) => {
        if (index === currentSlideIndex) {
            slide.style.opacity = 1;
            indicators[index].classList.add('active');
        } else {
            slide.style.opacity = 0;
            indicators[index].classList.remove('active');
        }
    });
};

const changeSlide = (n) => {
    currentSlideIndex += n;

    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    showSlide();
};

const startCarousel = () => {
    interval = setInterval(() => {
        changeSlide(1);
    }, 3000); // Change slide every 3 seconds (adjust the time interval as desired)
};

const stopCarousel = () => {
    clearInterval(interval);
};

showSlide();
startCarousel();



const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('mouseover', stopCarousel);
carouselContainer.addEventListener('mouseout', startCarousel);
