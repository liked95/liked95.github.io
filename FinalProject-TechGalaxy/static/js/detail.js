// Initialise Carousel ********************************
$(document).ready(function () {
    $("#mainCarousel").owlCarousel({
        items: 1,
        nav: true,
        dotsContainer: "#thumbCarousel",
    })
})


$(document).ready(function () {
    $("#related-product-carousel").owlCarousel({
        items: 5,
        nav: true,
    })
})

$(document).ready(function () {
    $("#watched-product-carousel").owlCarousel({
        items: 5,
        nav: true,
    })
})


function chooseAlterOption(ele) {
    const buttons = document.querySelectorAll(".option-container button") 
    Array.from(buttons).map(button => button.classList.remove("chosen-button-border"))
    ele.classList.add("chosen-button-border")

    // adjust price accordingly
    let idx = product.alterOptions.indexOf(ele.innerHTML)
    // console.log(idx)
    $(".price-info .new-price").html(formatMoney(product.currentPrices[idx]))
    $(".price-info .old-price").html(formatMoney(product.oldPrices[idx]))
    $(".price-info .discount").html(`(${formatMoney(product.discounts[idx])}%)`)
}

function chooseColor(ele) {
    const buttons = document.querySelectorAll(".color-container button") 
    Array.from(buttons).map(button => button.classList.remove("chosen-button-border"))
    ele.classList.add("chosen-button-border")
}





function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    value < 1 ? value = 1 : '';
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
    // main carousel
    mainCarouselEl.innerHTML = ""
    for (let mainCarouselURL of product.mainCarouselImages) {
        // console.log(mainCarouselURL)
        mainCarouselEl.innerHTML += `
            <div class="myCarousel">
                <img src="../static/images/main-carousel-images/${mainCarouselURL}" />
            </div>
        `
    }

    // nav carousel
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

    // main product image
    $(".product-detail-image")
    $(".product-detail-image").html(`
            <img src="../static/images/product-detail-img/${product.detailImgURL}" alt="${product.detailImgURL}">
        `)

    // option
    if (product.alterOptions) {
        const optionContainerEl = document.querySelector(".right-side .option-container")
        for (let option of product.alterOptions) {
            optionContainerEl.innerHTML += `<button onclick="chooseAlterOption(this)">${option}</button>`
        }
    }

    // colors
    if (product.colors) {
        const colorContainerEl = document.querySelector(".right-side .color-container")
        for (let color of product.colors) {
            colorContainerEl.innerHTML += `<button onclick="chooseColor(this)">${color}</button>`
        }
    }

    // price
    $(".price-info .new-price").html(formatMoney(product.currentPrices[0]))
    $(".price-info .old-price").html(formatMoney(product.oldPrices[0]))
    $(".price-info .discount").html(`(${formatMoney(product.discounts[0])}%)`)

    // tên cấu hình
    const specTitle = document.querySelector(".item-spec .title") 
    let brandTitle = ""
    if (product.category == "smartphone") brandTitle = "điện thoại"
    if (product.category == "tablet") brandTitle = "máy tính bảng"
    if (product.category == "laptop") brandTitle = "laptop"
    specTitle.innerHTML = `
    Cấu hình <span class="brand">${brandTitle}</span> <span class="product">${product.name}</span>`


    // bảng cấu hình
    const specTable = document.querySelector(".spec-table tbody")
    specTable.innerHTML = ""
    for (let [key, value] of Object.entries(product.specAttributes)) {
        specTable.innerHTML += `
        <tr>
            <td class="spec-key"><span>${key}</span>:</td>
            <td class="spec-attribute">${value}</td>
        </tr>
    `
    }
   
}

renderProductDetail()



//sync two slides of the main product images
$('.owl-dot').click(function () {
    $("#mainCarousel").trigger('to.owl.carousel', [$(this).index(), 300]);
});






