const alertDuration = 1200
function createAlert(message) {
    let messageEl = document.createElement("div")
    messageEl.classList.add("alert", "alert-success")
    messageEl.role = "alert"
    messageEl.innerHTML = message
    document.body.prepend(messageEl)

    setTimeout(function(){ 
        $(".alert").fadeOut(alertDuration);
        setTimeout(() => {
            messageEl.remove()
        }, alertDuration)
    }, alertDuration);    
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
                        <span class="percent">${p.discounts[0]}%</span>
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
    percentEl.innerHTML = `${p.discounts[chosenIdx]}%`

}

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






