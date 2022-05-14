const slides = document.getElementsByClassName('slider-img');
const dots = document.getElementsByClassName('dot-btn');
const banner = document.querySelector('.banner')
let counter = 0;
let myTimeout;
function showSlides(n) {


    // if (n > slides.length) counter = 1;
    // if (n < 1) counter = slides.length
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
        slides[i].classList.add('fade')
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }
    changeBannerBackgroundColor()
    slides[counter].style.display = 'block'
    dots[counter].classList.add("active")
    clearTimeout(myTimeout)
}

function currentSlide(n) {
    counter = n
    showSlides(counter)
}


function autoSlideShow() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.add('fade')
    }
    
    if (counter + 1 > slides.length) { counter = 0}
    slides[counter].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }
    dots[counter].classList.add("active")

    changeBannerBackgroundColor()


    counter++;
    myTimeout = setTimeout(autoSlideShow, 2000); // Change image every ... seconds
}

// for (let i = 0; i < slides.length; i++) {
//     slides[i].addEventListener('click', () => {
//         console.log('hehehe');
//     })
// }

function stopSlide(){
    clearTimeout(myTimeout);
    counter--;
}

function changeBannerBackgroundColor() {
    if (counter === 0) banner.style.backgroundColor = 'rgb(195, 200, 238)'
    else if (counter === 1) banner.style.backgroundColor = 'rgb(248, 210, 163)'
    else if (counter === 2) banner.style.backgroundColor = 'rgb(254, 115, 72)'
    else if (counter === 3) banner.style.backgroundColor = 'rgb(86, 0, 1)'
    else if (counter === 4) banner.style.backgroundColor = 'rgb(80, 81, 174)'
    else if (counter === 5) banner.style.backgroundColor = 'rgb(69, 0, 169)'
    else if (counter === 6) banner.style.backgroundColor = 'rgb(92, 30, 255)'
    else if (counter === 7) banner.style.backgroundColor = 'rgb(0, 178, 152)'
    else if (counter === 8) banner.style.backgroundColor = 'rgb(136, 5, 10)'
    else if (counter === 9) banner.style.backgroundColor = 'rgb(134, 218, 255)'
    else if (counter === 10) banner.style.backgroundColor = 'rgb(126, 0, 1)'
    else if (counter === 11) banner.style.backgroundColor = 'rgb(45, 83, 230)'
}


Array.from(slides).forEach((slide, index)=>{
    slide.addEventListener('mouseover', ()=> {
        stopSlide()
    })
    slide.addEventListener('mouseout', ()=> {
        autoSlideShow()
    })
})

Array.from(dots).forEach((dot, index)=>{
    dot.addEventListener('mouseover', ()=> {
        currentSlide(index)
    })
    dot.addEventListener('mouseout', ()=> {
        autoSlideShow()
    })
})

autoSlideShow()


