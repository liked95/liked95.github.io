const topSoldPhoneEl = document.querySelector(".top-sold-phones .row")
const topSoldTabletEl = document.querySelector(".top-sold-tablets .row")
const topSoldLaptopEl = document.querySelector(".top-sold-laptops .row")


function renderCardItem(containerEl, arr) {
    containerEl.innerHTML = ""
    if (arr.length == 0) {
        containerEl.innerHTML = `<h2>Không có sản phẩm tương ứng</h2>`
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
let smartphones = products.filter(p => p.category == "smartphone")
let tablets = products.filter(p => p.category == "tablet")
let laptops = products.filter(p => p.category == "laptop")

renderCardItem(topSoldPhoneEl, smartphones)
renderCardItem(topSoldTabletEl, tablets)
renderCardItem(topSoldLaptopEl, laptops)


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