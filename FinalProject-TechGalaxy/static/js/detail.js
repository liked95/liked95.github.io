// lấy id trên url
let params = new URLSearchParams(window.location.search)
let id = params.get("id")
console.log(id)

let product

if (id) {
    product = products.find(p => p.id == id)
    if (!product) {
        window.location.href = "./404.html"
    }
    console.log(product)
    
} else {
    //404
    window.location.href = "./404.html"
}

