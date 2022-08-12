$(document).ready(function () {
    $(".banner-images").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        dots:true,
        

    })
})




const topSoldPhoneEl = document.querySelector(".top-sold-phones .row")
const topSoldTabletEl = document.querySelector(".top-sold-tablets .row")
const topSoldLaptopEl = document.querySelector(".top-sold-laptops .row")


// function renderCardItem(containerEl, arr) {
//     containerEl.innerHTML = ""
//     if (arr.length == 0) {
//         containerEl.innerHTML = `<h2>Không có sản phẩm tương ứng</h2>`
//         return
//     }

//     for (let p of arr) {
//         // tuy chon RAM
//         let optionEl = ""
//         let optionArr = p.alterOptions

//         if (optionArr.length > 0) {
//             for (const option of optionArr) {
//                 optionEl += `<button onclick=chooseOption(this)>${option}</button>`
//             }
//         }

//         // Dac tinh san pham
//         let descriptionEl = ""
//         let featureArr = p.features
//         if (featureArr.length > 0) {
//             for (let feature of featureArr) {
//                 descriptionEl += `<li>${feature}</li>`
//             }
//         }

//         // rating
//         let ratingsEl = ""
//         for (let i = 0; i < p.ratings; i++) {
//             ratingsEl += `<i class="fa-solid fa-star"></i>`
//         }

//         containerEl.innerHTML += `
//             <div class="product-card">
//                 <a href="./detail.html?id=${p.id}" class="product-image">
//                     <img src="../static/images/product-card-images/${p.indexProductImgURL}" alt="${p.name}">
//                 </a>

//                 <div class="product-content">
//                     <p class="product-name">${p.name}</p>
//                     <p class="product-id" style = "display:none">${p.id}</p>

//                     <div class="alter-options">
//                         ${optionEl}
//                     </div>

//                     <div class="old-price-container">
//                         <span class="old-price">${formatMoney(p.oldPrices[0])}</span>  
//                         <span class="percent">${Number(p.discounts[0]).toFixed(0)}%</span>
//                     </div>

//                     <p class="current-price">${formatMoney(p.currentPrices[0])}</p>

//                     <ul class="product-description">
//                        ${descriptionEl}
//                     </ul>

//                     <div class="product-card-bottom">
//                         <div class="bot-first">
//                             <div class="rating">
//                                 ${ratingsEl}
//                             </div>
//                             <div class="qtt-sold">
//                                 Đã bán: ${p.soldQuantity}
//                             </div>
//                         </div>
//                         <div class="bot-second">
//                             <i class="fa-solid fa-circle-plus"></i>
//                             <p>So sánh</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `
//     }

//     // color the first btn
//     const optionEls = document.querySelectorAll(".alter-options")
//     optionEls.forEach(ele => {
//         ele.firstElementChild.classList.add("active")
//     })
// }


let getProducts = getFromLocalStorage("productList")
// lay 10 sp nhieu ng mua nhat
let smartphones = getProducts.filter(p => p.category == "smartphone").sort((a, b) => b.soldQuantity - a.soldQuantity).slice(0, 10)
let tablets = getProducts.filter(p => p.category == "tablet")
let laptops = getProducts.filter(p => p.category == "laptop")

renderCardItem(topSoldPhoneEl, smartphones)
renderCardItem(topSoldTabletEl, tablets)
renderCardItem(topSoldLaptopEl, laptops)


