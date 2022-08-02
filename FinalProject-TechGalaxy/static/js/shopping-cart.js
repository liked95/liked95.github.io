$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// API Tỉnh huyện xã của Giao Hang Nhanh
let provinceID, districtID, wardCode
let totalValue = 0, shipmentFee = 0, discountFactor = 0, discountLimit = Infinity
let discountValue, preTaxValue, grandTotal
let checkItemLen

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
    } else {
        let items = cart[sessionID]
        // render cart detail
        cartContentEl.innerHTML = ""
        for (let item of items) {
            cartContentEl.innerHTML += `
                <div class="cart-item">
                    <input type="checkbox" ${item.checked ? "checked" : ""} class="choose-item" onclick="toggleCheck(${item.id}, '${item.alterOption}', '${item.color}')"  />
                    
                    <a href="./detail.html?id=${item.id}" class="product">
                        <div class="cart-item-image">
                            <img src="../static/images/thumnail-carousel/${item.image}" alt="${item.image}">
                        </div>

                        <div class="cart-item-detail">
                            <div class="product-name">${item.name}</div>
                            <div class="product-attr">(${item.color}, ${item.alterOption})</div>
                        </div>
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
                      <i class="fa-solid fa-circle-xmark" onclick="deleteItem(this, ${item.id}, '${item.alterOption}', '${item.color}')"></i>
                    </div>
                </div>`
        }


    }



    // render tien hang va tong so tien
    // chỉ tính tổng tiền item đc check
    let items = cart[sessionID]
    totalValue = 0
    for (let item of items) {
        // console.log(item)
        if (item.checked) totalValue += item.count * item.price
    }
    $(".total-value span:last-child").html(formatMoney(totalValue))

    // update HTML shipping fee và lưu giá trị vào biến global shipmentFee
    // Important!!! dùng await để chờ shipment fee được update từ function updateShippingFee (function request API)
    let promise = updateShippingFee()
    // console.log(promise)

    promise.then(shipmentFee => {
        $(".shipment-fee span:last-child").html(formatMoney(shipmentFee))

        let discount = totalValue * discountFactor < discountLimit ? totalValue * discountFactor : discountLimit
        let discountValue = -discount
        $(".discount span:last-child").html(formatMoney(discountValue))

        let preTaxValue = totalValue + shipmentFee + discountValue
        $(".pretax-value span:last-child").html(formatMoney(preTaxValue))

        let VAT = preTaxValue * 0.08
        $(".vat span:last-child").html(formatMoney(VAT))

        let grandTotal = preTaxValue + VAT
        $(".grand-total span:last-child").html(formatMoney(grandTotal))
    })

    let voucherToolTip = ``
    for (let voucher in vouchers) {
        voucherToolTip += `
            <b>${voucher}</b>: ${vouchers[voucher].description} </br>
        `
    }

    $(".voucher-container i").attr("data-original-title", voucherToolTip)

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

function deleteItem(ele, id, alterOption, color) {
    // console.log(id, alterOption, color)
    let cart = getObjectFromLocalStorage("techCart")
    if (!cart) return
    let items = cart[sessionID]
    if (!items) return

    // remove the check status in the local storage
    // let item = items.find(i => i.id == id && i.alterOption == alterOption && i.color == color)
    // item.checked = false

    // this is pass by value
    items = items.filter(i => i.id != id || i.alterOption != alterOption || i.color != color)
    cart[sessionID] = items

    const timeout = 400
    $(ele).parent().parent().hide(timeout)

    setTimeout(() => {
        saveToLocalStorage("techCart", cart)
        renderCart()
    }, timeout);

}



