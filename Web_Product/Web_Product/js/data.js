const products = [
    {
        id: 1,
        name: "Night king dress",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla natus magnam a libero officiis nobis facere vitae nisi eligendi!",
        images: [
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1502868354157-ec2edd2a1651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlc3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        ],
        rating: 4.5,
        price: 400000,
        sizes: ["S", "M"]
    },
    {
        id: 2,
        name: "Sexy attractive robe",
        description: "Đầm linen thêu tay màu mộc mang đến sự trẻ trung, năng động trong thiết kế, sự thoải mái trong chất liệu. Đây xứng đáng là một item hoàn hảo trong tủ đồ mùa hè của nàng.",
        images: [
            "https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJlc3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1519657337289-077653f724ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRyZXNzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1518553552028-b1ba6f77cf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRyZXNzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1547547908-dddfb9113547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRyZXNzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ],
        rating: 3.5,
        price: 300000,
        sizes: ["S", "M", "XL"]
    },
    {
        id: 3,
        name: "Wedding dress for party",
        description: "Áo dài linen đỏ hoa nhí của Cỏ May với hoa nhí xinh như giọt sương mai, form suông thoải mái, vừa tôn dáng lại vừa giấu nhẹm khuyết điểm cho nàng, nhìn yêu kiều lắm lắm.",
        images: [
            "https://images.unsplash.com/photo-1585487000465-cecc786737b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGRyZXNzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1503561517656-7c1b65d37192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGRyZXNzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1584498010477-a76415cc65d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGRyZXNzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRyZXNzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ],
        rating: 4,
        price: 380000,
        sizes: ["XL"]
    },
    {
        id: 4,
        name: "Pyjamas of the Noble",
        description: "Pyjamas cũng được viết là pajama, có nghĩa là một bộ trang phục quần ống rộng, nhẹ hoặc một bộ đồ hai mảnh rộng rãi bao gồm quần và áo sơ mi. Được mặc lần đầu tiên được mặc phương Đông. Chúng được may bằng lụa, bông hoặc chất liệu tổng hợp và được mặc ở nhà để ngủ hoặc nằm dài.",
        images: [
            "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHJlc3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRyZXNzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1616902600460-ba49d74b3a7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRyZXNzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1502727135886-df285cc8379f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGRyZXNzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ],
        rating: 2.5,
        price: 950000,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 5,
        name: "Áo thun trẻ con",
        description: "A T-shirt, or tee, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean.",
        images: [
            "https://images.unsplash.com/photo-1572708609354-e4b4bdfe5a93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHQlMjBzaGlydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1622351707577-9e755be1e69e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ],
        rating: 1.5,
        price: 215000,
        sizes: ["L", "XL"]
    }
]


const vouchers = {
    "GIAM05": 0.05,
    "GIAM10": 0.1,
    "GIAM20": 0.2,
}

