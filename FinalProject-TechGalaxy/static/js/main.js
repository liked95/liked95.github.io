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



const headerLoginBtn = document.querySelector(".login-btn")
const headerRegisterBtn = document.querySelector(".register-btn")

// console.log(localStorage.getItem("userID"))
let userID = JSON.parse(localStorage.getItem("userID"))
if (userID) {
    // Thay đăng nhập bằng tên username
    // console.log("sdfdsafd")
    headerLoginBtn.innerHTML = `${userID.username}`
    headerLoginBtn.href = "#"

    // THay đăng kí bằng đăng xuất
    const logoutBtn = document.createElement(`i`)
    logoutBtn.classList.add("fa-solid", "fa-power-off")
    logoutBtn.id = "logout-btn"
    headerRegisterBtn.parentNode.replaceChild(logoutBtn, headerRegisterBtn)
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


let logoutBtn = document.getElementById("logout-btn")
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        saveToLocalStorage("userID", null)
        window.location.reload()
    })
}


function renderCardItem(containerEl, arr) {
    containerEl.innerHTML = ""
    if (arr.length == 0) {
        containerEl.innerHTML = `<h2 class="empty-noti" style="font-size:16px">Không có sản phẩm tương ứng</h2>`
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
                descriptionEl += `<li>${feature}</li>`
            }
        }

        // rating
        let ratingsEl = ""
        for (let i = 0; i < p.ratings; i++) {
            ratingsEl += `<i class="fa-solid fa-star"></i>`
        }

        containerEl.innerHTML += `
            <div class="product-card">
                <a href="./detail.html?id=${p.id}" class="product-image">
                    <img src="../static/images/product-card-images/${p.indexProductImgURL}" alt="${p.name}">
                </a>

                <div class="product-content">
                    <p class="product-name">${p.name}</p>
                    <p class="product-id" style = "display:none">${p.id}</p>

                    <div class="alter-options">
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
                        <div class="bot-second">
                            <i class="fa-solid fa-circle-plus"></i>
                            <p>So sánh</p>
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



// $(".expand-history-btn").click(() => {
//     // renderPurchaseHistory()
//     if (!$(".fade-btn-container").hasClass("active")) {
//         $(".fade-btn-container").addClass("active")
//         $(".expand-history-btn").html("Thu gọn")
//         $("#payment-item-container").removeClass("shrink")
//     } else {
//         $(".fade-btn-container").removeClass("active")
//         $(".expand-history-btn").html(`Xem tất cả <span id="product-type-quantity">${checkItemLen}</span> loại sản phẩm`)
//         $("#payment-item-container").addClass("shrink")
//     }
// })


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
                <div class="product fw-bold px-5">Sản phẩm</div>
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

                <div class="history-payment-item-container position-relative">
                    <div class="payment-item-content">
                        ${productsHTML}
                    </div>

                    <div class="fade-btn-container d-flex justify-content-center">
                        <button class="expand-history-btn">Xem tất cả <span class="history-type-quantity">${purchase.purchasedItems.length}</span> loại
                            sản phẩm</button>
                    </div>
                </div>

            <div class="row" class="history-payment-shipment-info">
                <div class="total-cart-container col-6">
                    <h5 class="text-center mb-3 fw-bold">Tổng quan đơn hàng</h5>
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
                    <h5 class="text-center mb-3 fw-bold">Thông tin người nhận</h5>
                    <p>Họ và tên: <span class="history-user-name">${purchase.userInfo.name}</span></p>
                    <p>Số điện thoại <span class="history-user-phone">${purchase.userInfo.phone}</span></p>
                    <p>Địa chỉ: <span class="history-user-address">${purchase.userInfo.address}</span></p>
                    <p>Phương thức thanh toán: <span class="history-user-payment-method">${purchase.userInfo.paymentMethod}</span></p>
                </div>

            </div>
        </div>`
    }

}

renderPurchaseHistory()





