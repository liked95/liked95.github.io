function formatMoney(num) {
    return num.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}


let items = getDataFromLocalStorage()
const productListEl = document.querySelector(".product-list")

function renderProduct(arr) {
    productListEl.innerHTML = ""

    if (arr.length === 0) {
        return;
    }

    document.querySelector(".message").classList.add("d-none")
    for (let item of arr) {
        productListEl.innerHTML += `
            <div class="product-item d-flex border mb-4">
                <div class="image">
                    <img src="${item.image}" alt="" />
                    </div>
                    
                    <div class="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                    <div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h2 class="text-dark fs-5 fw-normal">
                            ${item.name} (${item.size})
                            </h2>
                            <h2 class="text-danger fs-5 fw-normal">
                            ${formatMoney(item.price)}
                            </h2>
                            </div>
                            <p class="text-black-50">
                            <span class="border d-inline-block me-3">
                                <span class="py-2 px-3 d-inline-block fw-bold bg-light" onclick = "decreaseCount(${item.id}, '${item.size}')" >-</span>
                                <span class="py-2 px-3 d-inline-block fw-bold">${item.count}</span>
                                <span class="py-2 px-3 d-inline-block fw-bold bg-light" onclick = "increaseCount(${item.id}, '${item.size}')" >+</span>
                                </span>
                                </p>
                                </div>
                                
                                <div>
                                <button class="text-primary border-0 bg-transparent fw-light" onclick = "deleteProduct(${item.id}, '${item.size}')">
                                <span><i class="fa-solid fa-trash-can"></i></span>
                                Xóa
                                </button>
                                </div>
                                </div>
            </div>`


        }


    }
    
renderProduct(items)



// Xoa san pham
function deleteProduct(id, size) {
    let isConfirm = confirm("Sure to delete?")
    if (isConfirm) {
        items = items.filter(p => p.id !== id || p.size !== size)
        
        setDataToLocalStorage(items)
        updateTotalCart()
        updateMoney()
    }
    
    renderProduct(items)
}

// tang san pham
function increaseCount(id, size) {
    let product = items.find(p => p.id == id && p.size == size)
    product.count++
    updateMoney()
    setDataToLocalStorage(items)
    renderProduct(items)
}

function decreaseCount(id, size) {
    let product = items.find(p => p.id == id && p.size == size)
    product.count--
    if (product.count < 1) {
        product.count = 1
    }
    updateMoney()
    setDataToLocalStorage(items)
    renderProduct(items)
}
let discountFactor = 0;

const subTotalMoneyEl = document.getElementById("sub-total-money")
const totalMoneyEl = document.getElementById("total-money")

function updateMoney() {
    let subTotalMoney = 0;
    items.forEach(item => {
        subTotalMoney += item.count * item.price
    })
    
    subTotalMoneyEl.innerHTML = `${formatMoney(subTotalMoney)}`

    let totalMoney = subTotalMoney*(1-discountFactor)
    totalMoneyEl.innerHTML = `${formatMoney(totalMoney)}`
}

updateMoney()


// Voucher

const discountInputEl = document.getElementById("discount-form-input")
const btnApplyDiscount = document.getElementById("btn-apply")


btnApplyDiscount.addEventListener("click", () => {
    let inputCode = discountInputEl.value
    if (!inputCode) {
        alert("Mã giảm giá không được trống")
        return;
    }

    for (code in vouchers) {
        if (inputCode.toLowerCase() === code.toLowerCase()) {
            alert("Áp mã giảm giá thàng công")
            discountFactor = vouchers[code]
            updateMoney()
            return;
        }
    }

    alert("Mã giảm giá không tồn tại")

})