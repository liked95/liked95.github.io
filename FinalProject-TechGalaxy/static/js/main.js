// API GHN liked95
const GHNToken = "6b47d361-0f52-11ed-8636-7617f3863de9"
const GHNShopID = 3136159

const alertDuration = 1200
function createAlert(message, duration = alertDuration) {
    let messageEl = document.createElement("div")
    messageEl.classList.add("alert", "alert-success")
    messageEl.role = "alert"
    messageEl.innerHTML = message
    document.body.prepend(messageEl)

    setTimeout(function () {
        $(".alert").fadeOut(duration);
        setTimeout(() => {
            messageEl.remove()
        }, duration)
    }, duration);
}

function formatMoney(num) {
    return num.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}

function isSame(arr1, arr2) {
    return arr1.some(ele => arr2.includes(ele))
}

function saveToLocalStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item))
}

function getFromLocalStorage(key) {
    let value = localStorage.getItem(key)
    if (value) {
        return JSON.parse(value)
    } else {
        return []
    }
}

function getObjectFromLocalStorage(key) {
    let value = localStorage.getItem(key)
    if (value !== undefined) {
        return JSON.parse(value)
    } else {
        return {}
    }
}

// Lưu dynamic productList vào localstorage 1 lần duy nhất
let isAlreadyLoadedIntoLocalStorage = getObjectFromLocalStorage("isLoaded")
if (!isAlreadyLoadedIntoLocalStorage) {
    saveToLocalStorage("productList", products)
    saveToLocalStorage("isLoaded", true)
}





// console.log(localStorage.getItem("userID"))
let userID = JSON.parse(localStorage.getItem("userID"))
// replace thanh phan login bang user info khi đăng nhập
if (userID) {
    let credentialEl = $("<div></div")
    credentialEl.addClass("credential-container")
    credentialEl.html(`
        <div class="avatar-image">
            <img src="../static/images/contingency-images/default-avatar.png" alt="ava-default">
        </div>
        <div class="arrow-up"></div>
        <ul class="dropdown-container">
            <li>Xin chào <b>${userID.username}</b></li>
            <li data-toggle="modal" data-target="#orderHistory">Lịch sử đặt hàng</li>
            <li><a class="dropdown-menu-item" href="#">Another action</a></li>
            <li class="logout-btn">Đăng xuất</li>
        </ul>
    `)
    $(".login-logout").replaceWith(credentialEl)

    // responsive
    let responsiveCredEl = $("<li></li>")
    responsiveCredEl.addClass("menu-item")
    responsiveCredEl.html(`
        <div class="sidebar-main-menu">
            <div class="credential-sidebar d-flex">
                <span class="sidebar-avatar">
                    <img src="../static/images/contingency-images/default-avatar.png" alt="default-avatar">
                </span>

                <span>
                    <b>${userID.username}</b>
                </span>
            </div>

            <span class="arrow-container" onclick="toggleSubMenu(this)">
                <i class="fa-solid fa-chevron-right"></i>
            </span>
        </div>

        <ul class="sub-menu">
            <li class="sub-menu-item" id="side-bar-history" data-toggle="modal" data-target="#orderHistory">Lịch
                sử đặt hàng</li>
            <li class="sub-menu-item logout-btn">Đăng xuất</li>
        </ul>
    `)
    // append to the beginning of side bar
    $(".side-menu").prepend(responsiveCredEl)
    $("#sidebar-login-logout").hide()
} else {
    $("#sidebar-login-logout").show()
}


let sessionID = userID ? userID.id : -1

// kiểm tra xem toggleAll có đc tick cho từng session ID ko?
let isCheckAll = getObjectFromLocalStorage("isCheckAll")

if (!isCheckAll) {
    isCheckAll = {}
    isCheckAll[sessionID] = true
} else {
    if (isCheckAll[sessionID] == undefined) {
        isCheckAll[sessionID] = true
    }
}

saveToLocalStorage("isCheckAll", isCheckAll)


let logoutBtns = document.querySelectorAll(".logout-btn")
if (logoutBtns) {
    Array.from(logoutBtns).forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(btn);
            saveToLocalStorage("userID", null)
            window.location.href = "index.html"
        })
    })
}

function avgRating(reviews) {
    let sum = 0
    for (let review of reviews) {
        sum += review.rating
    }
    return (sum/reviews.length).toFixed(1)
}


