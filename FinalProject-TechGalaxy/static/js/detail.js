// Initialise Carousel ********************************
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dotsContainer: "#thumbCarousel",
    })
})









function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}


// lấy id trên url
let params = new URLSearchParams(window.location.search)
let id = params.get("id")
console.log(id)

let product

if (id) {
    product = products.find(p => p.id == id)
    if (!product) {
        window.location.href = "./404.html"
    }
    console.log(product)

} else {
    //404
    window.location.href = "./404.html"
}

// product name
function renderProductName() {
    $(".product-name p").html(product.name)
}
renderProductName()

// product detail
const mainCarouselEl = document.querySelector("#mainCarousel")
const thumbCarouselEl = document.querySelector("#thumbCarousel")



function renderProductDetail() {
    mainCarouselEl.innerHTML = ""
    for (let mainCarouselURL of product.mainCarouselImages) {
        // console.log(mainCarouselURL)
        mainCarouselEl.innerHTML += `
            <div class="myCarousel">
                <img src="../static/images/main-carousel-images/${mainCarouselURL}" />
            </div>
        `
    }

    thumbCarouselEl.innerHTML = ""
    for (let i = 0; i < product.dotCarouselImages.length; i++) {
        dotCarouselURL = product.dotCarouselImages[i]
        thumbCarouselEl.innerHTML += `
            <div class="owl-dot owl-dot-img">
                <div class="thumbnail-image"><img
                        src="../static/images/thumnail-carousel/${dotCarouselURL}" /></div>
                <p class="thumbnail-name">${product.colors[i]}</p>
            </div>
        `
    }
}

renderProductDetail()

//sync two slides of the main product images
$('.owl-dot').click(function () {
    $(".owl-carousel").trigger('to.owl.carousel', [$(this).index(), 300]);
});