async function renderProvince() {

    try {
        let provinceSelectEl = document.querySelector("#province")
        let provinceURI = "https://online-gateway.ghn.vn/shiip/public-api/master-data/province"
        let provinceHeader = { headers: { token: GHNToken } }
        let res = await axios.get(provinceURI, provinceHeader)
        let data = res.data.data
        // console.log(data)
        if (data.length) {
            provinceSelectEl.innerHTML = `<option value="null" selected="" disabled hidden="" class="disabled">Chọn tỉnh/thành phố</option>`
            for (let i = data.length - 1; i >= 0; i--) {
                let province = data[i]
                provinceSelectEl.innerHTML += `
                    <option value="${province.ProvinceID}">${province.ProvinceName}</option>
                `
            }
        }

    } catch (error) {
        console.log(error)
    }
}

async function getDistrictData(provinceID) {
    try {
        let districtSelectEl = document.getElementById("district")
        let URI = "https://online-gateway.ghn.vn/shiip/public-api/master-data/district"
        let header = { headers: { token: GHNToken }, params: { province_id: provinceID } }
        let res = await axios.get(URI, header)
        let data = res.data.data

        if (data.length) {
            districtSelectEl.innerHTML = `<option value="null" selected="" disabled hidden="" class="disabled">Chọn quận/huyện</option>`
            for (let i = data.length - 1; i >= 0; i--) {
                let district = data[i]
                districtSelectEl.innerHTML += `
                    <option value="${district.DistrictID}">${district.DistrictName}</option>
                `
            }
        }
    } catch (error) {
        console.log(error)
    }
}

async function getWardData(districtID) {
    try {
        let wardSelectEl = document.getElementById("ward")
        let URI = "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward"
        let header = { headers: { token: GHNToken }, params: { district_id: districtID } }
        let res = await axios.get(URI, header)
        let data = res.data.data
        if (data.length) {
            wardSelectEl.innerHTML = `<option value="null" selected="" disabled hidden="" class="disabled">Chọn xã/phường</option>`
            for (let i = data.length - 1; i >= 0; i--) {
                let ward = data[i]
                wardSelectEl.innerHTML += `
                    <option value="${ward.WardCode}">${ward.WardName}</option>
                `
            }
        }
    } catch (error) {
        console.log(error)
    }
}

renderProvince()

// tạo danh sách quận huyện khi user chọn ProvinceID
$("#province").change(async (e) => {
    provinceID = e.currentTarget.value
    await getDistrictData(provinceID)
    // cho phép chọn quận/huyện và reset district ID to undefined
    $("#district").prop("disabled", false)
    districtID = undefined
    // bỏ chọn xã/phường và reset ward ID to undefined
    $("#ward").prop("disabled", true)
    $("#ward").val("")
    wardCode = undefined
    // bỏ chọn địa chỉ cụ thể
    $("#address").prop("disabled", true)
    $("#address").val("")
    renderCart()
})

// tạo danh sách phường xã khi user chọn DistrictID
$("#district").change(async (e) => {
    districtID = e.currentTarget.value
    await getWardData(districtID)
    // cho phép chọn 
    $("#ward").prop("disabled", false)
    wardCode = undefined
    // bỏ chọn địa chỉ cụ thể
    $("#address").prop("disabled", true)
    $("#address").val("")
    renderCart()
})


//cho phép gõ địa chỉ cụ thể
$("#ward").change((e) => {
    wardCode = e.currentTarget.value
    $("#address").prop("disabled", false)
    renderCart()

})


// function update shipment cost
async function updateShippingFee() {
    // console.log(provinceID, districtID, wardCode)
    try {
        let items = getObjectFromLocalStorage("techCart")[sessionID]
        let totalCount = 0
        for (let item of items) {
            if (item.checked) totalCount += item.count
        }
        // console.log(totalCount)

        if (districtID && wardCode && totalCount > 0) {

            let URI = "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee"
            let header = {
                headers: { token: GHNToken, shop_id: GHNShopID },
                params: {
                    service_type_id: 2,
                    insurance_value: 0,
                    to_ward_code: wardCode,
                    to_district_id: districtID,
                    from_district_id: 1493, // sender from quận Thanh Xuân
                    weight: 150,
                    length: 16,
                    width: 6,
                    height: 3,
                }
            }
            let res = await axios.get(URI, header)
            shipmentFee = res.data.data.total * totalCount
            return shipmentFee
        } else {
            return 0
        }
    } catch (error) {
        console.log(error)
        return 0
    }
}

