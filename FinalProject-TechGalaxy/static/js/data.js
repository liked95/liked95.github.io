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
            "Camera sau: 3 camera 12MP",
            "Camera trước: 12MP",
            "Pin 4352 mAh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB", "1TB"],
        ram: ["6GB"],
        rom: ["128GB", "256GB", "512GB", "1TB"],
        oldPrices: [33900000, 36990000, 41490000, 47990000],
        currentPrices: [28290000, 30790000, 35290000, 40290000],
        ratings: 5,
        soldQuantity: 1541,
        brand: "apple",
        mainCarouselImages: ["iphone-13-pro-xanh-xa-1.jpg", "iphone-13-pro6-gold.jpg", "iphone-13-pro-blue.jpg", "iphone-13-pro-silver-2.jpg", "iphone-13-pro-xam-1.jpg"],
        dotCarouselImages: ["xanh-la-iphone.jpg", "iphone-13-pro-gold-1-200x200.jpg", "iphone-13-pro-sierra-blue-200x200.jpg", "iphone-13-pro-silver-200x200.jpg", "iphone-13-pro-graphite-200x200.jpg"],
        colors: ["Xanh lá", "Vàng đồng", "Xanh dương", "Bạc", "Xám"],
        detailImgURL: "iphone-13-pro-max-n-2.jpg",
        specAttributes: {
            "Màn hình": 'OLED, 6.7", Super Retina XDR',
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": '	iOS 15',
            "Camera sau": '3 camera 12MP',
            "Camera trước": '12MP',
            "RAM": '6 GB',
            "Bộ nhớ trong": '128 GB',
            "Pin, Sạc": '4352 mAh, 20 W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
            {
                reviewer: "Trương Thu Hoài",
                date: "21-3-2022",
                time: "4:52AM",
                rating: 1,  //[1,5]
                content: "Điện thoại gì chán thế nhỉ, cửa hàng lớn làm ăn lom dom =))"
            },
            {
                reviewer: "Nguyen Tran Nhu Thao",
                date: "3-1-2022",
                time: "8:31AM",
                rating: 5,  //[1,5]
                content: "sao giá ở đây đắt hơn giá bên cửa hàng khác vậy"
            },
            {
                reviewer: "Vũ Sơn",
                date: "3-10-2021",
                time: "8:17PM",
                rating: 3,  //[1,5]
                content: "Shop bán hàng đẽu"
            },
            {
                reviewer: "Ngọc",
                date: "3-8-2021",
                time: "8:63PM",
                rating: 2,  //[1,5]
                content: "Tạm được"
            },
            {
                reviewer: "Thư Ngố",
                date: "4-2-2021",
                time: "8:63PM",
                rating: 5,  //[1,5]
                content: "Hàng đẹp phết"
            },
        ]

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
            "Camera sau: 3 camera 12MP",
            "Camera trước: 12MP",
            "Pin 3095 mAh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB", "1TB"],
        ram: ["6GB"],
        rom: ["128GB", "256GB", "512GB", "1TB"],
        oldPrices: [30990000, 33490000, 38990000, 43990000],
        currentPrices: [26390000, 27390000, 31990000, 36990000],
        ratings: 4,
        soldQuantity: 582,
        brand: "apple",
        mainCarouselImages: ["iphone-13-pro-xanh-xa-1.jpg", "iphone-13-pro6-gold.jpg", "iphone-13-pro-blue.jpg", "iphone-13-pro-silver-2.jpg", "iphone-13-pro-xam-1.jpg"],
        dotCarouselImages: ["xanh-la-iphone.jpg", "iphone-13-pro-gold-1-200x200.jpg", "iphone-13-pro-sierra-blue-200x200.jpg", "iphone-13-pro-silver-200x200.jpg", "iphone-13-pro-graphite-200x200.jpg"],
        colors: ["Xanh lá", "Vàng đồng", "Xanh dương", "Bạc", "Xám"],
        detailImgURL: "iphone-13-pro-n-2.jpg",
        specAttributes: {
            "Màn hình": 'OLED, 6.1", Super Retina XDR',
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": '	iOS 15',
            "Camera sau": '3 camera 12MP',
            "Camera trước": '12MP',
            "RAM": '6 GB',
            "Bộ nhớ trong": '128 GB',
            "Pin, Sạc": '3095 mAh, 20 W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
            {
                reviewer: "Trương Thu Hoài",
                date: "21-3-2022",
                time: "4:52AM",
                rating: 1,  //[1,5]
                content: "Điện thoại gì chán thế nhỉ, cửa hàng lớn làm ăn lom dom =))"
            },
            {
                reviewer: "Nguyen Tran Nhu Thao",
                date: "3-1-2022",
                time: "8:31AM",
                rating: 5,  //[1,5]
                content: "sao giá ở đây đắt hơn giá bên cửa hàng khác vậy"
            },
            {
                reviewer: "Vũ Sơn",
                date: "3-10-2021",
                time: "8:17PM",
                rating: 3,  //[1,5]
                content: "Shop bán hàng đẽu"
            },
            {
                reviewer: "Ngọc",
                date: "3-8-2021",
                time: "8:63PM",
                rating: 2,  //[1,5]
                content: "Tạm được"
            },
            {
                reviewer: "Thư Ngố",
                date: "4-2-2021",
                time: "8:63PM",
                rating: 5,  //[1,5]
                content: "Hàng đẹp phết"
            },
        ]


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
            "Camera sau: 2 camera 12MP",
            "Camera trước: 12MP",
            "Pin 3240 mAh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB"],
        ram: ["4GB"],
        rom: ["128GB", "256GB", "512GB"],
        oldPrices: [24990000, 27990000, 32490000],
        currentPrices: [20390000, 23890000, 26490000],
        ratings: 4,
        soldQuantity: 823,
        brand: "apple",
        mainCarouselImages: ["iphone-13-1-trang.jpg", "iphone-13-xanh-1.jpg", "iphone-13-hong.jpg", "iphone-13-den.jpg"],
        dotCarouselImages: ["iphone-13-starlight-1-200x200.jpg", "iphone-13-blue-1-200x200.jpg", "iphone-13-pink-2-200x200.jpg", "iphone-13-midnight-2-200x200.jpg"],
        colors: ["Trắng", "Xanh dương", "Hồng", "Đen"],
        detailImgURL: "iphone-13-n.jpg",
        specAttributes: {
            "Màn hình": 'OLED, 6.1", Super Retina XDR',
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": '	iOS 15',
            "Camera sau": '2 camera 12MP',
            "Camera trước": '12MP',
            "RAM": '4 GB',
            "Bộ nhớ trong": '128 GB',
            "Pin, Sạc": '3240 mAh, 20 W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
            {
                reviewer: "Trương Thu Hoài",
                date: "21-3-2022",
                time: "4:52AM",
                rating: 1,  //[1,5]
                content: "Điện thoại gì chán thế nhỉ, cửa hàng lớn làm ăn lom dom =))"
            },
            {
                reviewer: "Nguyen Tran Nhu Thao",
                date: "3-1-2022",
                time: "8:31AM",
                rating: 5,  //[1,5]
                content: "sao giá ở đây đắt hơn giá bên cửa hàng khác vậy"
            },
            {
                reviewer: "Vũ Sơn",
                date: "3-10-2021",
                time: "8:17PM",
                rating: 3,  //[1,5]
                content: "Shop bán hàng đẽu"
            },
            {
                reviewer: "Ngọc",
                date: "3-8-2021",
                time: "8:63PM",
                rating: 2,  //[1,5]
                content: "Tạm được"
            },
            {
                reviewer: "Thư Ngố",
                date: "4-2-2021",
                time: "8:63PM",
                rating: 5,  //[1,5]
                content: "Hàng đẹp phết"
            },
        ]
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
            "Camera sau: 2 camera 12MP",
            "Camera trước: 12MP",
            "Pin 3110 mAh, Sạc 18 W"
        ],
        alterOptions: ["64GB", "128GB"],
        ram: ["4GB"],
        rom: ["64GB", "128GB"],
        oldPrices: [14990000, 16990000],
        currentPrices: [12390000, 14390000],
        ratings: 4,
        soldQuantity: 412,
        brand: "apple",
        mainCarouselImages: ["iphone-11-tim-1-1-1-org.jpg", "iphone-11-vang-1-2-org.jpg", "iphone-11-trang-1-2-org.jpg", "iphone-11-do-1-1-1-org.jpg"],
        dotCarouselImages: ["iphone-xi-tim-200x200.jpg", "iphone-xi-vang-200x200.jpg", "iphone-11-trang-200x200.jpg", "iphone-xi-do-200x200.jpg"],
        colors: ["Tím", "Vàng", "Trắng", "Đỏ"],
        detailImgURL: "iphone-11-note.jpg",
        specAttributes: {
            "Màn hình": 'IPS LCD, 6.1", Liquid Retina',
            "Chip": "Apple 13 Bionic",
            "Hệ điều hành": 'iOS 15',
            "Camera sau": '2 camera 12MP',
            "Camera trước": '12MP',
            "RAM": '4 GB',
            "Bộ nhớ trong": '64 GB',
            "Pin, Sạc": '3110 mAh, 18 W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
            {
                reviewer: "Trương Thu Hoài",
                date: "21-3-2022",
                time: "4:52AM",
                rating: 1,  //[1,5]
                content: "Điện thoại gì chán thế nhỉ, cửa hàng lớn làm ăn lom dom =))"
            },
            {
                reviewer: "Nguyen Tran Nhu Thao",
                date: "3-1-2022",
                time: "8:31AM",
                rating: 5,  //[1,5]
                content: "sao giá ở đây đắt hơn giá bên cửa hàng khác vậy"
            },
            {
                reviewer: "Vũ Sơn",
                date: "3-10-2021",
                time: "8:17PM",
                rating: 3,  //[1,5]
                content: "Shop bán hàng đẽu"
            },
            {
                reviewer: "Ngọc",
                date: "3-8-2021",
                time: "8:63PM",
                rating: 2,  //[1,5]
                content: "Tạm được"
            },
            {
                reviewer: "Thư Ngố",
                date: "4-2-2021",
                time: "8:63PM",
                rating: 5,  //[1,5]
                content: "Hàng đẹp phết"
            },
        ]
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
            "Camera sau: 2 camera 12MP",
            "Camera trước: 12MP",
            "Pin 2438 mAh, Sạc 18 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB"],
        ram: ["4GB"],
        rom: ["128GB", "256GB", "512GB"],
        oldPrices: [21990000, 22900000, 30990000],
        currentPrices: [18490000, 20990000, 23990000],
        ratings: 3,
        soldQuantity: 312,
        brand: "apple",
        mainCarouselImages: ["iphone-13-mini-hong-1.jpg", "iphone-13-mini-xanh-xa-1.jpg", "iphone-13-mini-red-1-1.jpg", "iphone-13-mini-1-2.jpg"],
        dotCarouselImages: ["iphone-13-mini-pink-1-200x200.jpg", "iphone-13-mini-xanh-la-thumb-200x200.jpg", "iphone-13-mini-red-1-200x200.jpg", "iphone-13-mini-blue-2-200x200.jpg"],
        colors: ["Hồng", "Xanh lá", "Đỏ", "Xanh dương"],
        detailImgURL: "iphone-13-mini-n.jpg",
        specAttributes: {
            "Màn hình": 'OLED, 5.4", Super Retina XDR',
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": 'iOS 15',
            "Camera sau": '2 camera 12MP',
            "Camera trước": '12MP',
            "RAM": '4 GB',
            "Bộ nhớ trong": '128 GB',
            "Pin, Sạc": '2438 mAh, 20 W',
        },

        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
        ],
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
            "Camera sau: 2 camera 12MP",
            "Camera trước: 12MP",
            "Pin 3110 mAh, Sạc 18 W"
        ],
        alterOptions: ["64GB", "128GB", "256GB"],
        ram: ["4GB"],
        rom: ["64GB", "128GB", "256GB"],
        oldPrices: [19990000, 21990000, 23890000],
        currentPrices: [17390000, 19990000, 21890000],
        ratings: 4,
        soldQuantity: 741,
        brand: "apple",

        mainCarouselImages: ["iphone-12-tim.jpg", "iphone-12-den.jpg", "iphone-12-xanh-la.jpg", "iphone-12-xanh-duong.jpg"],
        dotCarouselImages: ["iphone-12-tim-1-200x200.jpg", "iphone-12-den-new-2-200x200.jpg", "iphone-12-xanh-la-new-2-200x200.jpg", "iphone-12-xanh-duong-new-2-200x200.jpg"],
        colors: ["Tím", "Đen", "Xanh lá", "Xanh dương"],
        detailImgURL: "iphone-12-note.jpg",
        specAttributes: {
            "Màn hình": 'OLED, 6.1", Super Retina XDR',
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": 'iOS 15',
            "Camera sau": '2 camera 12MP',
            "Camera trước": '12MP',
            "RAM": '4 GB',
            "Bộ nhớ trong": '64 GB',
            "Pin, Sạc": '2815 mAh, 20 W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
        ],
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
            "Camera sau: 2 camera 12MP",
            "Camera trước: 12MP",
            "Pin 2227 mAh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB"],
        ram: ["4GB"],
        rom: ["128GB", "256GB", "512GB"],
        oldPrices: [20990000, 18990000, 21990000],
        currentPrices: [16490000, 14990000, 16990000],
        ratings: 4,
        soldQuantity: 412,
        brand: "apple",

        mainCarouselImages: ["iphone-12-mini-den", "iphone-12-mini-tim.jpg", "iphone-12-mini-xanh-duong-1-1-org.jpg", "iphone-12-mini-xanh-la-1-1-org.jpg"],
        dotCarouselImages: ["iphone-12-mini-den-15-200x200.jpg", "iphone-12-mini-mau-tim-3-200x200.jpg", "iphone-12-mini-xanh-duong-15-200x200.jpg", "iphone-12-mini-xanh-la-15-200x200.jpg"],
        colors: ["Đen", "Tím", "Xanh dương", "Xanh lá"],
        detailImgURL: "iphone-12-mini-note-2",
        specAttributes: {
            "Màn hình": 'OLED, 5.4", Super Retina XDR',
            "Chip": "Apple 14 Bionic",
            "Hệ điều hành": 'iOS 15',
            "Camera sau": '2 camera 12MP',
            "Camera trước": '12MP',
            "RAM": '4 GB',
            "Bộ nhớ trong": '64 GB',
            "Pin, Sạc": '2227 mAh, 20 W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
        ],
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
            "Camera sau: 12MP",
            "Camera trước: 7MP",
            "Pin 2018 mAh, Sạc 20 W"
        ],
        alterOptions: ["64GB", "128GB"],
        ram: ["4GB"],
        rom: ["64GB", "128GB"],
        oldPrices: [12990000, 13990000],
        currentPrices: [12490000, 12990000],
        ratings: 2,
        soldQuantity: 218,
        brand: "apple",

        mainCarouselImages: ["iphone-se-2022-2-1.jpg", "iphone-se-2022-white-1.jpg", "iphone-se-2022-den-1.jpg"],
        dotCarouselImages: ["iphone-se-red-200x200.jpg", "iphone-se-white-200x200.jpg", "iphone-se-black-200x200.jpeg"],
        colors: ["Đỏ", "Trắng", "Đen"],
        detailImgURL: "iphone-se-2022-150322-045536.jpg",
        specAttributes: {
            "Màn hình": 'IPS LCD, 4.7", Retina HD',
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": 'iOS 15',
            "Camera sau": '12MP',
            "Camera trước": '7MP',
            "RAM": '4 GB',
            "Bộ nhớ trong": '64 GB',
            "Pin, Sạc": '2018 mAh, 20 W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
        ],
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
            "Camera sau: Chính 108MP & Phụ 12MP, 10MP, 10MP",
            "Camera trước: 40MP",
            "Pin 5000 mAh, Sạc 45 W"
        ],
        alterOptions: ["128GB", "256GB"],
        ram: ["8GB", "12GB"],
        rom: ["128GB", "256GB"],
        oldPrices: [30990000, 33990000],
        currentPrices: [27990000, 30990000],
        ratings: 4,
        soldQuantity: 537,
        brand: "samsung",

        mainCarouselImages: ["samsung-galaxy-s22-ultra-1-1.jpg", "galaxy-s22-ultra-white-8.jpg", "galaxy-s22-ultra-black-4.jpg", "samsung-galaxy-s22-ultra-xanh-reu-1-1.jpg"],
        dotCarouselImages: ["Galaxy-S22-Ultra-Burgundy-200x200.jpg", "Galaxy-S22-Ultra-White-200x200.jpg", "Galaxy-S22-Ultra-Black-200x200.jpg", "Galaxy-S22-Ultra-Green-200x200.jpg"],
        colors: ["Đỏ", "Trắng", "Đen", "Xanh lá"],
        detailImgURL: "samsung-galaxy-s22-ultra-note.jpg",
        specAttributes: {
            "Màn hình": 'Dynamic AMOLED 2X, 6.8", Quad HD+ (2K+)',
            "Chip": "Snapdragon 8 Gen 1",
            "Hệ điều hành": 'Android 12',
            "Camera sau": 'Chính 108MP & Phụ 12MP, 10MP, 10MP',
            "Camera trước": '40MP',
            "RAM": '8 GB',
            "Bộ nhớ trong": '128 GB',
            "Pin, Sạc": '5000 mAh, 45 W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
        ],
    },

    {
        id: 10,
        category: "smartphone",
        name: "Galaxy S22 5G",
        indexProductImgURL: "Galaxy-S22.jpg",
        features: [
            "Màn 6.1 inch, Full HD+",
            "Chip Snapdragon 8 Gen 1",
            "RAM 8GB",
            "Camera sau: Chính 50MP & Phụ 12MP, 10MP",
            "Camera trước: 10MP",
            "Pin 3700 mAh, Sạc 25 W"
        ],
        alterOptions: ["128GB", "256GB"],
        ram: ["8GB"],
        rom: ["128GB", "256GB"],
        oldPrices: [21990000, 23490000],
        currentPrices: [18990000, 20490000],
        ratings: 4,
        soldQuantity: 214,
        brand: "samsung",

        mainCarouselImages: ["samsung-galaxy-s22-den-1.jpg", "samsung-galaxy-s22-green-2.jpg", "samsung-galaxy-s22-pink.jpg", "samsung-galaxy-s22-white.jpg"],
        dotCarouselImages: ["Galaxy-S22-Black-200x200.jpg", "Galaxy-S22-Green-200x200.jpg", "Galaxy-S22-pink-200x200.jpg", "Galaxy-S22-White-200x200.jpg"],
        colors: ["Đen", "Xanh lá", "Hồng", "Trắng"],
        detailImgURL: "samsung-galaxy-s22-note.jpg",
        specAttributes: {
            "Màn hình": 'Dynamic AMOLED 2X, 6.1", Full HD+',
            "Chip": "Snapdragon 8 Gen 1",
            "Hệ điều hành": 'Android 12',
            "Camera sau": 'Chính 50MP & Phụ 12MP, 10MP',
            "Camera trước": '10MP',
            "RAM": '8GB',
            "Bộ nhớ trong": '128GB',
            "Pin, Sạc": '3700mAh, 45W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
        ],
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
            "Camera sau: Chính 108MP & Phụ 8MP, 5MP",
            "Camera trước: 16MP",
            "Pin 5000mAh, Sạc 120W"
        ],
        alterOptions: ["8GB", "12GB"],
        ram: ["8GB", "12GB"],
        rom: ["128GB", "256GB"],
        oldPrices: [15690000, 16990000],
        currentPrices: [13990000, 14990000],
        ratings: 4,
        soldQuantity: 389,
        brand: "xiaomi",

        mainCarouselImages: ["xiaomi-11t-pro-1-1.jpg", "xiaomi-11t-pro-1-2.jpg", "xiaomi-11t-pro-1-3"],
        dotCarouselImages: ["Xiaomi-11T-Pro-Blue-1-2-200x200.jpg", "Xiaomi-11T-Pro-Grey-200x200.jpg", "Xiaomi-11T-Pro-White-200x200.jpg"],
        colors: ["Xanh dương", "Xám", "Trắng"],
        detailImgURL: "xiaomi-11t-pro-note-2.jpg",
        specAttributes: {
            "Màn hình": 'AMOLED, 6.67", Full HD+',
            "Chip": "Snapdragon 888",
            "Hệ điều hành": 'Android 11',
            "Camera sau": 'Chính 108MP & Phụ 8MP, 5MP',
            "Camera trước": '16MP',
            "RAM": '8GB',
            "Bộ nhớ trong": '256GB',
            "Pin, Sạc": '5000mAh, 120W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
        ],
    },

    {
        id: 40,
        category: "smartphone",
        name: "Xiaomi Redmi 9C",
        indexProductImgURL: "xiaomi-redmi-9c-3gb-xam-600x600.jpg",
        features: [
            'Màn hình IPS LCD, 6.53", HD+',
            "Chip MediaTek Helio G35",
            "Hệ điều hành Android 10",
            "Camera sau Chính 13MP & Phụ 2MP, 2MP",
            "Camera trước 5MP",
            "Pin, Sạc 5000mAh, 10W",
        ],
        alterOptions: ["64GB", "128GB"],
        ram: ["3GB", "4GB"],
        rom: ["64GB", "128GB"],
        oldPrices: [3590000, 3490000],
        currentPrices: [2999000, 3350000],
        ratings: 3,
        soldQuantity: 130,
        brand: "xiaomi",

        mainCarouselImages: ["xiaomi-11t-pro-1-3.jpg", "xiaomi-redmi-9c-3gb-cam-4-org.jpg"],
        dotCarouselImages: ["xiaomi-redmi-9c-3gb-xam-200x200.jpg", "xiaomi-redmi-9c-3gb-cam-200x200.jpg"],
        colors: ["Xám", "Cam"],
        detailImgURL: "xiaomi-11t-pro-note-2.jpg",
        specAttributes: {
            "Màn hình": 'IPS LCD, 6.53", HD+',
            "Chip": "MediaTek Helio G35",
            "Hệ điều hành": 'Android 10',
            "Camera sau": 'Chính 13MP & Phụ 2MP, 2MP',
            "Camera trước": '5MP',
            "RAM": '3 GB',
            "Bộ nhớ trong": '64GB',
            "Pin, Sạc": '5000mAh, 10W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
        ],
    },

    {
        id: 41,
        category: "smartphone",
        name: "Xiaomi 12",
        indexProductImgURL: "Xiaomi-12-xam-thumb-mau-600x600.jpg",
        features: [
            'Màn hình AMOLED, 6.28", Full HD+',
            "Chip Snapdragon 8 Gen 1",
            "Hệ điều hành Android 12",
            "Camera sau Chính 50MP & Phụ 13MP, 5MP",
            "Camera trước 32MP",
            "RAM 8GB",
            "Pin, Sạc 4500mAh, 67W",
        ],
        alterOptions: ["128GB", "256GB"],
        ram: ["8GB"],
        rom: ["64GB", "128GB"],
        oldPrices: [19990000, 21390000],
        currentPrices: [15990000, 19990000],
        ratings: 4,
        soldQuantity: 125,
        brand: "xiaomi",

        mainCarouselImages: ["xiaomi-mi-12-1-1.jpg", "xiaomi-12-xanhduong.jpg", "xiaomi-mi-12-tim.jpg"],
        dotCarouselImages: ["Xiaomi-12-xam-thumb-mau-200x200.jpg", "Xiaomi-12-xanh-duong-thumb-mau-200x200.jpg", "Xiaomi-12-tim-thumb-mau-200x200.jpg"],
        colors: ["Xám", "Xanh dương", "Tím"],
        detailImgURL: "xiaomi-mi-12-note.jpg",
        specAttributes: {
            "Màn hình": 'AMOLED, 6.28", Full HD+',
            "Chip": "Snapdragon 8 Gen 1",
            "Hệ điều hành": 'Android 12',
            "Camera sau": 'Chính 50MP & Phụ 13MP, 5MP',
            "Camera trước": '32MP',
            "RAM": '8GB',
            "Bộ nhớ trong": '256GB',
            "Pin, Sạc": '4500mAh, 67W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
        ],
    },

    {
        id: 42,
        category: "smartphone",
        name: "Galaxy Z Fold3",
        indexProductImgURL: "samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
        features: [
            'Màn hình Dynamic AMOLED 2X, Chính 7.6" & Phụ 6.2", Full HD+',
            "Chip Snapdragon 8888",
            "Hệ điều hành Android 11",
            "Camera sau 3 camera 12MP",
            "Camera trước 10MP & 4MP",
            "RAM 12GB",
            "Bộ nhớ trong 256GB",
            "Pin, Sạc 4400mAh, 25 W",
        ],
        alterOptions: ["256GB", "512GB"],
        ram: ["12GB"],
        rom: ["256GB", "512GB"],
        oldPrices: [41990000, 44990000],
        currentPrices: [31990000, 34990000],
        ratings: 5,
        soldQuantity: 263,
        brand: "samsung",

        mainCarouselImages: ["samsung-galaxy-z-fold-3-1-3.jpg", "samsung-galaxy-z-fold-3-den-2.jpg", "samsung-galaxy-z-fold3-5g-xanh-reu-5.jpg"],
        dotCarouselImages: ["samsung-galaxy-z-fold-3-silver-1-200x200.jpg", "samsung-galaxy-z-fold-3-black-1-200x200.jpg", "samsung-galaxy-z-fold-3-green-1-200x200.jpg"],
        colors: ["Bạc", "Đen", "Xanh rêu"],
        detailImgURL: "samsung-galaxy-z-fold-3-n-2.jpg",
        specAttributes: {
            "Màn hình": 'Dynamic AMOLED 2X, Chính 7.6" & Phụ 6.2", Full HD+',
            "Chip": "Snapdragon 888",
            "Hệ điều hành": 'Android 11',
            "Camera sau": '3 camera 12MP',
            "Camera trước": '10MP & 4MP',
            "RAM": '12GB',
            "Bộ nhớ trong": '256GB',
            "Pin, Sạc": '4400mAh, 25 W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
        ],
    },

    {
        id: 43,
        category: "smartphone",
        name: "Galaxy Z Flip3",
        indexProductImgURL: "samsung-galaxy-z-flip-3-cream-1-600x600.jpg",
        features: [
            'Màn hình Dynamic AMOLED 2X, Chính 6.7" & Phụ 1.9", Full HD+',
            "Chip Snapdragon 8888",
            "Hệ điều hành Android 11",
            "Camera sau 2 camera 12MP",
            "Camera trước 10MP",
            "RAM 8GB",
            "Bộ nhớ trong 128GB",
            "Pin, Sạc 3300mAh, 15 W",
        ],
        alterOptions: ["128GB","256GB"],
        ram: ["8GB"],
        rom: ["128GB","256GB"],
        oldPrices: [24990000, 26990000],
        currentPrices: [14990000, 16990000],
        ratings: 5,
        soldQuantity: 486,
        brand: "samsung",

        mainCarouselImages: ["samsung-galaxy-z-flip-3-kem-1-org.jpg", "samsung-galaxy-z-flip-3-1-2.jpg", "samsung-galaxy-z-flip-3-2-3.jpg", "samsung-galaxy-s22-ultra-xanh-reu-1-1.jpg"],
        dotCarouselImages: ["samsung-galaxy-z-flip-3-cream-1-200x200.jpg", "samsung-galaxy-z-flip-3-black-1-200x200.jpg", "samsung-galaxy-z-flip-3-violet-1-200x200.jpg" , "samsung-galaxy-z-flip-3-green-1-200x200.jpg"],
        colors: ["Kem", "Đen", "Tím", "Xanh lá"],
        detailImgURL: "samsung-galaxy-z-flip-3-kem-note.jpg",
        specAttributes: {
            "Màn hình": 'Dynamic AMOLED 2X, Chính 6.7" & Phụ 1.9", Full HD+',
            "Chip": "Snapdragon 888",
            "Hệ điều hành": 'Android 11',
            "Camera sau": '2 camera 12MP',
            "Camera trước": '10MP',
            "RAM": '8GB',
            "Bộ nhớ trong": '256GB',
            "Pin, Sạc": '3300mAh, 15 W',
        },
        reviews: [
            {
                reviewer: "Trương Tam Phong",
                date: "24-7-2022",
                time: "5:52PM",
                rating: 4,  //[1,5]
                content: "Sản phẩm chất lượng, giá cả hạp lí. Sản phẩm chất lượng, giá cả hạp lí"
            },
        ],
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
            "Camera sau: Chính 12MP & Phụ 10MP",
            "Camera trước: 12MP",
            "Pin 28.65 Wh, Sạc 20 W"
        ],
        alterOptions: ["128GB", "256GB", "512GB"],
        ram: ["8GB"],
        rom: ["128GB", "256GB", "512GB"],
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
            "Camera trước: 12MP",
            "Pin 28.65 Wh, Sạc 20 W"
        ],
        alterOptions: ["64GB", "256GB"],
        ram: ["8GB"],
        rom: ["64GB", "256GB"],
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
            "Camera trước: 12MP",
            "Pin 19.3 Wh, Sạc 20 W"
        ],
        alterOptions: ["64GB", "256GB"],
        ram: ["4GB"],
        rom: ["64GB", "256GB"],
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
            "Camera trước: 12MP",
            "Pin 32.4 Wh, Sạc 20 W"
        ],
        alterOptions: ["64GB", "256GB"],
        ram: ["3GB"],
        rom: ["64GB", "256GB"],
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
            "Camera trước: 6MP",
            "Pin 8000 mAh, Sạc 45 W"
        ],
        alterOptions: ["128GB", "256GB"],
        ram: ["8GB"],
        rom: ["128GB", "256GB"],
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
            "Camera sau: 8MP",
            "Camera trước: 2MP",
            "Pin 5100 mAh, Sạc 15 W"
        ],
        alterOptions: ["32GB", "64GB"],
        ram: ["3GB"],
        rom: ["32GB", "64GB"],
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
            "Camera sau: 13MP",
            "Camera trước: 8MP",
            "Pin 7250 mAh, Sạc 18 W"
        ],
        alterOptions: ["128GB", "256GB"],
        ram: ["6GB"],
        rom: ["128GB", "256GB"],
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
            "Camera sau: 8MP",
            "Camera trước: 8MP",
            "Pin 7250 mAh, Sạc 22.5 W"
        ],
        alterOptions: ["128GB", "256GB"],
        ram: ["4GB"],
        rom: ["128GB", "256GB"],
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
            "Camera sau: 13MP",
            "Camera trước: 8MP",
            "Pin 7700 mAh, Sạc 20 W"
        ],
        alterOptions: ["64GB"],
        ram: ["4GB"],
        rom: ["64GB"],
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
            "Camera trước: 7MP",
            "Pin 28.7 Wh, Sạc 20 W"
        ],
        alterOptions: ["64GB"],
        ram: ["4GB"],
        rom: ["64GB"],
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
        ram: ["8GB"],
        rom: ["256GB", "512GB"],
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
        ram: ["32GB"],
        rom: ["512GB"],
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
        ram: ["32GB"],
        rom: ["512GB"],
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
        ram: ["8GB"],
        rom: ["256GB", "512GB"],
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
        ram: ["8GB"],
        rom: ["256GB", "512GB"],
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
        ram: ["8GB"],
        rom: ["512GB"],
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
        ram: ["8GB"],
        rom: ["512GB"],
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
        ram: ["16GB"],
        rom: ["512GB"],
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
        ram: ["16GB"],
        rom: ["512GB"],
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
        ram: ["8GB"],
        rom: ["512GB"],
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


let vouchers = {
    "TECHG5": {
        value: 0.05,
        description: "Giảm 5% tối đa 2,000,000đ",
        limit: 2000000
    },

    "TECHG10": {
        value: 0.1,
        description: "Giảm 10% tối đa 4,000,000đ",
        limit: 4000000
    },

    "TECHG15": {
        value: 0.15,
        description: "Giảm 15% tối đa 1,500,000đ",
        limit: 1500000
    },
}


