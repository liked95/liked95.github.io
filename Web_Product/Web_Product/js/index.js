


let productListEl = document.querySelector(".product-list")
const searchInputEl = document.querySelector(".seach-form-input")
const searchBtn = document.querySelector(".seach-form-button")

function renderUI(arr) {
    productListEl.innerHTML = ""
    if (!arr.length) {
        productListEl.innerHTML = "<p> Hiện tại không có sản phẩm nào </p>";
        return;
    }
    for (let p of arr) {
        productListEl.innerHTML += `
            <div class="col-md-3">
                <a href="./detail.html?id=${p.id}">
                    <div class="product-item shadow-sm rounded mb-4">
                        <div class="product-item-image">
                            <img src= ${p.images[0]}
                                alt="main-image">
                        </div>
                        <div class="product-item-info p-3">
                            <h2 class="fs-5 mb-4 text-dark">${p.name}</h2>
                            <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                                <p class="type fs-5 text-danger fw-normal">${formatMoney(p.price)} </p>
                                <p class="rating">
                                ${p.rating} <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>`
    }
}

function formatMoney(num) {
    return num.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}


window.onload = renderUI(products)

// Lọc sản phẩm theo tên

searchInputEl.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        searchProduct();
    }
})

searchBtn.addEventListener("click", () => {
    searchProduct();
})

function searchProduct() {
    let value = searchInputEl.value;
    if (!value) {
        renderUI(products)
        return;
    }

    let productFilters = products.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
    renderUI(productFilters)
}