// function áp mã giảm giá
function applyVoucher() {
    let voucherValue = $(".voucher-container input").val().trim().toUpperCase()
    if (voucherValue == "") {
        alert("Mã giảm giá không được để trống");
        discountFactor = 0
        discountLimit = Infinity
        renderCart()
        return;
    }

    if (voucherValue in vouchers) {
        if (totalValue == 0) {
            alert("Không thể áp dụng mã giảm giá khi tổng đơn hàng bằng 0")
            return;
        }
        discountFactor = vouchers[voucherValue].value
        discountLimit = vouchers[voucherValue].limit
        renderCart()
        alert("Áp mã giảm giá thành công")
        return;
    } else {
        alert("Mã giảm giá không hợp lệ");
        discountFactor = 0
        discountLimit = Infinity
        renderCart()
        return;
    }

}

$("#voucher-apply-btn").click((e) => {
    applyVoucher()
})

$(".voucher-container input").keydown(e => {
    if (e.keyCode == 13) {
        applyVoucher()
    }
})


function renderOrderConfirmation() {
    // render cart item in payment cf
    const paymentItemContentEl = document.querySelector("#payment-item-container .payment-item-content")
    paymentItemContentEl.innerHTML = `
        <div class="payment-item-title d-flex mb-3">
            <div class="product fw-bold px-5">Sản phẩm</div>
            <div class="prices text-end fw-bold px-4">Giá</div>
            <div class="quantity text-center fw-bold">Số lượng</div>
            <div class="value text-end fw-bold">Số tiền</div>
        </div>
    `
    let items = getObjectFromLocalStorage("techCart")[sessionID]
    for (let item of items) {
        if (item.checked) {
            paymentItemContentEl.innerHTML += `
            <div class="cart-item mb-2">
                                
                <div class="product d-flex">
                    <div class="cart-item-image">
                        <img src="../static/images/thumnail-carousel/${item.image}" alt="${item.image}">
                    </div>

                    <div class="cart-item-detail">
                        <div class="product-name">${item.name}</div>
                        <div class="product-attr">(${item.color}, ${item.alterOption})</div>
                    </div>
                </div>

                <div class="prices text-end">
                    <div class="new-price fw-bold">${formatMoney(item.price)}</div>
                    <div class="old-price"><del>${formatMoney(item.oldPrice)}<del></div>
                </div>

                <div class="quantity text-center">
                    <span>${item.count}</span>
                </div>
                    
                <div class="value text-end">${formatMoney(item.count * item.price)}</div>
            </div>`
        }
    }


    // xem them btn
    checkItemLen = items.filter(item => item.checked).length
    $("#product-type-quantity").html(checkItemLen)

    if (checkItemLen <= 2) {
        $(".fade-btn-container").addClass("d-none")
        $("#payment-item-container").removeClass("shrink")
    } else {
        $(".fade-btn-container").removeClass("d-none")
        $("#payment-item-container").addClass("shrink")
    }




    // render full name
    $("#order-name").text($("#fullName").val())
    // render phone
    $("#order-phone").text($("#phone").val())
    // render address
    let firstAddress = $("#address").val()
    let ward = $("#ward option:selected").text()
    let district = $("#district option:selected").text()
    let province = $("#province option:selected").text()
    let fullAddress = `${firstAddress}, ${ward}, ${district}, ${province}`
    $("#order-address").html(fullAddress)
    // render payment method
    let paymentMethod = $(".payment-method input:checked").parent().find("label").text()
    $("#order-payment-method").html(paymentMethod)

}
// Nhấn nút thanh toán
$("#pay-btn").click(() => {
    // if (totalValue == 0) {
    //     alert("Giỏ hàng trống hoặc bạn chưa chọn sản phẩm nào")
    //     return;
    // }


    // if ($("#phone").val().trim() == "") {
    //     alert("Bạn chưa nhập số điện thoại")
    //     return;
    // }

    // if ($("#fullName").val().trim() == "") {
    //     alert("Bạn chưa nhập họ tên")
    //     return;
    // }

    // if ($("#address").val().trim() == "") {
    //     alert("Bạn chưa nhập địa chỉ cụ thể")
    //     return;
    // }

    // const paymentCheckEl = document.querySelector(".payment-method input:checked")
    // if (!paymentCheckEl) {
    //     alert("Bạn chưa chọn phương thức thanh toán")
    //     return;
    // }
    renderOrderConfirmation()
    $("#paymentConfirm").modal("show")
})



