
// Cart structure
const cart =
{
    userID1: [
        {
            productId: 2,
            alterOption: "128GB",
            color: "Xanh lá",
            count: 1,
            id: 2,
            image: "xanh-la-iphone.jpg",
            name: "iPhone 13 Pro",
            price: 26390000,
        },
        {
            productId: 3,
            alterOption: "128GB",
            color: "Xanh lá",
            count: 1,
            id: 2,
            image: "xanh-la-iphone.jpg",
            name: "iPhone 13 Pro",
            price: 26390000,
        }
    ],

    userID2: [
        {
            productId: 2,
            alterOption: "128GB",
            color: "Xanh lá",
            count: 1,
            id: 2,
            image: "xanh-la-iphone.jpg",
            name: "iPhone 13 Pro",
            price: 26390000,
        },
    ],




}

console.log(sessionID)

function addItemToCart(item) {
    let cart = getObjectFromLocalStorage("techCart")
    console.log(cart)
    if (!cart) {
        cart = {}

    }

    if (!cart[sessionID]) {
        cart[sessionID] = [item]
    } else {
        let product = cart[sessionID].find(p => p.id == item.id && p.alterOption == item.alterOption && p.color == item.color)
        if (!product) {
            cart[sessionID].push(item)
        } else {
            product.count += item.count
        }
    }



    saveToLocalStorage("techCart", cart)
    updateCartCount()
}


