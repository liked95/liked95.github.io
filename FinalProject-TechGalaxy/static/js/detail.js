

// Initialise Carousel Và target dót
$(document).ready(function () {
    $("#mainCarousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dotsContainer: "#thumbCarousel",
    })
})



$(document).ready(function () {
    $("#related-product-carousel").owlCarousel({
        items: 5,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            476: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })

    $("#related-product-carousel").on("drag.owl.carousel", () => {
        $("body").css("overflow", "hidden")
    })
    
    $("#related-product-carousel").on("dragged.owl.carousel", () => {
        $("body").css("overflow", "auto")
    })
})

$(document).ready(function () {
    $("#watched-product-carousel").owlCarousel({
        items: 5,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            476: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })

    $("#watched-product-carousel").on("drag.owl.carousel", () => {
        $("body").css("overflow", "hidden")
    })

    $("#watched-product-carousel").on("dragged.owl.carousel", () => {
        $("body").css("overflow", "auto")
    })
})


function chooseAlterOption(ele) {
    const buttons = document.querySelectorAll(".option-container button")
    Array.from(buttons).map(button => button.classList.remove("active"))
    ele.classList.add("active")

    // adjust price accordingly
    let idx = product.alterOptions.indexOf(ele.innerHTML)
    // console.log(idx)
    $(".price-info .new-price").html(formatMoney(product.currentPrices[idx]))
    $(".price-info .old-price").html(formatMoney(product.oldPrices[idx]))
    $(".price-info .discount").html(`(${formatMoney(product.discounts[idx])}%)`)
}

function chooseColor(ele) {
    const buttons = document.querySelectorAll(".color-container button")
    Array.from(buttons).map(button => button.classList.remove("active"))
    ele.classList.add("active")
}








// lấy id trên url
let params = new URLSearchParams(window.location.search)
let id = params.get("id")

let product, productIdx
products = getFromLocalStorage("productList")
// console.log(products)

if (id) {
    products.forEach((p, idx) => {
        if (p.id == id) {
            product = p
            productIdx = idx
        }
    })
    if (!product) {
        window.location.href = "./404.html"
    }


} else {
    //404
    window.location.href = "./404.html"
}

$(".breadcrumb__brand").prop("href", `${product.category}.html`)
$(".breadcrumb__brand").html("Điện thoại")
$(".breadcrumb__product").prop("href", `${product.category}.html?brand=${product.brand}`)
let capBrand = product.brand.charAt(0).toUpperCase() + product.brand.slice(1)
$(".breadcrumb__product").html(capBrand)

// console.log(product, productIdx)

let brandTitle = ""
if (product.category == "smartphone") brandTitle = "điện thoại"
if (product.category == "tablet") brandTitle = "máy tính bảng"
if (product.category == "laptop") brandTitle = "laptop"

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


// render review section
// let reviews = product.reviews
// let reviewCount = reviews.length
let ratingAvgEl = document.querySelector(".rating-avg span")

function ratingCount(reviews, star) {
    return reviews.filter(review => review.rating == star).length
}



function renderProductReview() {
    // tên sản phẩm review
    let products = getFromLocalStorage("productList")
    let reviews = products[productIdx].reviews
    let reviewCount = reviews.length
    const reviewTitle = document.querySelector(".review-title")
    reviewTitle.innerHTML = `Đánh giá <span class="brand">${brandTitle}</span> <span class="product">${product.name}</span>`
    //số lượng đánh giá
    $(".rating-count span").html(reviewCount)
    // Đánh giá trung bình 
    if (reviewCount == 0) ratingAvgEl.innerHTML = 0
    else {
        ratingAvgEl.innerHTML = (reviews.reduce((total, review) => total + review.rating, 0) / reviewCount).toFixed(1)
    }
    // tổng hợp rating
    let ratingContent = ""
    for (let i = 5; i >= 1; i--) {
        const percent = reviewCount != 0 ? ((ratingCount(reviews, i) / reviewCount) * 100).toFixed(0) : 0
        ratingContent += `
        <div class="component">
            <p class="rating-label">${i} <span><i class="fa-solid fa-star"></i></span></p>
            <div class="rating-bar">
                <div class="rating-bar-percent" style="width: ${percent}%"></div>
            </div>
            <p class="rating-percent">${percent}%</p>
        </div>`
    }
    $(".rating-detail").html(ratingContent)
    // show 3 đánh giá đầu tiên, gần nhất, shift() method
    let reviewContentEl = document.querySelector(".user-review-container")
    if (reviewCount == 0) reviewContentEl.innerHTML = `<p>Chưa có đánh giá nào cho sản phẩm này</p>`
    else {
        let showLength = reviewCount >= 3 ? 3 : reviewCount
        reviewContentEl.innerHTML = ""

        for (let i = 0; i < showLength; i++) {
            let starNum = reviews[i].rating

            let userRatingContent = ""
            for (let j = 0; j < starNum; j++) {
                userRatingContent += `<i class="fa-solid fa-star"></i>`
            }

            reviewContentEl.innerHTML += `
            <div class="user-review">
                <div class="review-identity">
                    <div class="reviewer-name">${reviews[i].reviewer}</div>
                    <div class="user-rating">${userRatingContent}</div>
                    <div class="review-time">
                        <div class="date">${reviews[i].date}</div>
                        <div class="time">${reviews[i].time}</div>
                    </div>
                </div>

                <p class="review-content">
                ${reviews[i].content}
                </p>
            </div>`
        }
    }
}

renderProductReview()

//render sp liên quan
let relatedProductEL = document.getElementById("related-product-carousel")
renderCardItem(relatedProductEL, products.filter(p => p.category == "smartphone" && p.brand == product.brand))

