// key = cart, value = arr
// Add to Local Storage
const setDataToLocalStorage = arr => {
    localStorage.setItem("cart", JSON.stringify(arr))
}
// Get from Local Storage

const getDataFromLocalStorage = () => {
    const localStorageValue = localStorage.getItem("cart")
    if (localStorageValue) {
        return JSON.parse(localStorageValue)
    } else {
        return []
    }
}

// Cart structure
// const cart = [
//     {
//         id
//         name
//         price
//         Image
//         count
//         size
//     }
// ]

function addItemToCart(item) {
    //TH1 ID chua co => them moi
    //TH2 ID da co va size chua co => them moi
    //TH3 ID va size ton tai => count++
    let cart = getDataFromLocalStorage();
    if (!cart.length) {
        cart = [item]
    } else {
        let product = cart.find(p => p.id == item.id && p.size == item.size)
        if (!product) {
            cart.push(item)
        } else {
            product.count += item.count
        }
    }

    setDataToLocalStorage(cart)
    // cap nhat so luong khi them vao gio
    updateTotalCart()
}

function updateTotalCart() {
    let cart = getDataFromLocalStorage();
    document.querySelector(".cart-count").innerText = cart.length
}

updateTotalCart()