function renderCardItem(containerEl, arr) {
    containerEl.innerHTML = ""
    if (arr.length == 0) {
        containerEl.innerHTML = `
            <p class="search-not-found">Không có sản phẩm tương ứng!</p>
            <span class="emoji">
                <img src="../static/images/contingency-images/anya-smug.png" alt="anya-smug">
            </span>
        `

        return
    }

    for (let p of arr) {
        // tuy chon RAM

        let optionEl = ""
        let optionArr = p.alterOptions
        if (optionArr.length > 0) {
            for (const option of optionArr) {
                optionEl += `<button onclick=chooseOption(this)>${option}</button>`
            }
        }

        // Dac tinh san pham
        let descriptionEl = ""
        let featureArr = p.features
        if (featureArr.length > 0) {
            for (let feature of featureArr) {
                descriptionEl += `<li><span>${feature}</span></li>`
            }

            descriptionEl += `<li class="see-more-mb"><span>.....</span></li>`
        }

        // rating
        let ratingsEl = `<i class="fa-solid fa-star"></i> <span>${avgRating(p.reviews)}</span>`

        containerEl.innerHTML += `
            <div class="product-card">
                <a href="./detail.html?id=${p.id}" class="product-image">
                    <img src="../static/images/product-card-images/${p.indexProductImgURL}" alt="${p.name}">
                </a>

                <div class="product-content">
                    <p class="product-name">${p.name}</p>
                    <p class="product-id" style = "display:none">${p.id}</p>

                    <div class="alter-options no-scrollbar">
                        ${optionEl}
                    </div>

                    <div class="old-price-container">
                        <span class="old-price">${formatMoney(p.oldPrices[0])}</span>  
                        <span class="percent">${Number(p.discounts[0]).toFixed(0)}%</span>
                    </div>

                    <p class="current-price">${formatMoney(p.currentPrices[0])}</p>

                    <ul class="product-description">
                       ${descriptionEl}
                    </ul>

                    <div class="product-card-bottom">
                        <div class="bot-first">
                            <div class="rating">
                                ${ratingsEl}
                            </div>
                            <div class="qtt-sold">
                                Đã bán: ${p.soldQuantity}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    // color the first btn
    const optionEls = document.querySelectorAll(".alter-options")
    optionEls.forEach(ele => {
        ele.firstElementChild.classList.add("active")
    })

}

function chooseOption(ele) {
    const productContentBox = ele.parentNode.parentNode
    const options = ele.parentNode.children
    Array.from(options).map(button => button.classList.remove("active"))
    ele.classList.add("active")

    const productID = productContentBox.querySelector(".product-id").innerText
    const chosenIdx = Array.from(options).indexOf(ele)
    let p = products.find(p => p.id == productID)

    let oldPriceEl = productContentBox.querySelector(".old-price")
    oldPriceEl.innerHTML = `${formatMoney(p.oldPrices[chosenIdx])}`

    let currentPriceEl = productContentBox.querySelector(".current-price")
    currentPriceEl.innerHTML = `${formatMoney(p.currentPrices[chosenIdx])}`

    let percentEl = productContentBox.querySelector(".percent")
    percentEl.innerHTML = `${Number(p.discounts[chosenIdx]).toFixed(0)}%`

}

// global func to filter product for each different category
function filterProduct(originalArr, filterTagArr, category, categoryContainer) {
    const filterObject = {}
    filterTagArr.forEach(object => {
        if (!filterObject[object.key]) {
            filterObject[object.key] = [object.value]
        } else {
            filterObject[object.key].push(object.value)
        }
    })


    let filterRes = []

    for (let p of originalArr) {
        if (p.category !== category) {
            continue;
        }
        let isMatch = true

        for (let key in filterObject) {
            let values = filterObject[key]
            values = values.map(value => value.toLowerCase())

            if (key == "brand") {
                if (!values.includes(p[key].toLowerCase())) {
                    isMatch = false
                    break
                }
            } else if (key == "price") {
                let isInPriceRange = values.some(value => {
                    let pair = value.split(":")
                    const low = 10 ** 6 * Number(pair[0]), high = 10 ** 6 * Number(pair[1])
                    // console.log(low, high)
                    return (low <= p.currentPrices[0]) && (p.currentPrices[0] <= high)
                })

                if (!isInPriceRange) {
                    isMatch = false
                    break
                }
            } else {
                let productValues = p[key].map(val => val.toLowerCase())
                // console.log(productValues)
                if (!isSame(productValues, values)) {
                    isMatch = false
                    break
                }
            }

        }

        if (isMatch) filterRes.push(p)
    }
    filterResults = filterRes
    renderCardItem(categoryContainer, filterRes)

}

// global func to update cart length

const updateCartCount = () => {
    let cart = getFromLocalStorage("techCart")
    if (!cart) {
        $(".cart-length").html(0)
    }

    let cartLen = cart[sessionID] ? cart[sessionID].length : 0
    $(".cart-length").html(cartLen)
}


updateCartCount()






function renderPurchaseHistory() {
    const purchaseHistoryEl = document.querySelector("#orderHistory .modal-body")
    console.log(purchaseHistoryEl);
    let purchaseHistory = getObjectFromLocalStorage("purchases")

    if (!purchaseHistory || !purchaseHistory[sessionID]) {
        purchaseHistoryEl.innerHTML = `<p>Bạn chưa mua sản phẩm nào!</p>`
        return;
    }

    let purchases = purchaseHistory[sessionID]
    purchaseHistoryEl.innerHTML = ""

    for (let purchase of purchases) {
        // console.log(purchase);
        let productsHTML = `
            <div class="payment-item-title d-flex mb-3">
                <div class="product fw-bold text-center">Sản phẩm</div>
                <div class="prices text-end fw-bold px-4">Giá</div>
                <div class="quantity text-center fw-bold">Số lượng</div>
                <div class="value text-end fw-bold">Số tiền</div>
            </div>`
        for (let product of purchase.purchasedItems) {
            productsHTML += `
                <div class="cart-item mb-2">

                    <div class="product d-flex">
                        <div class="cart-item-image">
                            <img src="../static/images/thumnail-carousel/${product.image}"
                                alt="${product.image}">
                        </div>

                        <div class="cart-item-detail">
                            <div class="product-name">${product.name}</div>
                            <div class="product-attr">(${product.color}, ${product.alterOption})</div>
                        </div>
                    </div>

                    <div class="prices text-end">
                        <div class="new-price fw-bold">${formatMoney(product.price)}</div>
                        <div class="old-price"><del>${formatMoney(product.oldPrice)}<del></div>
                    </div>

                    <div class="quantity text-center">
                        <span class="mobile-count-label">Số lượng: </span>
                        <span>${product.count}</span>
                    </div>
                    
                    <div class="value text-end">${formatMoney(product.count * product.price)}</div>
                </div>
            `
        }


        purchaseHistoryEl.innerHTML += `
            <div class="history-item mb-4">
                <div class="payment-time d-flex mb-2 p-2">
                    <div class="history-date">
                        <i class="fa-solid fa-calendar-days"></i>
                        ${purchase.purchaseTime.date}
                    </div>
                    <div class="history-time">
                        <i class="fa-solid fa-clock"></i>
                        ${purchase.purchaseTime.hour}
                    </div>
                </div>

                <div class="history-payment-item-container position-relative ${purchase.purchasedItems.length > 2 ? "shrink" : ""}">
                    <div class="payment-item-content">
                        ${productsHTML}
                    </div>

                    <div class="fade-btn-container d-flex justify-content-center ${purchase.purchasedItems.length <= 2 ? "d-none" : ""}">
                        <button class="expand-history-btn" onclick="toggleHistoryItem(this)">Xem tất cả</button>
                    </div>
                </div>

            <div class="row" class="history-payment-shipment-info">
                <div class="total-cart-container col-6">
                    <h6 class="text-center mb-3 fw-bold">Tổng quan đơn hàng</h6>
                    <div class="total-value">
                        <span>Tiền hàng</span>
                        <span>${purchase.financialVals.totalValue}</span>
                    </div>

                    <div class="shipment-fee">
                        <span>Phí vận chuyển</span>
                        <span>${purchase.financialVals.shipmentFee}</span>
                    </div>

                    <div class="discount">
                        <span>Chiết khấu</span>
                        <span>${purchase.financialVals.discount}</span>
                    </div>

                    <div class="pretax-value">
                        <span>Tạm tính</span>
                        <span>${purchase.financialVals.pretaxValue}</span>
                    </div>

                    <div class="vat">
                        <span>VAT (8%)</span>
                        <span>.....</span>
                    </div>

                    <div class="grand-total fw-bold">
                        <span>Tổng cộng</span>
                        <span>${purchase.financialVals.grandTotal}</span>
                    </div>


                </div>

                <div class="receiver-info col-6">
                    <h6 class="text-center mb-3 fw-bold">Thông tin người nhận</h6>
                    <p>Họ và tên: <span class="history-user-name">${purchase.userInfo.name}</span></p>
                    <p>Số điện thoại <span class="history-user-phone">${purchase.userInfo.phone}</span></p>
                    <p>Địa chỉ: <span class="history-user-address">${purchase.userInfo.address}</span></p>
                    <p>Phương thức thanh toán: <span class="history-user-payment-method">${purchase.userInfo.paymentMethod}</span></p>
                </div>

            </div>
        </div>`
    }

}

$("#orderHistory").on("show.bs.modal", () => {
    renderPurchaseHistory()
})


function toggleHistoryItem(ele) {
    if (!$(ele).parent().hasClass("active")) {
        $(ele).parent().addClass("active")
        $(ele).html("Thu gọn")
        $(ele).parent().parent().removeClass("shrink")
    } else {
        $(ele).parent().removeClass("active")
        $(ele).html(`Xem tất cả`)
        $(ele).parent().parent().addClass("shrink")
    }
}


products = getFromLocalStorage('productList')
// Tìm kiếm trên thanh search bar





$(".search-input input").keyup((e) => {
    renderSearchResult()

    if (e.keyCode == 13) {
        // 2. hiển thị khi enter
        redirectFirstRes()
    }

    if (e.keyCode == 27) {
        $(".search-input input").val("")
        $(".search-input input").blur()
        $(".search-input input").removeClass("typed")
        $("#search-result").hide()
    }
})

$(".search-input input").focus((e) => {
    renderSearchResult()
})

function renderSearchResult() {
    let searchVal = $(".search-input input").val().toLowerCase().trim()
    const searchResEl = $("#search-result")
    // if (!searchVal) {
    //     return;
    // }

    let res = []
    if (searchVal) {
        // them class cho input
        $(".search-input input").addClass("typed")
        for (let product of products) {
            if (product.name.toLowerCase().includes(searchVal)) {
                res.push({ name: product.name, id: product.id })
            }
        }
        //ẩn glass hiện X
        $(".glass-img .magnify-glass").hide()
        $(".glass-img .cancel-search-icon").show()
    } else {
        $(".search-input input").removeClass("typed")
        $(".glass-img .magnify-glass").show()
        $(".glass-img .cancel-search-icon").hide()
    }
    // console.log(res)
    if (res.length == 0 && searchVal != '') {
        searchResEl.html(
            `<p class="search-not-found">Không tìm thấy sản phẩm nào</p>
            <span class="emoji">
                <img src="../static/images/contingency-images/anya-shock.gif" alt="anya-shock">
            </span>
        `)
    } else {
        let searchHTML = ``
        for (let p of res) {
            searchHTML += `
                <a href="./detail.html?id=${p.id}" class="search-item">
                    <p>${p.name}</p>
                </a>
            `
        }

        searchResEl.html(searchHTML)
    }
}


// click outside to close the search result
$(document).click((e) => {
    let searchInput = document.querySelector(".search-input input")
    let searchResEl = document.getElementById("search-result")

    if (searchInput.contains(e.target) || searchResEl.contains(e.target)) {
        $("#search-result").show()
    } else {
        $("#search-result").hide()
        $(".search-input input").removeClass("typed")
        $(".glass-img .magnify-glass").show()
        $(".glass-img .cancel-search-icon").hide()
    }
})

// hiển thị kết quả tìm kiếm đầu tiên
function redirectFirstRes() {
    const result = document.querySelector("#search-result > a:first-child")
    if (!result) {
        return;
    }
    window.location.href = result.href
}
// focus khi nhan kinh lup
// $(".glass-img .magnify-glass").click(() => {
//     $(".search-input input").focus()
// })
// out search func khi click X
$(".search-input .cancel-search-icon").click((e) => {
    $("#search-result").hide()
    $(".search-input input").removeClass("typed")
    $(".search-input input").val("")
    $(".glass-img .magnify-glass").show()
    $(".glass-img .cancel-search-icon").hide()
})







// sidebar responsive

// click vào btn để mở sidebar

function closeSideBar() {
    $("#side-nav-container").removeClass("active")
    $("#back-drop").removeClass("active")
    $("body").css("overflow", "auto")
}

// click vào hamburger
$("#sidebar-open-btn").click((e) => {
    $("#side-nav-container").addClass("active")
    $("#back-drop").addClass("active")
    $("body").css("overflow", "hidden")
})

// 2 cách đóng sidebar
$("#close-btn").click(() => {
    closeSideBar()
})

$("#back-drop").click(() => {
    closeSideBar()
})


// đóng side bar khi click vào modal btn
$("#side-bar-history").click((e) => {
    closeSideBar()
})


// Click vào arrow để drop down menu
function toggleSubMenu(ele) {
    $(ele).parent().next().toggle(300)
    $(ele).children().toggleClass("active")
}


// click để mở compare panel
$("#fixed-cp-btn").click(() => {
    $(".compare-nav").toggleClass("active")
})
