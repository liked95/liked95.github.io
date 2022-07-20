let products = [
    {
        id: 1,
        name: "iPhone 13 Promax",
        indexProductImgURL: "iphone-13-pro-max.jpg",
        features: [
            "Chip Apple 15 Bionic",
            "RAM 6 GB, ROM 128 GB",
            "Camera sau: 3 camera 12 MP",
            "Camera trước: 12 MP",
            "Pin 4352 mAh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB", "1TB"],
        oldPrices: [33990000, 36990000, 41490000, 47990000],
        currentPrices: [28190000, 30990000, 34890000, 40990000],
        ratings: 5,
        soldQuantity: 1541,
        brand: "apple"
    },

    {
        id: 2,
        name: "iPhone 13 Pro",
        indexProductImgURL: "iphone-13-pro.png",
        features: [
            "Chip Apple 15 Bionic",
            "RAM 6 GB, ROM 128 GB",
            "Camera sau: 3 camera 12 MP",
            "Camera trước: 12 MP",
            "Pin 3095 mAh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB", "1TB"],
        oldPrices: [36390000, 33490000, 38990000, 43990000],
        currentPrices: [30990000, 27390000, 31990000, 36990000],
        ratings: 4,
        soldQuantity: 562,
        brand: "apple"
    },

    {
        id: 3,
        name: "iPhone 13",
        indexProductImgURL: "iphone-13.jpg",
        features: [
            "Chip Apple 15 Bionic",
            "RAM 4 GB, ROM 128 GB",
            "Camera sau: 2 camera 12 MP",
            "Camera trước: 12 MP",
            "Pin 3240 mAh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB"],
        oldPrices: [24990000, 27990000, 32490000],
        currentPrices: [20390000, 23890000, 26490000],
        ratings: 4,
        soldQuantity: 823,
        brand: "apple"
    },

    {
        id: 4,
        name: "iPhone 11",
        indexProductImgURL: "iphone-11.jpg",
        features: [
            "Chip Apple A13 Bionic",
            "RAM 4 GB, ROM 128 GB",
            "Camera sau: 2 camera 12 MP",
            "Camera trước: 12 MP",
            "Pin 3110 mAh, Sạc 18 W"
        ],
        alterOptions: ["64GB", "128GB"],
        oldPrices: [14990000, 16990000],
        currentPrices: [12390000, 14390000],
        ratings: 4,
        soldQuantity: 412,
        brand: "apple"
    }
]

products = products.map(obj => {
    let discounts = []
    for (let i = 0; i < obj.oldPrices.length; i++) {
        let discountVal = (obj.currentPrices[i]/obj.oldPrices[i] - 1)*100
        discounts.push(discountVal.toFixed(2))
    }
    obj["discounts"] = discounts
    return obj
})

console.log(products)
