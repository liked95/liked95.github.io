let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },

    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
    {
        name: "Samsung Galaxy Fe 21",
        price: 21000000,
        brand: "Samsung",
        count: 13,
    }
]


// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

const showProductInfo = (arr) => {
    for (let product of arr) {
        console.log(`${product.name}-${product.price}-${product.brand}-${product.count}`)
    }
}

showProductInfo(products)

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
const totalPrice = (arr) => {
    let total = 0;
    arr.forEach(product => {
        total += Number(product.price) * Number(product.count)
    })
    return total
}

console.log(totalPrice(products))


const totalPrice2 = arr => {
    return arr.reduce((total, product) => total + (product.price * product.count), 0)
}

console.log(totalPrice2(products))

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findProductByBrand = (arr, brand) => {
    return arr.filter(product => product.brand == brand)
}

console.log(findProductByBrand(products, 'Apple'))

// 4. Tìm các sản phẩm có giá > 20000000

const findProductByPriceGreaterThan = (arr, price) => {
    return arr.filter(product => product.price > price)
}

console.log(findProductByPriceGreaterThan(products, 20000000))

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findProductByName = (arr, name) => {
    return arr.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
}
console.log(findProductByName(products, 'PRo'))

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
// products.push({
//     name: 'Xiao Mi Pro 199',
//     price: 16900000,
//     brand: 'XiaoMi', 
//     count: 3
// })
console.log(products)
// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
const removeProductByBrand = (arr, brand) => {
    arr.forEach((product, index) => {
        if (product.brand == brand) {
            arr.splice(index, 1)
        }
    })
}

// removeProductByBrand(products, 'Apple')


// 8. Sắp xếp giỏ hàng theo price tăng dần
const sortByPriceAsc = (arr) => {
    return arr.sort((a, b) => (a.price < b.price) ? -1 : 1)
}

console.log(sortByPriceAsc(products))

// 9. Sắp xếp giỏ hàng theo count giảm dần
const sortByCountDes = arr => {
    return arr.sort((a, b) => (a.count > b.count) ? -1 : 1)
}

console.log(sortByCountDes(products))

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

const takeRandomItems = (arr, number) => {
    let output = [];
    while (output.length < number) {
        let random = Math.floor(Math.random()*arr.length)
        if (!output.includes(random)) output.push(random)
    }
    output.forEach((randomNumbers, index) => {
        output[index] = products[randomNumbers]
    })
    return output
}

console.log(takeRandomItems(products, 2))