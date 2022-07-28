
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
    let cart = getFromLocalStorage("techCart")
    if (cart.length == 0) {
        cart.push(item)
    } else {
        let product = cart.find(p => p.id == item.id && p.alterOption == item.alterOption && p.color == item.color)
        console.log(item.alterOption, item.color)
        if (!product) {
            cart.push(item)
        } else {
            product.count += item.count
        }
    }

    saveToLocalStorage("techCart", cart)
    updateCartCount()
}




const updateCartCount = () => {
    let cart = getFromLocalStorage("techCart")
    $("#cart-length").html(cart.length)
}

updateCartCount()