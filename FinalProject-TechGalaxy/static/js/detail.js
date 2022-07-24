// Initialise Carousel ********************************
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
        target: mainCarousel,
        friction: 0.9,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
});


// Carousel sản phẩm liên quan 
const relatedProductCarousel = new Carousel(document.querySelector("#related-product-carousel"), {
    Dots: false,
    slidesPerPage: 1,
    infinite: false,
});

// Carousel sản phẩm liên quan 
const watchedProductCarousel = new Carousel(document.querySelector("#watched-product-carousel"), {
    Dots: false,
    slidesPerPage: 1,
    infinite: false,
    center: false,
});


// Customize Fancybox

// Fancybox.bind('[data-fancybox="gallery"]', {
//     Carousel: {
//         on: {
//             change: (that) => {
//                 mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
//                     friction: 0,
//                 });
//             },
//         },
//     },
// });

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

