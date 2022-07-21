let users = [];
let products = [
    {
        id: 1,
        category: "smartphone",
        name: "iPhone 13 Promax",
        indexProductImgURL: "iphone-13-pro-max.jpg",
        features: [
            "Màn 6.7 inch",
            "Chip Apple 15 Bionic",
            "RAM 6GB",
            "Camera sau: 3 camera 12 MP",
            "Camera trước: 12 MP",
            "Pin 4352 mAh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB", "1TB"],
        ram: "6GB",
        oldPrices: [33990000, 36990000, 41490000, 47990000],
        currentPrices: [28190000, 30990000, 34890000, 40990000],
        ratings: 5,
        soldQuantity: 1541,
        brand: "apple",
    },

    {
        id: 2,
        category: "smartphone",
        name: "iPhone 13 Pro",
        indexProductImgURL: "iphone-13-pro.png",
        features: [
            "Màn 6.1 inch",
            "Chip Apple 15 Bionic",
            "RAM 6GB",
            "Camera sau: 3 camera 12 MP",
            "Camera trước: 12 MP",
            "Pin 3095 mAh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB", "1TB"],
        ram: "6GB",
        oldPrices: [36390000, 33490000, 38990000, 43990000],
        currentPrices: [30990000, 27390000, 31990000, 36990000],
        ratings: 4,
        soldQuantity: 562,
        brand: "apple",
    },

    {
        id: 3,
        category: "smartphone",
        name: "iPhone 13",
        indexProductImgURL: "iphone-13.jpg",
        features: [
            "Màn 6.1 inch",
            "Chip Apple 15 Bionic",
            "RAM 4GB",
            "Camera sau: 2 camera 12 MP",
            "Camera trước: 12 MP",
            "Pin 3240 mAh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB"],
        ram: "4GB",
        oldPrices: [24990000, 27990000, 32490000],
        currentPrices: [20390000, 23890000, 26490000],
        ratings: 4,
        soldQuantity: 823,
        brand: "apple",
    },

    {
        id: 4,
        category: "smartphone",
        name: "iPhone 11",
        indexProductImgURL: "iphone-11.jpg",
        features: [
            "Màn 6.1 inch",
            "Chip Apple A13 Bionic",
            "RAM 4GB",
            "Camera sau: 2 camera 12 MP",
            "Camera trước: 12 MP",
            "Pin 3110 mAh, Sạc 18 W"
        ],
        alterOptions: ["64GB", "128GB"],
        ram: "4GB",
        oldPrices: [14990000, 16990000],
        currentPrices: [12390000, 14390000],
        ratings: 4,
        soldQuantity: 412,
        brand: "apple",
    },

    {
        id: 5,
        category: "smartphone",
        name: "iPhone 13 mini",
        indexProductImgURL: "iphone-13-mini.jpg",
        features: [
            "Màn 5.4 inch",
            "Chip Apple A13 Bionic",
            "RAM 4GB",
            "Camera sau: 2 camera 12 MP",
            "Camera trước: 12 MP",
            "Pin 2438 mAh, Sạc 18 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB"],
        ram: "4GB",
        oldPrices: [21990000, 22900000, 30990000],
        currentPrices: [18490000, 20990000, 23990000],
        ratings: 3,
        soldQuantity: 312,
        brand: "apple",
    },

    {
        id: 6,
        category: "smartphone",
        name: "iPhone 12",
        indexProductImgURL: "iphone-12.jpg",
        features: [
            "Màn 6.1 inch",
            "Chip Apple A14 Bionic",
            "RAM 4GB",
            "Camera sau: 2 camera 12 MP",
            "Camera trước: 12 MP",
            "Pin 3110 mAh, Sạc 18 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB"],
        ram: "4GB",
        oldPrices: [19990000, 21990000, 23890000],
        currentPrices: [17390000, 19990000, 21890000],
        ratings: 4,
        soldQuantity: 741,
        brand: "apple",
    },

    {
        id: 7,
        category: "smartphone",
        name: "iPhone 12 mini",
        indexProductImgURL: "iphone-12-mini.jpg",
        features: [
            "Màn 5.4 inch",
            "Chip Apple A14 Bionic",
            "RAM 4GB",
            "Camera sau: 2 camera 12 MP",
            "Camera trước: 12 MP",
            "Pin 2227 mAh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB"],
        ram: "4GB",
        oldPrices: [20990000, 18990000, 21990000],
        currentPrices: [16490000, 14990000, 16990000],
        ratings: 4,
        soldQuantity: 412,
        brand: "apple",
    },

    {
        id: 8,
        category: "smartphone",
        name: "iPhone SE (2022)",
        indexProductImgURL: "iphone-se-2020.jpg",
        features: [
            "Màn 4.7 inch",
            "Chip Apple A15 Bionic",
            "RAM 4GB",
            "Camera sau: 12 MP",
            "Camera trước: 7 MP",
            "Pin 2018 mAh, Sạc 20 W"
        ],
        alterOptions: ["64GB", "128GB"],
        ram: "4GB",
        oldPrices: [12990000, 13990000],
        currentPrices: [12490000, 12990000],
        ratings: 2,
        soldQuantity: 218,
        brand: "apple",
    },

    {
        id: 9,
        category: "smartphone",
        name: "Galaxy S22 Ultra 5G",
        indexProductImgURL: "Galaxy-S22-Ultra.jpg",
        features: [
            "Màn 6.8 inch, Quad HD+",
            "Chip Snapdragon 8 Gen 1",
            "RAM 8GB/12GB",
            "Camera sau: Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP",
            "Camera trước: 40 MP",
            "Pin 5000 mAh, Sạc 45 W"
        ],
        alterOptions: ["8GB-128GB", "12GB-256GB"],
        ram: "8GB",
        oldPrices: [30990000, 33990000],
        currentPrices: [27990000, 30990000],
        ratings: 4,
        soldQuantity: 537,
        brand: "samsung",
    },

    {
        id: 10,
        category: "smartphone",
        name: "Samsung Galaxy S22 5G",
        indexProductImgURL: "Galaxy-S22.jpg",
        features: [
            "Màn 6.1 inch, Full HD+",
            "Chip Snapdragon 8 Gen 1",
            "RAM 8GB",
            "Camera sau: Chính 50 MP & Phụ 12 MP, 10 MP",
            "Camera trước: 10 MP",
            "Pin 3700 mAh, Sạc 25 W"
        ],
        alterOptions: ["8GB-128GB", "12GB-256GB"],
        ram: "8GB",
        oldPrices: [21990000, 23490000],
        currentPrices: [18990000, 20490000],
        ratings: 4,
        soldQuantity: 214,
        brand: "samsung",
    },

    {
        id: 11,
        category: "smartphone",
        name: "Xiaomi 11T Pro 5G",
        indexProductImgURL: "xiaomi-11t-pro-5g.jpeg",
        features: [
            "Màn 6.67 inch, Full HD+",
            "Chip Snapdragon 888",
            "RAM 8GB/12GB, ROM 256GB",
            "Camera sau: Chính 108 MP & Phụ 8 MP, 5 MP",
            "Camera trước: 16 MP",
            "Pin 5000 mAh, Sạc 120 W"
        ],
        alterOptions: ["8GB-128GB", "12GB-256GB"],
        ram: "8GB",
        oldPrices: [15690000, 16990000],
        currentPrices: [13990000, 14990000],
        ratings: 4,
        soldQuantity: 389,
        brand: "xiaomi",
    },

    {
        id: 12,
        category: "tablet",
        name: "iPad Pro M1 11 inch 5G",
        indexProductImgURL: "ipad-pro-2021-11.jpg",
        features: [
            "Màn 11 inch, Liquid Retina",
            "Chip Apple M1",
            "RAM 8GB, ROM 128GB",
            "Camera sau: Chính 12 MP & Phụ 10 MP",
            "Camera trước: 12 MP",
            "Pin 28.65 Wh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB"],
        ram: "8GB",
        oldPrices: [26990000, 29990000, 35990000],
        currentPrices: [26090000, 29690000, 30990000],
        ratings: 5,
        soldQuantity: 532,
        brand: "apple",
    },

    {
        id: 13,
        category: "tablet",
        name: "iPad Air 5 M1 Wifi Cellular",
        indexProductImgURL: "ipad-air-5-wifi.jpg",
        features: [
            "Màn 10.9 inch, IPS Retina",
            "Chip Apple M1",
            "RAM 8GB, ROM 64GB",
            "Camera sau: 12MP",
            "Camera trước: 12 MP",
            "Pin 28.65 Wh, Sạc 20 W"
        ],
        alterOptions: ["64GB", "256GB"],
        ram: "8GB",
        oldPrices: [20990000, 24990000],
        currentPrices: [20290000, 24290000],
        ratings: 4,
        soldQuantity: 921,
        brand: "apple",
    },

    {
        id: 14,
        category: "tablet",
        name: "iPad mini 6 WiFi Cellular",
        indexProductImgURL: "ipad-mini-6-wifi-cellular.jpg",
        features: [
            "Màn 8.3 inch, LED-backlid LCD",
            "Chip Apple A15 Bionic",
            "RAM 4GB, ROM 64GB",
            "Camera sau: 12MP",
            "Camera trước: 12 MP",
            "Pin 19.3 Wh, Sạc 20 W"
        ],
        alterOptions: ["64GB", "256GB"],
        ram: "4GB",
        oldPrices: [19990000, 23990000],
        currentPrices: [17790000, 20790000],
        ratings: 4,
        soldQuantity: 124,
        brand: "apple",
    },

    {
        id: 15,
        category: "tablet",
        name: "iPad Gen 9 WiFi",
        indexProductImgURL: "ipad-gen-9-wifi.jpg",
        features: [
            "Màn 10.2 inch, Retina IPS LCD",
            "Chip Apple A13 Bionic",
            "RAM 3GB, ROM 64GB",
            "Camera sau: 12MP",
            "Camera trước: 12 MP",
            "Pin 32.4 Wh, Sạc 20 W"
        ],
        alterOptions: ["64GB", "256GB"],
        ram: "3GB",
        oldPrices: [10590000, 15990000],
        currentPrices: [9990000, 13990000],
        ratings: 4,
        soldQuantity: 655,
        brand: "apple",
    },

    {
        id: 16,
        category: "tablet",
        name: "Samsung Galaxy Tab S8 5G",
        indexProductImgURL: "Samsung-Galaxy-Tab-s8.jpg",
        features: [
            "Màn 11 inch, LTPS",
            "Chip Snapdragon 8 Gen 1",
            "RAM 8 GB, ROM 128 GB",
            "Camera sau: 13MP",
            "Camera trước: 6 MP",
            "Pin 8000 mAh, Sạc 45 W"
        ],
        alterOptions: ["128GB", "256GB"],
        ram: "8GB",
        oldPrices: [23990000, 26590000],
        currentPrices: [20990000, 24990000],
        ratings: 5,
        soldQuantity: 236,
        brand: "samsung",
    },

    {
        id: 17,
        category: "tablet",
        name: "Galaxy Tab A7 Lite",
        indexProductImgURL: "samsung-galaxy-tab-a7-lite.jpg",
        features: [
            "Màn 8.7 inch, TFT LCD",
            "Chip  MediaTek MT8768T",
            "RAM 3 GB, ROM 32 GB",
            "Camera sau: 8 MP",
            "Camera trước: 2 MP",
            "Pin 5100 mAh, Sạc 15 W"
        ],
        alterOptions: ["32GB", "64GB"],
        ram: "3GB",
        oldPrices: [4890000, 6190000],
        currentPrices: [4490000, 5690000],
        ratings: 3,
        soldQuantity: 149,
        brand: "samsung",
    },

    {
        id: 18,
        category: "tablet",
        name: "Huawei MatePad 11 WiFi",
        indexProductImgURL: "huawei-matepad-11.jpg",
        features: [
            "Màn 10.9 inch, IPS LCD",
            "Chip Snapdragon 865",
            "RAM 6 GB, ROM 128 GB",
            "Camera sau: 13 MP",
            "Camera trước: 8 MP",
            "Pin 7250 mAh, Sạc 18 W"
        ],
        alterOptions: ["128GB", "256GB"],
        ram: "6GB",
        oldPrices: [13990000, 15590000],
        currentPrices: [12990000, 14190000],
        ratings: 4,
        soldQuantity: 145,
        brand: "huawei",
    },

    {
        id: 19,
        category: "tablet",
        name: "Huawei MatePad WiFi",
        indexProductImgURL: "huawei-matepad.jpg",
        features: [
            "Màn 10.4 inch, IPS LCD",
            "Chip Kirin 820",
            "RAM 4 GB, ROM 128 GB",
            "Camera sau: 8 MP",
            "Camera trước: 8 MP",
            "Pin 7250 mAh, Sạc 22.5 W"
        ],
        alterOptions: ["128GB", "256GB"],
        ram: "4GB",
        oldPrices: [7790000, 8900000],
        currentPrices: [6790000, 7590000],
        ratings: 5,
        soldQuantity: 217,
        brand: "huawei",
    },

    {
        id: 20,
        category: "tablet",
        name: "Lenovo Tab P11 Plus 4G",
        indexProductImgURL: "lenovo-tab-p11-plus.jpg",
        features: [
            "Màn 11 inch, IPS LCD",
            "Chip MediaTek Helio G90T",
            "RAM 4 GB, ROM 64 GB",
            "Camera sau: 13 MP",
            "Camera trước: 8 MP",
            "Pin 7700 mAh, Sạc 20 W"
        ],
        alterOptions: ["64GB"],
        ram: "4GB",
        oldPrices: [8190000],
        currentPrices: [7390000],
        ratings: 3,
        soldQuantity: 62,
        brand: "lenovo",
    },

    {
        id: 21,
        category: "tablet",
        name: "iPad Air 4 WiFi (2020)",
        indexProductImgURL: "ipad-air-4-wifi-64gb.jpg",
        features: [
            "Màn 10.9 inch, Liquid Retina",
            "Chip Apple A14 Bionic",
            "RAM 4GB, ROM 64GB",
            "Camera sau: 12MP",
            "Camera trước: 7 MP",
            "Pin 28.7 Wh, Sạc 20 W"
        ],
        alterOptions: ["64GB"],
        ram: "4GB",
        oldPrices: [14590000],
        currentPrices: [13590000],
        ratings: 5,
        soldQuantity: 478,
        brand: "apple",
    },

    {
        id: 22,
        category: "laptop",
        name: "MacBook Pro M2 2022",
        indexProductImgURL: "apple-macbook-pro-13-inch-m2.jpg",
        features: [
            "Màn 13.3 inch, Retina",
            "CPU Apple M2, 100GB/s",
            "Card 10 nhân CPU",
            "RAM 8GB",
            "Pin khoảng 10 tiếng",
            "Trọng lượng 1,4kg",
        ],
        alterOptions: ["256GB", "512GB"],
        ram: "8GB",
        oldPrices: [35590000, 41990000],
        currentPrices: [34890000, 40290000],
        ratings: 4,
        soldQuantity: 45,
        brand: "apple",
    },

    {
        id: 23,
        category: "laptop",
        name: "MacBook Pro 16 M1 Max",
        indexProductImgURL: "apple-macbook-pro-16-m1-max.jpg",
        features: [
            "Màn 16.2 inch, Retina, 120Hz",
            "CPU Apple M1 MAX, 400GB/s",
            "Card 24 nhân CPU",
            "RAM 32GB",
            "Pin khoảng 10 tiếng",
            "Trọng lượng 2,2kg",
        ],
        alterOptions: ["512GB"],
        ram: "32GB",
        oldPrices: [98990000],
        currentPrices: [90990000],
        ratings: 5,
        soldQuantity: 136,
        brand: "apple",
    },

    {
        id: 23,
        category: "laptop",
        name: "MacBook Pro 14 M1 Max",
        indexProductImgURL: "macbook-pro-14-m1-max-2021.jpg",
        features: [
            "Màn 14.2 inch, Retina, 120Hz",
            "CPU Apple M1 MAX, 400GB/s",
            "Card 24 nhân CPU",
            "RAM 32GB",
            "Pin khoảng 10 tiếng",
            "Trọng lượng 1,6kg",
        ],
        alterOptions: ["512GB"],
        ram: "32GB",
        oldPrices: [76900000],
        currentPrices: [72900000],
        ratings: 4,
        soldQuantity: 512,
        brand: "apple",
    },

    {
        id: 24,
        category: "laptop",
        name: "Macbook Pro M1",
        indexProductImgURL: "macbook-pro-m1-2020.jpg",
        features: [
            "Màn 13.3 inch, Retina",
            "CPU Apple M1",
            "Card 8 nhân CPU",
            "RAM 8GB",
            "Pin khoảng 10 tiếng",
            "Trọng lượng 1,4kg",
        ],
        alterOptions: ["256GB", "512GB"],
        ram: "8GB",
        oldPrices: [34990000, 39990000],
        currentPrices: [31490000, 35290000],
        ratings: 4,
        soldQuantity: 363,
        brand: "apple",
    },

    {
        id: 25,
        category: "laptop",
        name: "Macbook Air M1 2020",
        indexProductImgURL: "apple-macbook-air-m1-2020.jpg",
        features: [
            "Màn 13.3 inch, Retina",
            "CPU Apple M1",
            "Card 7 nhân CPU",
            "RAM 8GB",
            "Pin khoảng 10 tiếng",
            "Trọng lượng 1,29kg",
        ],
        alterOptions: ["256GB", "512GB"],
        ram: "8GB",
        oldPrices: [33990000, 37990000],
        currentPrices: [29290000, 33990000],
        ratings: 4,
        soldQuantity: 1032,
        brand: "apple",
    },

    {
        id: 26,
        category: "laptop",
        name: "Asus Vivobook 15 X1502ZA",
        indexProductImgURL: "asus-vivobook-15-x1502za.jpg",
        features: [
            "Màn 15,6 inch, Full HD",
            "CPU i5, 1240P, 1.7GHz",
            "Card Intel UHD",
            "RAM 8GB",
            "Pin 3-cell, 42Wh",
            "Trọng lượng 1,7kg",
        ],
        alterOptions: ["512GB"],
        ram: "8GB",
        oldPrices: [17990000],
        currentPrices: [17490000],
        ratings: 5,
        soldQuantity: 96,
        brand: "asus",
    },

    {
        id: 27,
        category: "laptop",
        name: "Asus TUF FX506LHB",
        indexProductImgURL: "asus-tuf-gaming-fx506lhb.jpg",
        features: [
            "Màn 15,6 inch, Full HD, 144Hz",
            "CPU i5, 10300H, 2.5GHz",
            "Card GTX 1650 4GB",
            "RAM 8GB",
            "Pin 3-cell, 48Wh",
            "Trọng lượng 2,3kg",
        ],
        alterOptions: ["512GB"],
        ram: "8GB",
        oldPrices: [19990000],
        currentPrices: [15990000],
        ratings: 5,
        soldQuantity: 141,
        brand: "asus",
    },

    {
        id: 28,
        category: "laptop",
        name: "Asus ZenBook UX325EA",
        indexProductImgURL: "asus-zenbook-ux325ea.jpg",
        features: [
            "Màn 13,3 inch, Full HD, 144Hz",
            "CPU i7-1165G7, 2.8GHz",
            "Card Intel Iris Xe",
            "RAM 16GB",
            "Pin 4-cell, 67Wh",
            "Trọng lượng 1.14kg",
        ],
        alterOptions: ["512GB"],
        ram: "16GB",
        oldPrices: [29990000],
        currentPrices: [27990000],
        ratings: 4,
        soldQuantity: 236,
        brand: "asus",
    },

    {
        id: 29,
        category: "laptop",
        name: "HP EliteBook X360",
        indexProductImgURL: "hp-elitebook-x360.jpg",
        features: [
            "Màn 14 inch, Full HD",
            "CPU i7-1165G7, 2.8GHz",
            "Card Intel Iris Xe",
            "RAM 16GB",
            "Pin 4-cell Li-ion, 78.5 Wh",
            "Trọng lượng 1.25kg",
        ],
        alterOptions: ["512GB"],
        ram: "16GB",
        oldPrices: [49500000],
        currentPrices: [42090000],
        ratings: 4,
        soldQuantity: 362,
        brand: "hp",
    },

    {
        id: 30,
        category: "laptop",
        name: "Acer Nitro 5 Gaming",
        indexProductImgURL: "acer-nitro-5-gaming.jpg",
        features: [
            "Màn 15.6 inch, Full HD, 144Hz",
            "CPU i5, 11400H, 2.7GHz",
            "Card RTX 3050 4GB",
            "RAM 8GB",
            "Pin 4-cell Li-ion, 57.5 Wh",
            "Trọng lượng 2.2kg",
        ],
        alterOptions: ["512GB"],
        ram: "8GB",
        oldPrices: [26490000],
        currentPrices: [21190000],
        ratings: 4,
        soldQuantity: 284,
        brand: "acer",
    },
]























products = products.map(obj => {
    let discounts = []
    for (let i = 0; i < obj.oldPrices.length; i++) {
        let discountVal = (obj.currentPrices[i] / obj.oldPrices[i] - 1) * 100
        discounts.push(discountVal.toFixed(2))
    }
    obj["discounts"] = discounts
    return obj
})


