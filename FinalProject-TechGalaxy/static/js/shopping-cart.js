function renderCart() {
    const cartContentEl = document.querySelector(".cart-detail .cart-content")
    
    let cart = getObjectFromLocalStorage("techCart")
    if (!cart || !cart[sessionID]) {
        cartContentEl.innerHTML = `<p>Bạn chưa mua sản phẩm nào. Tiếp tục mua và quay lại đây nhé </p>`
        return;
    }
    
    let items = cart[sessionID]
    // render cart detail
    cartContentEl.innerHTML = ""
    for (let item of items) {
        cartContentEl.innerHTML += `
            <div class="cart-item">
                <input type="checkbox" ${item.checked ? "checked" : ""} class="choose-item" onclick="toggleCheck(${item.id}, '${item.alterOption}', '${item.color}')"  />

                <div class="product">
                  <div class="product-name">${item.name}</div>
                  <div class="product-attr">(${item.color}, ${item.alterOption})</div>
                </div>

                <div class="prices">
                  <div class="new-price">${formatMoney(item.price)}</div>
                  <div class="old-price">${formatMoney(item.oldPrice)}</div>
                </div>

                <div class="quantity">
                  <div class="value-button" id="decrease" value="Decrease Value" onclick="decreaseItemCount(${item.id}, '${item.alterOption}', '${item.color}')">-</div>
                  <span>${item.count}</span>
                  <div class="value-button" id="increase" value="Increase Value" onclick="increaseItemCount(${item.id}, '${item.alterOption}', '${item.color}')">+</div>
                </div>

                <div class="value">${formatMoney(item.count*item.price)}</div>

                <div class="delete-item">
                  <i class="fa-solid fa-circle-xmark"></i>
                </div>
            </div>`
    }

    // render tien hang va tong so tien
    // chỉ tính tổng tiền item đc check
    let totalValue = 0
    for (let item of items) {
        if (item.checked) totalValue += item.count * item.price
    }
    $(".payment .total-value span:last-child").html(formatMoney(totalValue))

}

renderCart()

// Tăng / Giảm số lượng từng item
function increaseItemCount(id, alterOption, color) {
    let cart = getObjectFromLocalStorage("techCart")
    let items = cart[sessionID]
    let item = items.find(i => i.id == id && i.alterOption == alterOption && i.color == color)
    item.count++
    saveToLocalStorage("techCart", cart)
    renderCart()
}

function decreaseItemCount(id, alterOption, color) {
    let cart = getObjectFromLocalStorage("techCart")
    let items = cart[sessionID]
    let item = items.find(i => i.id == id && i.alterOption == alterOption && i.color == color)
    if (item.count > 1) {
        item.count--
    }
    saveToLocalStorage("techCart", cart)
    renderCart()
}

// Chọn / Bỏ chọn từng item
function toggleCheck(id, alterOption, color) {

    let cart = getObjectFromLocalStorage("techCart")
    let items = cart[sessionID]
    let item = items.find(i => i.id == id && i.alterOption == alterOption && i.color == color)
    item.checked = !item.checked
    
    saveToLocalStorage("techCart", cart)
    renderCart()
}

// toggle all checks
document.getElementById("toggle-all").addEventListener("click", (e) => {
    let cart = getObjectFromLocalStorage("techCart")
    let items = cart[sessionID]

    if (e.currentTarget.checked) {
        for (let item of items) item.checked = true
    } else {
        for (let item of items) item.checked = false
    }

    saveToLocalStorage("techCart", cart)
    renderCart()
})





