
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
    if (!cart.length) {
        cart.push(item)
    } else {
        let product = cart.find(p => p.id == item.id && p.alterOption == item.alterOption && p.color == item.color)
        if (!product) {
            cart.push(item)
        } else {
            product.count += item.count
        }
    }

    saveToLocalStorage("techCart", cart)
}