//render sp đã xem
// mỗi lần vào trang detail của 1 sp thì lưu sp đó vào localStorage "watchedProducts" tương ứng với userId 
// watchedProducts = {
//     userID1: [1, 2, 4, 5],
//     userID2: [3, 2, 3, 5]
// }

// let sessionID = userID ? userID.id : -1

function renderWatchedProducts() {
    let watchContainerEl = document.querySelector("#watched-product-carousel")
    let watched = getObjectFromLocalStorage("watchedProducts")

    if (!watched || !watched[sessionID]) {
        $(".watched-products").css("display", "none")
        watchContainerEl.innerHTML = `Chưa có sp đã xem`
    } else {
        let watchProductArr = []
        for (let productID of watched[sessionID]) {
            watchProductArr.push(products.find(p => p.id == productID))
        }
        renderCardItem(watchContainerEl, watchProductArr)
    }




    if (!watched) {
        watched = {}
        watched[sessionID] = [product.id]
    } else {
        if (!watched[sessionID]) {
            watched[sessionID] = [product.id]
        } else {
            if (!watched[sessionID].includes(product.id)) {
                watched[sessionID].unshift(product.id)
            }
        }
    }

    saveToLocalStorage("watchedProducts", watched)
}

renderWatchedProducts()


//render review modal
$("#writeReviewModalLongTitle").html(`Thêm đánh giá cho ${product.name}`)

// click vào nút gửi đánh giá
document.getElementById("send-review-btn").addEventListener("click", () => {

    const reviewInputEl = document.querySelector("#writeReviewModal textarea")
    let reviewContent = reviewInputEl.value.trim()
    if (!reviewContent) {
        alert("Nội dung đánh giá không được để trống!")
        return;
    }
    // retrieve rating
    let rating;
    let inputs = document.querySelectorAll("#writeReviewModal input")

    inputs.forEach(input => {
        if (input.checked) {
            rating = Number(input.value)
        }
    })

    let date = new Date().toLocaleDateString("vi-VN")
    let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // console.log(date, time, sessionID)
    let reviewerName = userID ? userID.username : "Ẩn danh"
    // modify products arr
    products[productIdx].reviews.unshift({
        reviewer: reviewerName,
        date: date,
        time: time,
        rating: rating,
        content: reviewContent
    })

    // lưu lại trên LS
    saveToLocalStorage("productList", products)

    // refresh phần review
    renderProductReview()
    // renderAllReview()

    //clear data
    reviewInputEl.value = ""

    // đóng modal
    $("#writeReviewModal").modal("hide")

    setTimeout(() => {
        createAlert("Cảm ơn bạn đã thêm đánh giá")
    }, 400)
})

// title 
$("#allReviewModalLongTitle").html(`Tất cả đánh giá cho ${product.name}`)

// click vào nút xem toàn bộ đánh giá
document.getElementById("see-all-reviews").addEventListener("click", () => {
    renderAllReview()
})

// renderAllReview()

function renderAllReview() {
    const allReviewEl = document.querySelector("#all-review-modal .user-review-container")

    let products = getFromLocalStorage("productList")
    let reviews = products[productIdx].reviews
    console.log(reviews)
    allReviewEl.innerHTML = ""
    for (let review of reviews) {
        let starNum = review.rating

        let userRatingContent = ""
        for (let j = 0; j < starNum; j++) {
            userRatingContent += `<i class="fa-solid fa-star"></i>`
        }

        allReviewEl.innerHTML += `
        <div class="user-review">
            <div class="review-identity">
                <div class="reviewer-name">${review.reviewer}</div>
                <div class="user-rating">${userRatingContent}</div>
                <div class="review-time">
                    <div class="date">
                        <i class="fa-solid fa-calendar-days"></i>
                        ${review.date}
                    </div>
                    <div class="time">
                        <i class="fa-solid fa-clock"></i>
                        ${review.time}
                    </div>
                </div>
            </div>

            <p class="review-content">
                ${review.content}
            </p>
        </div>`
    }
}


// increase or decrease count
let count = 1
const countEl = document.querySelector(".change-quantity input")
countEl.value = count
const minusCount = document.querySelector(".change-quantity #decrease")
const plusCount = document.querySelector(".change-quantity #increase")

countEl.addEventListener("keyup", () => {
    count = parseInt(countEl.value)
})

plusCount.addEventListener("click", () => {
    count++
    countEl.value = count
})

minusCount.addEventListener("click", () => {
    console.log("Hello world")
    count--
    if (count < 1) {
        count = 1
    }
    countEl.value = count
})


// add to Cart btn
const addToCartBtn = document.querySelector(".add-to-cart")
addToCartBtn.addEventListener("click", () => {
    const alterOption = document.querySelector(".option-container .active")
    if (!alterOption) {
        alert("Bạn cần chọn 1 tùy chọn!")
        return
    }

    const colorOption = document.querySelector(".color-container .active")
    if (!colorOption) {
        alert("Bạn cần chọn 1 màu!")
        return
    }

    let optionIdx = product.alterOptions.indexOf(alterOption.innerHTML)
    let colorIdx = product.colors.indexOf(colorOption.innerHTML)
    let item = {
        id: product.id,
        name: product.name,
        alterOption: alterOption.innerHTML,
        color: colorOption.innerHTML,
        price: product.currentPrices[optionIdx],
        oldPrice: product.oldPrices[optionIdx],
        count: count,
        image: product.dotCarouselImages[colorIdx],
        checked: true,
    }

    addItemToCart(item)
    alert("Đã thêm vào giỏ hàng")
})








