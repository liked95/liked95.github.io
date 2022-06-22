// Initialise Carousel ********************************
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
        target: mainCarousel,
        friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
        on: {
            change: (that) => {
                mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                    friction: 0,
                });
            },
        },
    },
});

function formatMoney(num) {
    return num.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}


// lấy id trên url
let params = new URLSearchParams(window.location.search)
let id = params.get("id")
console.log(id)

let product;
const productDetail = document.getElementById("detail")
const mainCarouselEl = document.getElementById("mainCarousel")
const thumbCarouselEl = document.getElementById("thumbCarousel")
console.log(productDetail)
// check if id is included in the URL




if (id) {
    product = products.find(p => p.id == id)
    if (!product) {
        window.location.href = "./404.html"
    }
    console.log(product)
    document.querySelector(".breadcrumb-item.active").innerText = product.name
    renderProduct(product)
    renderImages(product)
} else {
    //404
    window.location.href = "./404.html"
}



function renderProduct(obj) {
    let sizeHTML = ""
    for (let size of obj.sizes) {
        sizeHTML += `<span class="border py-2 px-3 border-dark me-2" onclick = "chooseSize(this)">${size}</span>`
    }

    productDetail.innerHTML = `
        <h2 class="product-name fs-3">${obj.name}</h2>
        <p class="product-price text-danger fs-4 fw-bold mb-4">${formatMoney(obj.price)}</p>

        <div class="product-size mb-4">
            ${sizeHTML}
        </div>

        <div class="d-flex align-items-center mb-4">
            <span class="border d-inline-block me-3">
                <span class="py-2 px-3 d-inline-block fw-bold btn-minus-count">-</span>
                <span class="py-2 px-3 d-inline-block fw-bold count">1</span>
                <span class="py-2 px-3 d-inline-block fw-bold btn-plus-count">+</span>
            </span>

            <button class="btn btn-dark py-2 rounded-0 btn-add-to-cart">Thêm vào giỏ hàng</button>
        </div>

        <div class="product-description">
            <p>${obj.description}</p>
        </div>
    `
}

function renderImages(obj) {
    mainCarouselEl.innerHTML = ""
    thumbCarouselEl.innerHTML = ""
    for (let image of obj.images) {
        mainCarouselEl.innerHTML += `
            <div class="carousel__slide" data-src="${image}" data-fancybox="gallery">
                <img src="${image}"/>
            </div>
        `

        thumbCarouselEl.innerHTML += `
            <div class="carousel__slide">
                <img class="panzoom__content" src="${image}" />
            </div>
        `
    }
}

let count = 1
const countEl = document.querySelector(".count")
const minusCount = document.querySelector(".btn-minus-count")
const plusCount = document.querySelector(".btn-plus-count")


plusCount.addEventListener("click", () => {
    count++
    countEl.innerText = count
})

minusCount.addEventListener("click", () => {
    console.log("Hello world")
    count--
    if (count < 1) {
        count = 1
    }
    countEl.innerText = count
})



function chooseSize(ele) {
    // const selectedEl = document.querySelector(".selected")
    // if (selectedEl) {
    //     selectedEl.classList.remove("selected", "bg-dark", "text-white")
    // }
    const sizeEls = document.querySelectorAll(".product-size span")
    Array.from(sizeEls).map(size => size.classList.remove("selected", "bg-dark", "text-white"))
    ele.classList.add("selected", "bg-dark", "text-white")
}


const btnAddToCart = document.querySelector(".btn-add-to-cart")

btnAddToCart.addEventListener("click", () => {
    const selectedEl = document.querySelector(".product-size .selected")
    if (!selectedEl) {
        alert("vui long chon size")
        return;
    }

    let item = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        count: count,
        size: selectedEl.innerText
    }
    
    addItemToCart(item)
    alert("Thêm vào giỏ hàng thành công")
    
})


