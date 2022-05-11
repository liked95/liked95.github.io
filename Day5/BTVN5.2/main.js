const slides = document.getElementsByClassName('slider-img');
const dots = document.getElementsByClassName('dot-btn');
let slideIndex = 0;

function showSlides(n) {


    // if (n > slides.length) slideIndex = 1;
    // if (n < 1) slideIndex = slides.length
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', "")
    }

    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].className += ' active'
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function autoSlideShow() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(autoSlideShow, 4000); // Change image every 2 seconds
}

autoSlideShow()

