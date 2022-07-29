renderCart()

function renderCart() {
    const cartTitleEl = document.querySelector(".cart-detail .cart-title")
    let isChecked = getObjectFromLocalStorage("isCheckAll")[sessionID]

    cartTitleEl.innerHTML = `
        <input type="checkbox" name="toggle-all" id="toggle-all" ${isChecked ? "checked" : ""} onclick="toggleAllChecks(this)"/>
        <div class="product">Sản phẩm</div>
        <div class="prices">Giá</div>
        <div class="quantity">Số lượng</div>
        <div class="value">Số tiền</div>
        <div class="delete-all">Xóa hết</div>
    `
    const cartContentEl = document.querySelector(".cart-detail .cart-content")

    let cart = getObjectFromLocalStorage("techCart")
    if (!cart || !cart[sessionID] || cart[sessionID].length == 0) {
        cartContentEl.innerHTML = `<p>Bạn chưa mua sản phẩm nào. Tiếp tục mua và quay lại đây nhé </p>`
        // return;
    } else {
        let items = cart[sessionID]
        // render cart detail
        cartContentEl.innerHTML = ""
        for (let item of items) {
            cartContentEl.innerHTML += `
                <div class="cart-item">
                    <input type="checkbox" ${item.checked ? "checked" : ""} class="choose-item" onclick="toggleCheck(${item.id}, '${item.alterOption}', '${item.color}')"  />
    
                    <a href="./detail.html?id=${item.id}" class="product">
                      <div class="product-name">${item.name}</div>
                      <div class="product-attr">(${item.color}, ${item.alterOption})</div>
                    </a>
    
                    <div class="prices">
                      <div class="new-price">${formatMoney(item.price)}</div>
                      <div class="old-price">${formatMoney(item.oldPrice)}</div>
                    </div>
    
                    <div class="quantity">
                      <div class="value-button" id="decrease" value="Decrease Value" onclick="decreaseItemCount(${item.id}, '${item.alterOption}', '${item.color}')">-</div>
                      <span>${item.count}</span>
                      <div class="value-button" id="increase" value="Increase Value" onclick="increaseItemCount(${item.id}, '${item.alterOption}', '${item.color}')">+</div>
                    </div>
    
                    <div class="value">${formatMoney(item.count * item.price)}</div>
    
                    <div class="delete-item">
                      <i class="fa-solid fa-circle-xmark" onclick="deleteItem(${item.id}, '${item.alterOption}', '${item.color}')"></i>
                    </div>
                </div>`
        }
    }



    // render tien hang va tong so tien
    // chỉ tính tổng tiền item đc check
    let items = cart[sessionID]
    let totalValue = 0
    for (let item of items) {
        console.log(item)
        if (item.checked) totalValue += item.count * item.price
    }
    $(".payment .total-value span:last-child").html(formatMoney(totalValue))

}


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
function toggleAllChecks(ele) {
    let cart = getObjectFromLocalStorage("techCart")
    if (!cart) return
    let items = cart[sessionID]
    if (!items) return

    if (ele.checked) {
        for (let item of items) {
            item.checked = true
        }
    } else {
        for (let item of items) {
            item.checked = false
        }
    }

    saveToLocalStorage("techCart", cart)

    // toggle checkAll for that particular sessionID
    let isCheckAll = getObjectFromLocalStorage("isCheckAll")
    // console.log(isCheckAll[sessionID])
    isCheckAll[sessionID] = !isCheckAll[sessionID]
    saveToLocalStorage("isCheckAll", isCheckAll)

    renderCart()
}

// delete Item button

function deleteItem(id, alterOption, color) {
    console.log(id, alterOption, color)
    let cart = getObjectFromLocalStorage("techCart")
    if (!cart) return
    let items = cart[sessionID]
    if (!items) return
    console.log(items)

    // remove the check status in the local storage
    // let item = items.find(i => i.id == id && i.alterOption == alterOption && i.color == color)
    // item.checked = false

    // this is pass by value
    items = items.filter(i => i.id != id || i.alterOption != alterOption || i.color != color)
    cart[sessionID] = items

    saveToLocalStorage("techCart", cart)
    renderCart()

    console.log("end")
}






