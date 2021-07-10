const navDotsContainer = document.querySelector('.navigation-dots');
const slider = document.querySelector('#image-slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');


var currImage = 0;
var time = 6 * 1000; // 6 seconds
var amountOfSlides = 4;
function changeSliderImage() {
    navDotsContainer.children[currImage].classList.remove('active');

    if (currImage < amountOfSlides - 1) {
        currImage++;
    } else {
        currImage = 0;
    }
    navDotsContainer.children[currImage].classList.add('active');
    slider.src = `./assets/slider/slide-${currImage}.jpg`;
    setTimeout('changeSliderImage()', time);
}
prevBtn.addEventListener('click', () => {
    navDotsContainer.children[currImage].classList.remove('active');
    if (currImage > 0) {
        currImage--;
    } else {
        currImage = amountOfSlides - 1;
    }
    navDotsContainer.children[currImage].classList.add('active');
    slider.src = `./assets/slider/slide-${currImage}.jpg`;
})
nextBtn.addEventListener('click', () => {
    navDotsContainer.children[currImage].classList.remove('active');
    if (currImage < amountOfSlides - 1) {
        currImage++;
    } else {
        currImage = 0;
    }
    navDotsContainer.children[currImage].classList.add('active');
    slider.src = `./assets/slider/slide-${currImage}.jpg`;
})

// navigation dots
function createNavigationDots() {
    for (let i = 0; i < amountOfSlides; i++) {
        const dot = document.createElement('li');
        if (currImage === i) {
            dot.classList.add('active');
        }
        dot.classList.add('single-dot');
        navDotsContainer.appendChild(dot);
    }
}
createNavigationDots();

//clicking dot
const navigationDots = document.querySelectorAll('.single-dot');
navigationDots.forEach((dot, index) => dot.addEventListener('click', () => {
    // clearing whites
    navigationDots.forEach(el => el.classList.remove('active'))
    // adding white to clicked
    navDotsContainer.children[index].classList.add('active');
    slider.src = `./assets/slider/slide-${index}.jpg`;
    currImage = index;
}));

//Fixed navbar
// function fixedNav(){
//     const nav = document.querySelector('nav')
//     if (window.scrollY >= 500) {
//         nav.classList.add('fixed__nav')
//     } else {
//         nav.classList.remove('fixed__nav')
//     }
// }
// window.addEventListener('scroll', fixedNav)
// css:
// .fixed_nav{
//     background: #fefefe;
//     position: fixed;
//     left: 0;
//     right: 0;
//     z-index: 111;
// }
//Fixed navbar end

window.onload = changeSliderImage;