renderOrderConfirmation()
// khi click vào nút xem thêm
$("#expand-cart-btn").click(() => {
    renderOrderConfirmation()
    if (!$(".fade-btn-container").hasClass("active")) {
        $(".fade-btn-container").addClass("active")
        $("#expand-cart-btn").html("Thu gọn")
        $("#payment-item-container").removeClass("shrink")
    } else {
        $(".fade-btn-container").removeClass("active")
        $("#expand-cart-btn").html(`Xem tất cả <span id="product-type-quantity">${checkItemLen}</span> loại sản phẩm`)
        $("#payment-item-container").addClass("shrink")
    }
})

// xóa prop khi đóng modal
$("#paymentConfirm").on("hidden.bs.modal", (e) => {
    $(".fade-btn-container").removeClass("active")
    $("#expand-cart-btn").html(`Xem tất cả <span id="product-type-quantity">${checkItemLen}</span> loại sản phẩm`)
    $("#payment-item-container").addClass("shrink")
})


$("#confirm-btn").click((e) => {
    $("#paymentConfirm").modal("hide")

    createAlert("Thanh toán thành công, cảm ơn bạn đã mua hàng!", 2000)
    let cart = getObjectFromLocalStorage("techCart")
    let items = cart[sessionID]
    // thêm số lượng đã bán vào productList
    let products = getFromLocalStorage("productList")

    const purchasedItems = []
    for (let item of items) {
        if (item.checked) {
            let product = products.find(p => p.id == item.id)
            product.soldQuantity += item.count
            purchasedItems.push(item)
        }
    }
    saveToLocalStorage("productList", products)

    // Tạo object để track lịch sử thanh toán
    const financialVals = {
        totalValue: $("#payment-shipment-info .total-value span:last-child").text(),
        shipmentFee: $("#payment-shipment-info .shipment-fee span:last-child").text(),
        discount: $("#payment-shipment-info .discount span:last-child").text(),
        pretaxValue: $("#payment-shipment-info .pretax-value span:last-child").text(),
        grandTotal: $("#payment-shipment-info .grand-total span:last-child").text(),
    }

    const userInfo = {
        name: $("#order-name").text(),
        phone: $("#order-phone").text(),
        address: $("#order-address").text(),
        paymentMethod: $("#order-payment-method").text(),
    }

    const purchaseTime = {
        date: new Date().toLocaleDateString("vi-VN"),
        hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    
    let purchaseObj = {
        purchasedItems: purchasedItems,
        financialVals: financialVals,
        userInfo: userInfo, 
        purchaseTime: purchaseTime,
    }

    addToPurchaseHistory(sessionID, purchaseObj)

    

    // xóa item được check và render giỏ hàng
    items = items.filter(item => item.checked == false)
    cart[sessionID] = items
    saveToLocalStorage("techCart", cart)
    renderCart()
    updateCartCount()

    // update lịch sử mua hàng
    renderPurchaseHistory()
})


function addToPurchaseHistory(sessionID, obj) {
    let purchases = getObjectFromLocalStorage("purchases")
    if (!purchases) {
        purchases = {}
        purchases[sessionID] = []
    } else if (!purchases[sessionID]) {
        purchases[sessionID] = []
    }

    purchases[sessionID].unshift(obj)
    saveToLocalStorage("purchases", purchases)
}














