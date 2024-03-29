let users = [];
let products = [
    {
        id: 1,
        category: "smartphone",
        name: "iPhone 13 Pro Max",
        indexProductImgURL: "iphone-13-pro-max.jpg",
        features: [
            "Màn 6.7 inch",
            "Chip Apple 15 Bionic",
            "RAM 6GB",
            "Camera sau: 3 camera 12MP",
            "Camera trước: 12MP",
            "Pin 4352 mAh, Sạc 20 W"
        ],
        alterOptions: [
            "128GB",
            "256GB",
            "512GB",
            "1TB"
        ],
        ram: [
            "6GB"
        ],
        rom: [
            "128GB",
            "256GB",
            "512GB",
            "1TB"
        ],
        oldPrices: [
            33900000,
            36990000,
            41490000,
            47990000
        ],
        currentPrices: [
            28290000,
            30790000,
            35290000,
            40290000
        ],
        ratings: 5,
        soldQuantity: 1541,
        brand: "apple",
        mainCarouselImages: [
            "iphone-13-pro-xanh-xa-1.jpg",
            "iphone-13-pro6-gold.jpg",
            "iphone-13-pro-blue.jpg",
            "iphone-13-pro-silver-2.jpg",
            "iphone-13-pro-xam-1.jpg"
        ],
        dotCarouselImages: [
            "xanh-la-iphone.jpg",
            "iphone-13-pro-gold-1-200x200.jpg",
            "iphone-13-pro-sierra-blue-200x200.jpg",
            "iphone-13-pro-silver-200x200.jpg",
            "iphone-13-pro-graphite-200x200.jpg"
        ],
        colors: [
            "Xanh lá",
            "Vàng đồng",
            "Xanh dương",
            "Bạc",
            "Xám"
        ],
        detailImgURL: "iphone-13-pro-max-n-2.jpg",
        specAttributes: {
            "Màn hình": "OLED, 6.7\", Super Retina XDR",
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": "\tiOS 15",
            "Camera sau": "3 camera 12MP",
            "Camera trước": "12MP",
            "RAM": "6 GB",
            "Bộ nhớ trong": "128 GB",
            "Pin, Sạc": "4352 mAh, 20 W"
        },
        reviews: [
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "20-9-2021",
                time: "6:36AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "27-8-2021",
                time: "9:50PM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "6-8-2021",
                time: "1:14PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "31-7-2021",
                time: "1:25AM",
                rating: 4,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "23-6-2021",
                time: "2:37PM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "30-3-2021",
                time: "9:32PM",
                rating: 4,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "25-3-2021",
                time: "12:8PM",
                rating: 4,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "3-3-2021",
                time: "7:5PM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Thu",
                date: "31-2-2021",
                time: "5:20PM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "21-2-2021",
                time: "4:42AM",
                rating: 3,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "NgMinh",
                date: "13-2-2021",
                time: "2:43PM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "11-2-2021",
                time: "7:2AM",
                rating: 3,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "3-2-2021",
                time: "11:8AM",
                rating: 2,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Hà Lợi",
                date: "26-1-2021",
                time: "3:57PM",
                rating: 4,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "15-1-2021",
                time: "4:1PM",
                rating: 2,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Thu",
                date: "10-1-2021",
                time: "10:49PM",
                rating: 2,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Thu",
                date: "2-1-2021",
                time: "3:49AM",
                rating: 4,
                content: "Rất tốt"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "9-12-2020",
                time: "9:18AM",
                rating: 4,
                content: "Rất tốt"
            },
            {
                reviewer: "Chị Trang",
                date: "3-12-2020",
                time: "1:9PM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Thu",
                date: "7-11-2020",
                time: "2:40PM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "HUYỀN",
                date: "28-9-2020",
                time: "5:3PM",
                rating: 4,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Hiếu",
                date: "22-9-2020",
                time: "6:45AM",
                rating: 5,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "NgMinh",
                date: "1-9-2020",
                time: "2:59PM",
                rating: 5,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Thu",
                date: "3-8-2020",
                time: "2:37AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Long",
                date: "20-7-2020",
                time: "12:7PM",
                rating: 3,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "31-6-2020",
                time: "9:3PM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Đức Thắng",
                date: "27-6-2020",
                time: "8:43AM",
                rating: 4,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Long",
                date: "17-6-2020",
                time: "10:4AM",
                rating: 3,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Linh",
                date: "16-6-2020",
                time: "11:33AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "HÀ",
                date: "2-6-2020",
                time: "10:3PM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "30-5-2020",
                time: "1:34PM",
                rating: 1,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "12-5-2020",
                time: "7:29PM",
                rating: 4,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Hiếu",
                date: "11-4-2020",
                time: "10:47PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "6-3-2020",
                time: "10:35PM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "CHI",
                date: "10-2-2020",
                time: "4:45PM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Hà Lợi",
                date: "8-2-2020",
                time: "10:29PM",
                rating: 2,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Minh",
                date: "6-1-2020",
                time: "7:34AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "CHI",
                date: "5-1-2020",
                time: "9:58PM",
                rating: 2,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "HÀ",
                date: "4-1-2020",
                time: "2:8AM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "21-11-2019",
                time: "11:9AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "4-11-2019",
                time: "6:6AM",
                rating: 4,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "23-10-2019",
                time: "2:24AM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "22-10-2019",
                time: "3:27AM",
                rating: 3,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "6-10-2019",
                time: "9:13PM",
                rating: 2,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "5-10-2019",
                time: "6:12PM",
                rating: 2,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "CHI",
                date: "1-10-2019",
                time: "3:27PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "20-9-2019",
                time: "9:2AM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "1-9-2019",
                time: "2:15AM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Dai Thu",
                date: "19-8-2019",
                time: "1:33PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "24-7-2019",
                time: "6:53PM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "HÀ",
                date: "29-6-2019",
                time: "4:15PM",
                rating: 3,
                content: "Rất tốt"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "10-6-2019",
                time: "10:10AM",
                rating: 1,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Dai Thu",
                date: "1-6-2019",
                time: "8:51PM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "THẢO",
                date: "31-5-2019",
                time: "12:31PM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Hà Lợi",
                date: "26-5-2019",
                time: "7:12PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "22-5-2019",
                time: "6:51PM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "HUYỀN",
                date: "30-4-2019",
                time: "9:53PM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "12-2-2019",
                time: "3:57PM",
                rating: 2,
                content: "Rất tốt"
            },
            {
                reviewer: "THẢO",
                date: "9-2-2019",
                time: "2:29PM",
                rating: 3,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "16-1-2019",
                time: "7:41PM",
                rating: 2,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            }
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
        alterOptions: [
            "128GB",
            "256GB",
            "512GB",
            "1TB"
        ],
        ram: [
            "6GB"
        ],
        rom: [
            "128GB",
            "256GB",
            "512GB",
            "1TB"
        ],
        oldPrices: [
            30990000,
            33490000,
            38990000,
            43990000
        ],
        currentPrices: [
            26390000,
            27390000,
            31990000,
            36990000
        ],
        ratings: 4,
        soldQuantity: 582,
        brand: "apple",
        mainCarouselImages: [
            "iphone-13-pro-xanh-xa-1.jpg",
            "iphone-13-pro6-gold.jpg",
            "iphone-13-pro-blue.jpg",
            "iphone-13-pro-silver-2.jpg",
            "iphone-13-pro-xam-1.jpg"
        ],
        dotCarouselImages: [
            "xanh-la-iphone.jpg",
            "iphone-13-pro-gold-1-200x200.jpg",
            "iphone-13-pro-sierra-blue-200x200.jpg",
            "iphone-13-pro-silver-200x200.jpg",
            "iphone-13-pro-graphite-200x200.jpg"
        ],
        colors: [
            "Xanh lá",
            "Vàng đồng",
            "Xanh dương",
            "Bạc",
            "Xám"
        ],
        detailImgURL: "iphone-13-pro-n-2.jpg",
        specAttributes: {
            "Màn hình": "OLED, 6.1\", Super Retina XDR",
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": "\tiOS 15",
            "Camera sau": "3 camera 12MP",
            "Camera trước": "12MP",
            "RAM": "6 GB",
            "Bộ nhớ trong": "128 GB",
            "Pin, Sạc": "3095 mAh, 20 W"
        },
        reviews: [
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "18-12-2021",
                time: "3:45PM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyễn Anh",
                date: "16-11-2021",
                time: "2:34AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "10-11-2021",
                time: "6:3PM",
                rating: 3,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "CHI",
                date: "3-11-2021",
                time: "9:1PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "13-10-2021",
                time: "5:49PM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "31-9-2021",
                time: "4:1PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "13-9-2021",
                time: "11:29PM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Xuân Bắc",
                date: "9-9-2021",
                time: "7:15AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hải",
                date: "15-8-2021",
                time: "12:6PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "CHI",
                date: "1-8-2021",
                time: "8:25AM",
                rating: 2,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Thu",
                date: "28-7-2021",
                time: "4:4PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "12-7-2021",
                time: "3:28AM",
                rating: 1,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Minh",
                date: "4-6-2021",
                time: "3:2PM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "26-3-2021",
                time: "10:8AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "3-3-2021",
                time: "10:12AM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "15-1-2021",
                time: "3:31PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Bảo Vy",
                date: "5-1-2021",
                time: "10:34AM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "23-12-2020",
                time: "3:56AM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "6-12-2020",
                time: "5:10PM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "15-11-2020",
                time: "9:41AM",
                rating: 4,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "NgMinh",
                date: "18-9-2020",
                time: "1:26PM",
                rating: 3,
                content: "Rất tốt"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "22-8-2020",
                time: "2:4PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Bảo Vy",
                date: "8-7-2020",
                time: "10:10AM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "5-7-2020",
                time: "5:11PM",
                rating: 3,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "17-6-2020",
                time: "12:52PM",
                rating: 5,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "HUYỀN",
                date: "9-6-2020",
                time: "5:40AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Long",
                date: "30-5-2020",
                time: "10:3PM",
                rating: 4,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Võ Thị Liên",
                date: "22-5-2020",
                time: "5:15AM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "12-4-2020",
                time: "11:8PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "6-4-2020",
                time: "11:13AM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "4-4-2020",
                time: "4:3AM",
                rating: 5,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "26-3-2020",
                time: "2:60PM",
                rating: 4,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "6-3-2020",
                time: "8:27AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "19-2-2020",
                time: "4:28PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "27-12-2019",
                time: "11:57AM",
                rating: 5,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "CHI",
                date: "13-12-2019",
                time: "9:45AM",
                rating: 4,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "23-11-2019",
                time: "1:30AM",
                rating: 2,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Hà Lợi",
                date: "12-11-2019",
                time: "2:14PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "11-11-2019",
                time: "11:1AM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "5-11-2019",
                time: "1:50PM",
                rating: 3,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "29-10-2019",
                time: "1:42AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Đức Thắng",
                date: "2-9-2019",
                time: "2:20AM",
                rating: 3,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "3-5-2019",
                time: "3:39AM",
                rating: 5,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "20-4-2019",
                time: "8:19PM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "6-3-2019",
                time: "6:19AM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "NgMinh",
                date: "28-2-2019",
                time: "7:53AM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            }
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
        alterOptions: [
            "128GB",
            "256GB",
            "512GB"
        ],
        ram: [
            "4GB"
        ],
        rom: [
            "128GB",
            "256GB",
            "512GB"
        ],
        oldPrices: [
            24990000,
            27990000,
            32490000
        ],
        currentPrices: [
            20390000,
            23890000,
            26490000
        ],
        ratings: 4,
        soldQuantity: 823,
        brand: "apple",
        mainCarouselImages: [
            "iphone-13-1-trang.jpg",
            "iphone-13-xanh-1.jpg",
            "iphone-13-hong.jpg",
            "iphone-13-den.jpg"
        ],
        dotCarouselImages: [
            "iphone-13-starlight-1-200x200.jpg",
            "iphone-13-blue-1-200x200.jpg",
            "iphone-13-pink-2-200x200.jpg",
            "iphone-13-midnight-2-200x200.jpg"
        ],
        colors: [
            "Trắng",
            "Xanh dương",
            "Hồng",
            "Đen"
        ],
        detailImgURL: "iphone-13-n.jpg",
        specAttributes: {
            "Màn hình": "OLED, 6.1\", Super Retina XDR",
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": "\tiOS 15",
            "Camera sau": "2 camera 12MP",
            "Camera trước": "12MP",
            "RAM": "4 GB",
            "Bộ nhớ trong": "128 GB",
            "Pin, Sạc": "3240 mAh, 20 W"
        },
        reviews: [
            {
                reviewer: "Phan Thị Sương Sương",
                date: "2-12-2021",
                time: "8:46AM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "27-11-2021",
                time: "8:21PM",
                rating: 1,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Minh",
                date: "2-10-2021",
                time: "8:36AM",
                rating: 5,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "23-8-2021",
                time: "9:50PM",
                rating: 3,
                content: "May tốt"
            },
            {
                reviewer: "THẢO",
                date: "9-8-2021",
                time: "12:50AM",
                rating: 4,
                content: "May tốt"
            },
            {
                reviewer: "Long",
                date: "5-6-2021",
                time: "4:33PM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "24-5-2021",
                time: "2:15PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Long",
                date: "23-5-2021",
                time: "12:52PM",
                rating: 5,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "30-3-2021",
                time: "6:49PM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "28-3-2021",
                time: "9:10AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "21-3-2021",
                time: "10:10PM",
                rating: 3,
                content: "Rất tốt"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "25-2-2021",
                time: "9:56PM",
                rating: 5,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "15-1-2021",
                time: "6:41AM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "Hải",
                date: "30-12-2020",
                time: "4:3AM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "5-11-2020",
                time: "3:26PM",
                rating: 4,
                content: "May tốt"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "22-10-2020",
                time: "7:37PM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Xuân Bắc",
                date: "2-10-2020",
                time: "6:30AM",
                rating: 5,
                content: "Uy tín"
            },
            {
                reviewer: "Dai Thu",
                date: "22-9-2020",
                time: "12:17PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "30-4-2020",
                time: "6:6AM",
                rating: 2,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "26-4-2020",
                time: "10:28PM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Hải",
                date: "1-4-2020",
                time: "2:33PM",
                rating: 4,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "24-3-2020",
                time: "11:55AM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "THẢO",
                date: "16-3-2020",
                time: "5:22PM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "21-12-2019",
                time: "12:7AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "THẢO",
                date: "19-12-2019",
                time: "5:52PM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Chị Trang",
                date: "5-12-2019",
                time: "8:20PM",
                rating: 5,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "22-10-2019",
                time: "3:7PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "21-9-2019",
                time: "4:11PM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Bảo Vy",
                date: "16-5-2019",
                time: "2:14PM",
                rating: 1,
                content: "Rất tốt"
            },
            {
                reviewer: "THẢO",
                date: "14-5-2019",
                time: "11:60PM",
                rating: 2,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Long",
                date: "26-2-2019",
                time: "5:17PM",
                rating: 5,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            }
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
        alterOptions: [
            "64GB",
            "128GB"
        ],
        ram: [
            "4GB"
        ],
        rom: [
            "64GB",
            "128GB"
        ],
        oldPrices: [
            14990000,
            16990000
        ],
        currentPrices: [
            12390000,
            14390000
        ],
        ratings: 4,
        soldQuantity: 412,
        brand: "apple",
        mainCarouselImages: [
            "iphone-11-tim-1-1-1-org.jpg",
            "iphone-11-vang-1-2-org.jpg",
            "iphone-11-trang-1-2-org.jpg",
            "iphone-11-do-1-1-1-org.jpg"
        ],
        dotCarouselImages: [
            "iphone-xi-tim-200x200.jpg",
            "iphone-xi-vang-200x200.jpg",
            "iphone-11-trang-200x200.jpg",
            "iphone-xi-do-200x200.jpg"
        ],
        colors: [
            "Tím",
            "Vàng",
            "Trắng",
            "Đỏ"
        ],
        detailImgURL: "iphone-11-note.jpg",
        specAttributes: {
            "Màn hình": "IPS LCD, 6.1\", Liquid Retina",
            "Chip": "Apple 13 Bionic",
            "Hệ điều hành": "iOS 15",
            "Camera sau": "2 camera 12MP",
            "Camera trước": "12MP",
            "RAM": "4 GB",
            "Bộ nhớ trong": "64 GB",
            "Pin, Sạc": "3110 mAh, 18 W"
        },
        reviews: [
            {
                reviewer: "Nguyễn Như Thành",
                date: "8-12-2021",
                time: "2:55AM",
                rating: 1,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "31-11-2021",
                time: "3:55PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "22-11-2021",
                time: "9:41AM",
                rating: 5,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "6-9-2021",
                time: "10:47AM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Đức Thắng",
                date: "7-8-2021",
                time: "2:32PM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "16-7-2021",
                time: "2:3PM",
                rating: 5,
                content: "Uy tín"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "6-7-2021",
                time: "9:20AM",
                rating: 4,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Thu",
                date: "26-6-2021",
                time: "4:9PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "23-5-2021",
                time: "8:46AM",
                rating: 4,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "20-2-2021",
                time: "3:41PM",
                rating: 4,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "8-1-2021",
                time: "11:20PM",
                rating: 3,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "THẮM",
                date: "1-1-2021",
                time: "1:18PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "13-12-2020",
                time: "10:60PM",
                rating: 5,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "25-11-2020",
                time: "4:9PM",
                rating: 5,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "17-11-2020",
                time: "6:21AM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Đức Thắng",
                date: "15-10-2020",
                time: "8:18AM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "5-9-2020",
                time: "4:36PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "9-5-2020",
                time: "5:34AM",
                rating: 4,
                content: "May tốt"
            },
            {
                reviewer: "THẢO",
                date: "20-4-2020",
                time: "7:34PM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "31-3-2020",
                time: "6:21AM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "17-3-2020",
                time: "8:9AM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "14-3-2020",
                time: "5:33PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "2-3-2020",
                time: "2:13AM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "1-3-2020",
                time: "11:51PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "24-2-2020",
                time: "3:59PM",
                rating: 2,
                content: "May tốt"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "12-2-2020",
                time: "10:20AM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Long",
                date: "7-1-2020",
                time: "10:7PM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "25-12-2019",
                time: "2:40PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Dai Thu",
                date: "15-12-2019",
                time: "1:31PM",
                rating: 3,
                content: "May tốt"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "31-10-2019",
                time: "9:44PM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "24-9-2019",
                time: "9:32AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "18-9-2019",
                time: "6:5PM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "12-9-2019",
                time: "8:8PM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Thu",
                date: "31-8-2019",
                time: "1:34PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "THẮM",
                date: "16-8-2019",
                time: "6:46AM",
                rating: 1,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "12-8-2019",
                time: "5:11PM",
                rating: 2,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Thu",
                date: "15-5-2019",
                time: "8:45PM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "16-3-2019",
                time: "9:30PM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Đức Thắng",
                date: "8-3-2019",
                time: "2:33AM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "15-2-2019",
                time: "2:50PM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "10-2-2019",
                time: "2:59AM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Nguyễn Anh",
                date: "25-1-2019",
                time: "10:39AM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Linh",
                date: "22-1-2019",
                time: "12:7AM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "18-1-2019",
                time: "1:37AM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            }
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
        alterOptions: [
            "128GB",
            "256GB",
            "512GB"
        ],
        ram: [
            "4GB"
        ],
        rom: [
            "128GB",
            "256GB",
            "512GB"
        ],
        oldPrices: [
            21990000,
            22900000,
            30990000
        ],
        currentPrices: [
            18490000,
            20990000,
            23990000
        ],
        ratings: 3,
        soldQuantity: 312,
        brand: "apple",
        mainCarouselImages: [
            "iphone-13-mini-hong-1.jpg",
            "iphone-13-mini-xanh-xa-1.jpg",
            "iphone-13-mini-red-1-1.jpg",
            "iphone-13-mini-1-2.jpg"
        ],
        dotCarouselImages: [
            "iphone-13-mini-pink-1-200x200.jpg",
            "iphone-13-mini-xanh-la-thumb-200x200.jpg",
            "iphone-13-mini-red-1-200x200.jpg",
            "iphone-13-mini-blue-2-200x200.jpg"
        ],
        colors: [
            "Hồng",
            "Xanh lá",
            "Đỏ",
            "Xanh dương"
        ],
        detailImgURL: "iphone-13-mini-n.jpg",
        specAttributes: {
            "Màn hình": "OLED, 5.4\", Super Retina XDR",
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": "iOS 15",
            "Camera sau": "2 camera 12MP",
            "Camera trước": "12MP",
            "RAM": "4 GB",
            "Bộ nhớ trong": "128 GB",
            "Pin, Sạc": "2438 mAh, 20 W"
        },
        reviews: [
            {
                reviewer: "Nguyễn Như Thành",
                date: "23-12-2021",
                time: "6:46PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "HÀ",
                date: "9-12-2021",
                time: "8:33AM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "27-6-2021",
                time: "11:44AM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "28-5-2021",
                time: "12:15PM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "CHI",
                date: "12-5-2021",
                time: "8:59PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "HUYỀN",
                date: "22-3-2021",
                time: "10:9PM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "26-11-2020",
                time: "10:50AM",
                rating: 4,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "30-8-2020",
                time: "4:26PM",
                rating: 5,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "19-6-2020",
                time: "6:3AM",
                rating: 4,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "16-6-2020",
                time: "1:22AM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Hà Lợi",
                date: "15-5-2020",
                time: "4:48AM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "THẮM",
                date: "22-3-2020",
                time: "3:25PM",
                rating: 1,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "CHI",
                date: "1-2-2020",
                time: "2:14PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Linh",
                date: "19-10-2019",
                time: "3:38AM",
                rating: 1,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "7-10-2019",
                time: "10:18PM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "CHI",
                date: "23-9-2019",
                time: "5:6PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "25-7-2019",
                time: "12:46PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "26-4-2019",
                time: "9:27AM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Long",
                date: "7-3-2019",
                time: "3:53PM",
                rating: 5,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "18-2-2019",
                time: "9:36AM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            }
        ]
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
        alterOptions: [
            "64GB",
            "128GB",
            "256GB"
        ],
        ram: [
            "4GB"
        ],
        rom: [
            "64GB",
            "128GB",
            "256GB"
        ],
        oldPrices: [
            19990000,
            21990000,
            23890000
        ],
        currentPrices: [
            17390000,
            19990000,
            21890000
        ],
        ratings: 4,
        soldQuantity: 741,
        brand: "apple",
        mainCarouselImages: [
            "iphone-12-tim.jpg",
            "iphone-12-den.jpg",
            "iphone-12-xanh-la.jpg",
            "iphone-12-xanh-duong.jpg"
        ],
        dotCarouselImages: [
            "iphone-12-tim-1-200x200.jpg",
            "iphone-12-den-new-2-200x200.jpg",
            "iphone-12-xanh-la-new-2-200x200.jpg",
            "iphone-12-xanh-duong-new-2-200x200.jpg"
        ],
        colors: [
            "Tím",
            "Đen",
            "Xanh lá",
            "Xanh dương"
        ],
        detailImgURL: "iphone-12-note.jpg",
        specAttributes: {
            "Màn hình": "OLED, 6.1\", Super Retina XDR",
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": "iOS 15",
            "Camera sau": "2 camera 12MP",
            "Camera trước": "12MP",
            "RAM": "4 GB",
            "Bộ nhớ trong": "64 GB",
            "Pin, Sạc": "2815 mAh, 20 W"
        },
        reviews: [
            {
                reviewer: "CHI",
                date: "14-9-2021",
                time: "7:27PM",
                rating: 1,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "31-6-2021",
                time: "4:3PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "HUYỀN",
                date: "14-2-2021",
                time: "11:25AM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "12-2-2021",
                time: "2:3PM",
                rating: 5,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "11-1-2021",
                time: "12:21AM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "12-12-2020",
                time: "1:13AM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "28-6-2020",
                time: "7:42PM",
                rating: 2,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "NgMinh",
                date: "28-5-2020",
                time: "9:4AM",
                rating: 1,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Hải",
                date: "5-5-2020",
                time: "4:31PM",
                rating: 3,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "14-3-2020",
                time: "8:34AM",
                rating: 4,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "31-12-2019",
                time: "12:41AM",
                rating: 1,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "THẢO",
                date: "29-12-2019",
                time: "10:28AM",
                rating: 3,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "27-8-2019",
                time: "6:13AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "22-8-2019",
                time: "11:6AM",
                rating: 5,
                content: "Uy tín"
            },
            {
                reviewer: "THẢO",
                date: "24-6-2019",
                time: "4:10PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "13-5-2019",
                time: "1:16AM",
                rating: 5,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Minh",
                date: "7-5-2019",
                time: "10:25AM",
                rating: 3,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "24-3-2019",
                time: "12:21AM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Linh",
                date: "3-3-2019",
                time: "3:17PM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "6-1-2019",
                time: "7:41AM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            }
        ]
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
        alterOptions: [
            "128GB",
            "256GB",
            "512GB"
        ],
        ram: [
            "4GB"
        ],
        rom: [
            "128GB",
            "256GB",
            "512GB"
        ],
        oldPrices: [
            20990000,
            18990000,
            21990000
        ],
        currentPrices: [
            16490000,
            14990000,
            16990000
        ],
        ratings: 4,
        soldQuantity: 412,
        brand: "apple",
        mainCarouselImages: [
            "iphone-12-mini-den.jpg",
            "iphone-12-mini-tim.jpg",
            "iphone-12-mini-xanh-duong-1-1-org.jpg",
            "iphone-12-mini-xanh-la-1-1-org.jpg"
        ],
        dotCarouselImages: [
            "iphone-12-mini-den-15-200x200.jpg",
            "iphone-12-mini-mau-tim-3-200x200.jpg",
            "iphone-12-mini-xanh-duong-15-200x200.jpg",
            "iphone-12-mini-xanh-la-15-200x200.jpg"
        ],
        colors: [
            "Đen",
            "Tím",
            "Xanh dương",
            "Xanh lá"
        ],
        detailImgURL: "iphone-12-mini-note-2.jpg",
        specAttributes: {
            "Màn hình": "OLED, 5.4\", Super Retina XDR",
            "Chip": "Apple 14 Bionic",
            "Hệ điều hành": "iOS 15",
            "Camera sau": "2 camera 12MP",
            "Camera trước": "12MP",
            "RAM": "4 GB",
            "Bộ nhớ trong": "64 GB",
            "Pin, Sạc": "2227 mAh, 20 W"
        },
        reviews: [
            {
                reviewer: "Nguyễn Như Thành",
                date: "28-9-2021",
                time: "8:33PM",
                rating: 5,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Hà Lợi",
                date: "26-8-2021",
                time: "10:12AM",
                rating: 5,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "25-5-2021",
                time: "2:30AM",
                rating: 3,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "CHI",
                date: "12-2-2021",
                time: "2:14PM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "11-2-2021",
                time: "1:28AM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "27-11-2020",
                time: "8:38PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "23-11-2020",
                time: "1:51AM",
                rating: 4,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "22-9-2020",
                time: "4:57AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "20-9-2020",
                time: "1:14PM",
                rating: 5,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "15-8-2020",
                time: "8:28AM",
                rating: 5,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Hà Lợi",
                date: "8-8-2020",
                time: "3:59AM",
                rating: 5,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Bảo Vy",
                date: "10-5-2020",
                time: "7:25AM",
                rating: 1,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "3-5-2020",
                time: "12:16PM",
                rating: 1,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "29-4-2020",
                time: "2:20PM",
                rating: 2,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "THẮM",
                date: "15-3-2020",
                time: "1:43AM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Dai Thu",
                date: "14-3-2020",
                time: "7:31PM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Linh",
                date: "9-3-2020",
                time: "11:56PM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Minh",
                date: "16-12-2019",
                time: "7:4PM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "24-11-2019",
                time: "4:2PM",
                rating: 3,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "25-10-2019",
                time: "5:44PM",
                rating: 4,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "THẢO",
                date: "9-10-2019",
                time: "3:7AM",
                rating: 1,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "7-10-2019",
                time: "2:29AM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "1-9-2019",
                time: "3:37PM",
                rating: 3,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "NgMinh",
                date: "28-8-2019",
                time: "6:55AM",
                rating: 5,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "HÀ",
                date: "23-6-2019",
                time: "11:40AM",
                rating: 3,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Hiếu",
                date: "9-5-2019",
                time: "5:41AM",
                rating: 3,
                content: "Rất tốt"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "20-1-2019",
                time: "11:40PM",
                rating: 5,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            }
        ]
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
        alterOptions: [
            "64GB",
            "128GB"
        ],
        ram: [
            "4GB"
        ],
        rom: [
            "64GB",
            "128GB"
        ],
        oldPrices: [
            12990000,
            13990000
        ],
        currentPrices: [
            12490000,
            12990000
        ],
        ratings: 2,
        soldQuantity: 218,
        brand: "apple",
        mainCarouselImages: [
            "iphone-se-2022-2-1.jpg",
            "iphone-se-2022-white-1.jpg",
            "iphone-se-2022-den-1.jpg"
        ],
        dotCarouselImages: [
            "iphone-se-red-200x200.jpg",
            "iphone-se-white-200x200.jpg",
            "iphone-se-black-200x200.jpeg"
        ],
        colors: [
            "Đỏ",
            "Trắng",
            "Đen"
        ],
        detailImgURL: "iphone-se-2022-150322-045536.jpg",
        specAttributes: {
            "Màn hình": "IPS LCD, 4.7\", Retina HD",
            "Chip": "Apple 15 Bionic",
            "Hệ điều hành": "iOS 15",
            "Camera sau": "12MP",
            "Camera trước": "7MP",
            "RAM": "4 GB",
            "Bộ nhớ trong": "64 GB",
            "Pin, Sạc": "2018 mAh, 20 W"
        },
        reviews: [
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "24-10-2021",
                time: "3:25AM",
                rating: 3,
                content: "Rất tốt"
            },
            {
                reviewer: "Hải",
                date: "11-9-2021",
                time: "7:21PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "13-8-2021",
                time: "1:37PM",
                rating: 3,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Linh",
                date: "29-6-2021",
                time: "6:45PM",
                rating: 5,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "2-6-2021",
                time: "8:24PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "25-3-2021",
                time: "12:54PM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "22-3-2021",
                time: "3:51AM",
                rating: 3,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "14-3-2021",
                time: "11:20PM",
                rating: 3,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "THẢO",
                date: "11-2-2021",
                time: "3:21AM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Lương Thị Lan",
                date: "18-1-2021",
                time: "1:41PM",
                rating: 1,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "THẢO",
                date: "15-12-2020",
                time: "5:45AM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Chị Trang",
                date: "9-11-2020",
                time: "7:43PM",
                rating: 4,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "3-11-2020",
                time: "11:15AM",
                rating: 5,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "3-11-2020",
                time: "1:38AM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "27-8-2020",
                time: "6:4AM",
                rating: 4,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "THẢO",
                date: "11-6-2020",
                time: "6:42PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "THẮM",
                date: "27-3-2020",
                time: "4:37AM",
                rating: 2,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Xuân Bắc",
                date: "23-1-2020",
                time: "3:44PM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Thu",
                date: "9-1-2020",
                time: "6:27AM",
                rating: 4,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Chị Trang",
                date: "9-1-2020",
                time: "3:10PM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "THẮM",
                date: "5-12-2019",
                time: "6:39AM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "3-10-2019",
                time: "10:1PM",
                rating: 3,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "8-8-2019",
                time: "5:16AM",
                rating: 4,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "4-8-2019",
                time: "4:42AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "18-6-2019",
                time: "4:22PM",
                rating: 4,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "HUYỀN",
                date: "22-4-2019",
                time: "5:44AM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "9-4-2019",
                time: "10:45AM",
                rating: 1,
                content: "May tốt"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "12-2-2019",
                time: "6:45AM",
                rating: 1,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Thu",
                date: "28-1-2019",
                time: "5:59PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            }
        ]
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
        alterOptions: [
            "128GB",
            "256GB"
        ],
        ram: [
            "8GB",
            "12GB"
        ],
        rom: [
            "128GB",
            "256GB"
        ],
        oldPrices: [
            30990000,
            33990000
        ],
        currentPrices: [
            27990000,
            30990000
        ],
        ratings: 4,
        soldQuantity: 537,
        brand: "samsung",
        mainCarouselImages: [
            "samsung-galaxy-s22-ultra-1-1.jpg",
            "galaxy-s22-ultra-white-8.jpg",
            "galaxy-s22-ultra-black-4.jpg",
            "samsung-galaxy-s22-ultra-xanh-reu-1-1.jpg"
        ],
        dotCarouselImages: [
            "Galaxy-S22-Ultra-Burgundy-200x200.jpg",
            "Galaxy-S22-Ultra-White-200x200.jpg",
            "Galaxy-S22-Ultra-Black-200x200.jpg",
            "Galaxy-S22-Ultra-Green-200x200.jpg"
        ],
        colors: [
            "Đỏ",
            "Trắng",
            "Đen",
            "Xanh lá"
        ],
        detailImgURL: "samsung-galaxy-s22-ultra-note.jpg",
        specAttributes: {
            "Màn hình": "Dynamic AMOLED 2X, 6.8\", Quad HD+ (2K+)",
            "Chip": "Snapdragon 8 Gen 1",
            "Hệ điều hành": "Android 12",
            "Camera sau": "Chính 108MP & Phụ 12MP, 10MP, 10MP",
            "Camera trước": "40MP",
            "RAM": "8 GB",
            "Bộ nhớ trong": "128 GB",
            "Pin, Sạc": "5000 mAh, 45 W"
        },
        reviews: [
            {
                reviewer: "Nông Đức Mạnh",
                date: "24-12-2021",
                time: "6:26AM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "20-12-2021",
                time: "5:14PM",
                rating: 4,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Thu",
                date: "18-12-2021",
                time: "11:39PM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Bảo Vy",
                date: "2-12-2021",
                time: "12:49AM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "14-9-2021",
                time: "4:51AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "19-8-2021",
                time: "4:15PM",
                rating: 4,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "THẢO",
                date: "11-7-2021",
                time: "5:51PM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "THẮM",
                date: "26-6-2021",
                time: "7:15PM",
                rating: 4,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Xuân Bắc",
                date: "14-4-2021",
                time: "2:27PM",
                rating: 4,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Xuân Bắc",
                date: "2-3-2021",
                time: "9:26PM",
                rating: 5,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "2-3-2021",
                time: "3:11AM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Dai Thu",
                date: "23-2-2021",
                time: "4:56AM",
                rating: 1,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "12-2-2021",
                time: "5:50AM",
                rating: 3,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "25-12-2020",
                time: "9:22PM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Hà Lợi",
                date: "22-12-2020",
                time: "7:4PM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "3-11-2020",
                time: "4:60PM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "17-10-2020",
                time: "4:60PM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Hiếu",
                date: "29-9-2020",
                time: "10:26PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "29-9-2020",
                time: "8:56AM",
                rating: 2,
                content: "Rất tốt"
            },
            {
                reviewer: "Long",
                date: "27-9-2020",
                time: "12:19PM",
                rating: 1,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "CHI",
                date: "22-9-2020",
                time: "5:36PM",
                rating: 5,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "HÀ",
                date: "23-8-2020",
                time: "7:6PM",
                rating: 4,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "20-8-2020",
                time: "11:21PM",
                rating: 5,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "6-8-2020",
                time: "8:49PM",
                rating: 5,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "7-7-2020",
                time: "7:59AM",
                rating: 2,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "26-6-2020",
                time: "8:19AM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "1-6-2020",
                time: "7:33AM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "27-5-2020",
                time: "6:18PM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "27-3-2020",
                time: "12:57PM",
                rating: 4,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "NgMinh",
                date: "25-3-2020",
                time: "3:28PM",
                rating: 4,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Chị Trang",
                date: "19-3-2020",
                time: "3:16PM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "13-1-2020",
                time: "12:35PM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "24-11-2019",
                time: "4:31PM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Bảo Vy",
                date: "6-11-2019",
                time: "7:11PM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "6-11-2019",
                time: "1:57AM",
                rating: 4,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "THẢO",
                date: "10-10-2019",
                time: "12:16PM",
                rating: 3,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Long",
                date: "23-9-2019",
                time: "9:52PM",
                rating: 4,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Hiếu",
                date: "8-5-2019",
                time: "2:52AM",
                rating: 5,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Xuân Bắc",
                date: "22-1-2019",
                time: "12:17PM",
                rating: 4,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "18-1-2019",
                time: "2:52PM",
                rating: 5,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            }
        ]
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
        alterOptions: [
            "128GB",
            "256GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "128GB",
            "256GB"
        ],
        oldPrices: [
            21990000,
            23490000
        ],
        currentPrices: [
            18990000,
            20490000
        ],
        ratings: 4,
        soldQuantity: 214,
        brand: "samsung",
        mainCarouselImages: [
            "samsung-galaxy-s22-den-1.jpg",
            "samsung-galaxy-s22-green-2.jpg",
            "samsung-galaxy-s22-pink.jpg",
            "samsung-galaxy-s22-white.jpg"
        ],
        dotCarouselImages: [
            "Galaxy-S22-Black-200x200.jpg",
            "Galaxy-S22-Green-200x200.jpg",
            "Galaxy-S22-pink-200x200.jpg",
            "Galaxy-S22-White-200x200.jpg"
        ],
        colors: [
            "Đen",
            "Xanh lá",
            "Hồng",
            "Trắng"
        ],
        detailImgURL: "samsung-galaxy-s22-note.jpg",
        specAttributes: {
            "Màn hình": "Dynamic AMOLED 2X, 6.1\", Full HD+",
            "Chip": "Snapdragon 8 Gen 1",
            "Hệ điều hành": "Android 12",
            "Camera sau": "Chính 50MP & Phụ 12MP, 10MP",
            "Camera trước": "10MP",
            "RAM": "8GB",
            "Bộ nhớ trong": "128GB",
            "Pin, Sạc": "3700mAh, 45W"
        },
        reviews: [
            {
                reviewer: "Mai Văn Thủy",
                date: "24-12-2021",
                time: "9:3PM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "26-11-2021",
                time: "11:36PM",
                rating: 3,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "CHI",
                date: "11-10-2021",
                time: "9:28AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Chị Trang",
                date: "28-9-2021",
                time: "8:20AM",
                rating: 5,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "11-9-2021",
                time: "2:31PM",
                rating: 3,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "15-7-2021",
                time: "2:35AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Hải",
                date: "26-6-2021",
                time: "12:17PM",
                rating: 3,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "8-5-2021",
                time: "5:16PM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "26-3-2021",
                time: "3:36AM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "25-3-2021",
                time: "10:53AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "1-3-2021",
                time: "7:40AM",
                rating: 4,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "28-2-2021",
                time: "11:15PM",
                rating: 4,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Dai Thu",
                date: "20-2-2021",
                time: "12:13AM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "18-1-2021",
                time: "11:10PM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "NgMinh",
                date: "23-12-2020",
                time: "2:15AM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "CHI",
                date: "19-12-2020",
                time: "7:1PM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "THẢO",
                date: "17-12-2020",
                time: "2:37AM",
                rating: 5,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "2-12-2020",
                time: "8:20AM",
                rating: 5,
                content: "May tốt"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "24-11-2020",
                time: "9:21AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "22-11-2020",
                time: "2:17PM",
                rating: 4,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "13-11-2020",
                time: "12:23AM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "13-11-2020",
                time: "10:41AM",
                rating: 2,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "1-11-2020",
                time: "11:56AM",
                rating: 1,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "31-10-2020",
                time: "4:15PM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "THẮM",
                date: "16-10-2020",
                time: "11:58AM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "1-10-2020",
                time: "5:16PM",
                rating: 2,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "1-10-2020",
                time: "2:44PM",
                rating: 5,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "12-9-2020",
                time: "1:32PM",
                rating: 4,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Xuân Bắc",
                date: "14-8-2020",
                time: "12:50AM",
                rating: 4,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "NgMinh",
                date: "10-8-2020",
                time: "10:39PM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "THẮM",
                date: "26-5-2020",
                time: "2:19AM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "21-5-2020",
                time: "6:14PM",
                rating: 4,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "14-5-2020",
                time: "9:6PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Hiếu",
                date: "8-5-2020",
                time: "5:6AM",
                rating: 1,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Hà Lợi",
                date: "26-4-2020",
                time: "12:40AM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Dai Thu",
                date: "26-4-2020",
                time: "9:40PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Đức Thắng",
                date: "18-4-2020",
                time: "1:1PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "13-4-2020",
                time: "9:24PM",
                rating: 2,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Long",
                date: "13-4-2020",
                time: "7:40AM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Võ Thị Liên",
                date: "4-3-2020",
                time: "5:34PM",
                rating: 3,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "19-1-2020",
                time: "8:5PM",
                rating: 3,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Đức Thắng",
                date: "11-1-2020",
                time: "11:57PM",
                rating: 3,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Xuân Bắc",
                date: "29-12-2019",
                time: "12:15PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "21-12-2019",
                time: "11:49PM",
                rating: 3,
                content: "Rất tốt"
            },
            {
                reviewer: "Hà Lợi",
                date: "1-12-2019",
                time: "8:40PM",
                rating: 2,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "22-10-2019",
                time: "6:3AM",
                rating: 4,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "NgMinh",
                date: "15-10-2019",
                time: "2:11AM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "4-10-2019",
                time: "2:54PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "31-8-2019",
                time: "2:15PM",
                rating: 3,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Lương Thị Lan",
                date: "10-8-2019",
                time: "1:52PM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "CHI",
                date: "4-8-2019",
                time: "4:57PM",
                rating: 1,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Thu",
                date: "25-6-2019",
                time: "9:9AM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "6-6-2019",
                time: "4:31PM",
                rating: 4,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Chị Trang",
                date: "29-5-2019",
                time: "9:42AM",
                rating: 1,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "10-5-2019",
                time: "7:60AM",
                rating: 3,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "7-4-2019",
                time: "12:26AM",
                rating: 2,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Hải",
                date: "7-4-2019",
                time: "2:34AM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Xuân Bắc",
                date: "31-3-2019",
                time: "12:40PM",
                rating: 5,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Xuân Bắc",
                date: "15-3-2019",
                time: "3:46PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "31-2-2019",
                time: "1:6AM",
                rating: 2,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            }
        ]
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
        alterOptions: [
            "8GB",
            "12GB"
        ],
        ram: [
            "8GB",
            "12GB"
        ],
        rom: [
            "128GB",
            "256GB"
        ],
        oldPrices: [
            15690000,
            16990000
        ],
        currentPrices: [
            13990000,
            14990000
        ],
        ratings: 4,
        soldQuantity: 389,
        brand: "xiaomi",
        mainCarouselImages: [
            "xiaomi-11t-pro-1-1.jpg",
            "xiaomi-11t-pro-1-2.jpg",
            "xiaomi-11t-pro-1-3.jpg"
        ],
        dotCarouselImages: [
            "Xiaomi-11T-Pro-Blue-1-2-200x200.jpg",
            "Xiaomi-11T-Pro-Grey-200x200.jpg",
            "Xiaomi-11T-Pro-White-200x200.jpg"
        ],
        colors: [
            "Xanh dương",
            "Xám",
            "Trắng"
        ],
        detailImgURL: "xiaomi-11t-pro-note-2.jpg",
        specAttributes: {
            "Màn hình": "AMOLED, 6.67\", Full HD+",
            "Chip": "Snapdragon 888",
            "Hệ điều hành": "Android 11",
            "Camera sau": "Chính 108MP & Phụ 8MP, 5MP",
            "Camera trước": "16MP",
            "RAM": "8GB",
            "Bộ nhớ trong": "256GB",
            "Pin, Sạc": "5000mAh, 120W"
        },
        reviews: [
            {
                reviewer: "Long",
                date: "12-12-2021",
                time: "11:13PM",
                rating: 2,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "HUYỀN",
                date: "11-12-2021",
                time: "3:42AM",
                rating: 1,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Dai Thu",
                date: "14-11-2021",
                time: "12:60AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Bảo Vy",
                date: "9-11-2021",
                time: "8:6PM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "4-10-2021",
                time: "4:37AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "1-9-2021",
                time: "8:41AM",
                rating: 1,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Đức Thắng",
                date: "19-8-2021",
                time: "4:30AM",
                rating: 4,
                content: "Rất tốt"
            },
            {
                reviewer: "CHI",
                date: "29-5-2021",
                time: "9:56PM",
                rating: 3,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Bảo Vy",
                date: "2-4-2021",
                time: "4:43PM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "THẢO",
                date: "11-3-2021",
                time: "5:35PM",
                rating: 1,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "31-2-2021",
                time: "3:24AM",
                rating: 5,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "18-1-2021",
                time: "2:25PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Bảo Vy",
                date: "12-1-2021",
                time: "8:3PM",
                rating: 4,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "21-12-2020",
                time: "2:53PM",
                rating: 1,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Minh",
                date: "7-11-2020",
                time: "5:38PM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "4-10-2020",
                time: "9:38AM",
                rating: 2,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "2-9-2020",
                time: "8:7AM",
                rating: 2,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "20-5-2020",
                time: "9:41AM",
                rating: 2,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Dai Thu",
                date: "20-4-2020",
                time: "3:39AM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "18-4-2020",
                time: "12:25PM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "6-4-2020",
                time: "2:19AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "NgMinh",
                date: "1-3-2020",
                time: "7:38PM",
                rating: 3,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Chị Trang",
                date: "1-3-2020",
                time: "5:1PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "31-2-2020",
                time: "8:51AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "29-2-2020",
                time: "11:21AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "19-2-2020",
                time: "8:47PM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "CHI",
                date: "16-10-2019",
                time: "8:24PM",
                rating: 2,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Xuân Bắc",
                date: "7-10-2019",
                time: "12:32AM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Bảo Vy",
                date: "22-9-2019",
                time: "6:26AM",
                rating: 5,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "3-9-2019",
                time: "1:2PM",
                rating: 1,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Minh",
                date: "30-8-2019",
                time: "9:2PM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "THẮM",
                date: "24-8-2019",
                time: "2:18PM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "15-8-2019",
                time: "4:38AM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "11-8-2019",
                time: "2:15AM",
                rating: 2,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Minh",
                date: "2-8-2019",
                time: "9:6PM",
                rating: 3,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Đức Thắng",
                date: "31-7-2019",
                time: "1:42AM",
                rating: 2,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "HUYỀN",
                date: "21-7-2019",
                time: "4:30AM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Hiếu",
                date: "28-6-2019",
                time: "1:39AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Chị Trang",
                date: "19-4-2019",
                time: "10:49AM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Xuân Bắc",
                date: "11-4-2019",
                time: "7:31PM",
                rating: 2,
                content: "May tốt"
            },
            {
                reviewer: "Chị Trang",
                date: "12-3-2019",
                time: "5:24PM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Long",
                date: "23-1-2019",
                time: "1:26AM",
                rating: 1,
                content: "Rất tốt"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "9-1-2019",
                time: "6:27PM",
                rating: 4,
                content: "Sài rất ok nhé!"
            }
        ]
    },
    {
        id: 40,
        category: "smartphone",
        name: "Xiaomi Redmi 9C",
        indexProductImgURL: "xiaomi-redmi-9c-3gb-xam-600x600.jpg",
        features: [
            "Màn hình IPS LCD, 6.53\", HD+",
            "Chip MediaTek Helio G35",
            "Hệ điều hành Android 10",
            "Camera sau Chính 13MP & Phụ 2MP, 2MP",
            "Camera trước 5MP",
            "Pin, Sạc 5000mAh, 10W"
        ],
        alterOptions: [
            "64GB",
            "128GB"
        ],
        ram: [
            "3GB",
            "4GB"
        ],
        rom: [
            "64GB",
            "128GB"
        ],
        oldPrices: [
            3590000,
            3490000
        ],
        currentPrices: [
            2999000,
            3350000
        ],
        ratings: 3,
        soldQuantity: 130,
        brand: "xiaomi",
        mainCarouselImages: [
            "xiaomi-11t-pro-1-3.jpg",
            "xiaomi-redmi-9c-3gb-cam-4-org.jpg"
        ],
        dotCarouselImages: [
            "xiaomi-redmi-9c-3gb-xam-200x200.jpg",
            "xiaomi-redmi-9c-3gb-cam-200x200.jpg"
        ],
        colors: [
            "Xám",
            "Cam"
        ],
        detailImgURL: "xiaomi-11t-pro-note-2.jpg",
        specAttributes: {
            "Màn hình": "IPS LCD, 6.53\", HD+",
            "Chip": "MediaTek Helio G35",
            "Hệ điều hành": "Android 10",
            "Camera sau": "Chính 13MP & Phụ 2MP, 2MP",
            "Camera trước": "5MP",
            "RAM": "3 GB",
            "Bộ nhớ trong": "64GB",
            "Pin, Sạc": "5000mAh, 10W"
        },
        reviews: [
            {
                reviewer: "Võ Thị Liên",
                date: "23-12-2021",
                time: "11:54PM",
                rating: 4,
                content: "Rất tốt"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "3-12-2021",
                time: "8:41AM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "30-10-2021",
                time: "1:55AM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "HÀ",
                date: "12-10-2021",
                time: "12:60PM",
                rating: 4,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Đức Thắng",
                date: "26-9-2021",
                time: "3:55AM",
                rating: 3,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "THẮM",
                date: "19-9-2021",
                time: "11:20AM",
                rating: 2,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "17-6-2021",
                time: "10:18AM",
                rating: 4,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "9-5-2021",
                time: "8:2AM",
                rating: 4,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "5-4-2021",
                time: "12:24AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "NgMinh",
                date: "4-3-2021",
                time: "3:54PM",
                rating: 3,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "20-2-2021",
                time: "9:41PM",
                rating: 4,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "17-2-2021",
                time: "2:24AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "16-2-2021",
                time: "11:14AM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "6-2-2021",
                time: "9:13AM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "4-12-2020",
                time: "1:7AM",
                rating: 1,
                content: "May tốt"
            },
            {
                reviewer: "THẢO",
                date: "17-11-2020",
                time: "12:45AM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "12-11-2020",
                time: "12:18PM",
                rating: 5,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Hà Lợi",
                date: "6-9-2020",
                time: "4:47AM",
                rating: 2,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Dai Thu",
                date: "18-8-2020",
                time: "2:24AM",
                rating: 4,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "21-7-2020",
                time: "6:28AM",
                rating: 4,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "NgMinh",
                date: "12-7-2020",
                time: "8:50AM",
                rating: 2,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "THẢO",
                date: "21-6-2020",
                time: "5:1PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "25-5-2020",
                time: "7:38PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "30-4-2020",
                time: "2:58PM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Linh",
                date: "10-4-2020",
                time: "6:29PM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "26-3-2020",
                time: "2:40AM",
                rating: 4,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyễn Anh",
                date: "24-3-2020",
                time: "8:20PM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "23-3-2020",
                time: "8:43AM",
                rating: 4,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "10-1-2020",
                time: "3:7AM",
                rating: 3,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "14-12-2019",
                time: "2:36AM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Chị Trang",
                date: "13-12-2019",
                time: "9:50PM",
                rating: 2,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "THẮM",
                date: "8-12-2019",
                time: "8:40PM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "2-10-2019",
                time: "4:36PM",
                rating: 4,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Dai Thu",
                date: "3-9-2019",
                time: "10:10PM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "CHI",
                date: "4-8-2019",
                time: "12:45AM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Minh",
                date: "4-7-2019",
                time: "3:50AM",
                rating: 2,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "CHI",
                date: "25-6-2019",
                time: "7:31AM",
                rating: 2,
                content: "May tốt"
            },
            {
                reviewer: "THẢO",
                date: "10-4-2019",
                time: "10:30PM",
                rating: 2,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "3-4-2019",
                time: "10:19PM",
                rating: 4,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "30-3-2019",
                time: "10:7PM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "30-3-2019",
                time: "9:41PM",
                rating: 2,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "23-3-2019",
                time: "9:51PM",
                rating: 3,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "31-2-2019",
                time: "9:27AM",
                rating: 4,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "9-2-2019",
                time: "1:59AM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "7-2-2019",
                time: "3:2PM",
                rating: 5,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Thu",
                date: "2-2-2019",
                time: "1:5PM",
                rating: 2,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "30-1-2019",
                time: "7:57PM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Chị Trang",
                date: "16-1-2019",
                time: "8:14PM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "6-1-2019",
                time: "12:24PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            }
        ]
    },
    {
        id: 41,
        category: "smartphone",
        name: "Xiaomi 12",
        indexProductImgURL: "Xiaomi-12-xam-thumb-mau-600x600.jpg",
        features: [
            "Màn hình AMOLED, 6.28\", Full HD+",
            "Chip Snapdragon 8 Gen 1",
            "Hệ điều hành Android 12",
            "Camera sau Chính 50MP & Phụ 13MP, 5MP",
            "Camera trước 32MP",
            "RAM 8GB",
            "Pin, Sạc 4500mAh, 67W"
        ],
        alterOptions: [
            "128GB",
            "256GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "64GB",
            "128GB"
        ],
        oldPrices: [
            19990000,
            21390000
        ],
        currentPrices: [
            15990000,
            19990000
        ],
        ratings: 4,
        soldQuantity: 125,
        brand: "xiaomi",
        mainCarouselImages: [
            "xiaomi-mi-12-1-1.jpg",
            "xiaomi-12-xanhduong.jpg",
            "xiaomi-mi-12-tim.jpg"
        ],
        dotCarouselImages: [
            "Xiaomi-12-xam-thumb-mau-200x200.jpg",
            "Xiaomi-12-xanh-duong-thumb-mau-200x200.jpg",
            "Xiaomi-12-tim-thumb-mau-200x200.jpg"
        ],
        colors: [
            "Xám",
            "Xanh dương",
            "Tím"
        ],
        detailImgURL: "xiaomi-mi-12-note.jpg",
        specAttributes: {
            "Màn hình": "AMOLED, 6.28\", Full HD+",
            "Chip": "Snapdragon 8 Gen 1",
            "Hệ điều hành": "Android 12",
            "Camera sau": "Chính 50MP & Phụ 13MP, 5MP",
            "Camera trước": "32MP",
            "RAM": "8GB",
            "Bộ nhớ trong": "256GB",
            "Pin, Sạc": "4500mAh, 67W"
        },
        reviews: [
            {
                reviewer: "Linh",
                date: "31-12-2021",
                time: "2:16PM",
                rating: 2,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Dai Thu",
                date: "8-12-2021",
                time: "11:45AM",
                rating: 5,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "14-10-2021",
                time: "5:23PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "1-10-2021",
                time: "11:12AM",
                rating: 1,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Đức Thắng",
                date: "15-9-2021",
                time: "10:50PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "20-8-2021",
                time: "12:34PM",
                rating: 4,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Linh",
                date: "3-8-2021",
                time: "8:48PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "17-6-2021",
                time: "8:35AM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "31-5-2021",
                time: "11:41AM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "30-4-2021",
                time: "8:52AM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Linh",
                date: "25-3-2021",
                time: "8:22PM",
                rating: 3,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "16-3-2021",
                time: "8:57PM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Bảo Vy",
                date: "16-3-2021",
                time: "8:25PM",
                rating: 3,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "NgMinh",
                date: "7-3-2021",
                time: "7:44AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "THẢO",
                date: "6-3-2021",
                time: "1:49AM",
                rating: 4,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "25-2-2021",
                time: "5:52PM",
                rating: 4,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Đức Thắng",
                date: "10-2-2021",
                time: "11:26PM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "22-1-2021",
                time: "7:52PM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "10-1-2021",
                time: "11:10PM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "18-12-2020",
                time: "2:37PM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "16-11-2020",
                time: "10:47AM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "11-11-2020",
                time: "10:60PM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "8-11-2020",
                time: "3:19PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "28-10-2020",
                time: "9:10AM",
                rating: 5,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "11-8-2020",
                time: "12:22AM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Linh",
                date: "26-7-2020",
                time: "6:2AM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "14-7-2020",
                time: "2:36AM",
                rating: 5,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Minh",
                date: "30-5-2020",
                time: "1:18AM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Long",
                date: "20-5-2020",
                time: "11:36AM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Dai Thu",
                date: "8-5-2020",
                time: "8:16PM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "19-2-2020",
                time: "4:37PM",
                rating: 3,
                content: "Rất tốt"
            },
            {
                reviewer: "NgMinh",
                date: "26-1-2020",
                time: "3:37PM",
                rating: 2,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "17-1-2020",
                time: "12:22PM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "HÀ",
                date: "5-12-2019",
                time: "4:45PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "3-12-2019",
                time: "9:2PM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "30-11-2019",
                time: "3:5AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Bảo Vy",
                date: "20-11-2019",
                time: "6:51AM",
                rating: 1,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "15-11-2019",
                time: "1:16PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "27-9-2019",
                time: "5:45PM",
                rating: 1,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "29-8-2019",
                time: "7:26AM",
                rating: 1,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "23-8-2019",
                time: "6:54PM",
                rating: 1,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Linh",
                date: "13-8-2019",
                time: "12:7PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Long",
                date: "31-7-2019",
                time: "4:22AM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "HÀ",
                date: "22-7-2019",
                time: "6:23AM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "CHI",
                date: "7-6-2019",
                time: "9:3PM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "30-5-2019",
                time: "11:31AM",
                rating: 4,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Linh",
                date: "29-5-2019",
                time: "12:55PM",
                rating: 4,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "28-5-2019",
                time: "10:33AM",
                rating: 3,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "26-4-2019",
                time: "3:36AM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "10-4-2019",
                time: "8:4PM",
                rating: 3,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Bảo Vy",
                date: "3-4-2019",
                time: "12:54PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "THẮM",
                date: "6-3-2019",
                time: "10:27AM",
                rating: 3,
                content: "Rất tốt"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "30-1-2019",
                time: "10:6AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "23-1-2019",
                time: "11:31PM",
                rating: 3,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Dai Thu",
                date: "19-1-2019",
                time: "9:23PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            }
        ]
    },
    {
        id: 42,
        category: "smartphone",
        name: "Galaxy Z Fold3",
        indexProductImgURL: "samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
        features: [
            "Màn hình Dynamic AMOLED 2X, Chính 7.6\" & Phụ 6.2\", Full HD+",
            "Chip Snapdragon 888",
            "Hệ điều hành Android 11",
            "Camera sau 3 camera 12MP",
            "Camera trước 10MP & 4MP",
            "RAM 12GB",
            "Bộ nhớ trong 256GB",
            "Pin, Sạc 4400mAh, 25 W"
        ],
        alterOptions: [
            "256GB",
            "512GB"
        ],
        ram: [
            "12GB"
        ],
        rom: [
            "256GB",
            "512GB"
        ],
        oldPrices: [
            41990000,
            44990000
        ],
        currentPrices: [
            31990000,
            34990000
        ],
        ratings: 5,
        soldQuantity: 263,
        brand: "samsung",
        mainCarouselImages: [
            "samsung-galaxy-z-fold-3-1-3.jpg",
            "samsung-galaxy-z-fold-3-den-2.jpg",
            "samsung-galaxy-z-fold3-5g-xanh-reu-5.jpg"
        ],
        dotCarouselImages: [
            "samsung-galaxy-z-fold-3-silver-1-200x200.jpg",
            "samsung-galaxy-z-fold-3-black-1-200x200.jpg",
            "samsung-galaxy-z-fold-3-green-1-200x200.jpg"
        ],
        colors: [
            "Bạc",
            "Đen",
            "Xanh rêu"
        ],
        detailImgURL: "samsung-galaxy-z-fold-3-n-2.jpg",
        specAttributes: {
            "Màn hình": "Dynamic AMOLED 2X, Chính 7.6\" & Phụ 6.2\", Full HD+",
            "Chip": "Snapdragon 888",
            "Hệ điều hành": "Android 11",
            "Camera sau": "3 camera 12MP",
            "Camera trước": "10MP & 4MP",
            "RAM": "12GB",
            "Bộ nhớ trong": "256GB",
            "Pin, Sạc": "4400mAh, 25 W"
        },
        reviews: [
            {
                reviewer: "HÀ",
                date: "13-12-2021",
                time: "9:55AM",
                rating: 4,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "CHI",
                date: "11-12-2021",
                time: "5:21AM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "12-11-2021",
                time: "9:48PM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "12-11-2021",
                time: "9:41PM",
                rating: 5,
                content: "May tốt"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "1-11-2021",
                time: "7:35AM",
                rating: 4,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "23-10-2021",
                time: "8:38PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Đức Thắng",
                date: "25-9-2021",
                time: "11:52AM",
                rating: 2,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "HUYỀN",
                date: "27-8-2021",
                time: "7:56AM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "6-8-2021",
                time: "3:24AM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Long",
                date: "17-6-2021",
                time: "2:51PM",
                rating: 1,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "CHI",
                date: "28-5-2021",
                time: "10:59PM",
                rating: 1,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "16-5-2021",
                time: "5:34PM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "1-5-2021",
                time: "10:14AM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "THẮM",
                date: "25-4-2021",
                time: "4:49AM",
                rating: 2,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "12-3-2021",
                time: "5:44AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Linh",
                date: "2-3-2021",
                time: "9:9PM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "30-2-2021",
                time: "6:18PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Minh",
                date: "27-2-2021",
                time: "9:24PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "21-10-2020",
                time: "1:7PM",
                rating: 2,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "25-9-2020",
                time: "9:11AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "20-8-2020",
                time: "1:18PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "NgMinh",
                date: "31-7-2020",
                time: "9:3AM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "THẮM",
                date: "14-7-2020",
                time: "6:20PM",
                rating: 3,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "HÀ",
                date: "5-7-2020",
                time: "9:54PM",
                rating: 2,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "20-6-2020",
                time: "7:18AM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "31-5-2020",
                time: "2:56PM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "26-5-2020",
                time: "3:36PM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "Chị Trang",
                date: "10-4-2020",
                time: "6:39AM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "5-3-2020",
                time: "12:30PM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "THẮM",
                date: "9-2-2020",
                time: "11:17PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "4-1-2020",
                time: "12:17AM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Bảo Vy",
                date: "27-12-2019",
                time: "5:15AM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "21-12-2019",
                time: "1:53AM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "2-12-2019",
                time: "10:39AM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Hà Lợi",
                date: "31-11-2019",
                time: "8:40AM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Lương Thị Lan",
                date: "30-11-2019",
                time: "9:3AM",
                rating: 5,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "19-11-2019",
                time: "10:19PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "17-11-2019",
                time: "11:16PM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "8-11-2019",
                time: "5:16AM",
                rating: 1,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Xuân Bắc",
                date: "20-10-2019",
                time: "5:54AM",
                rating: 3,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Linh",
                date: "4-10-2019",
                time: "7:9PM",
                rating: 4,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "26-9-2019",
                time: "5:3AM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "15-9-2019",
                time: "2:21AM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "23-7-2019",
                time: "8:55AM",
                rating: 1,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "12-7-2019",
                time: "1:14AM",
                rating: 1,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "13-5-2019",
                time: "5:54PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "HÀ",
                date: "11-4-2019",
                time: "3:16AM",
                rating: 5,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "HÀ",
                date: "18-3-2019",
                time: "6:57AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "25-2-2019",
                time: "8:4PM",
                rating: 2,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            }
        ]
    },
    {
        id: 43,
        category: "smartphone",
        name: "Galaxy Z Flip3",
        indexProductImgURL: "samsung-galaxy-z-flip-3-cream-1-600x600.jpg",
        features: [
            "Màn hình Dynamic AMOLED 2X, Chính 6.7\" & Phụ 1.9\", Full HD+",
            "Chip Snapdragon 888",
            "Hệ điều hành Android 11",
            "Camera sau 2 camera 12MP",
            "Camera trước 10MP",
            "RAM 8GB",
            "Bộ nhớ trong 128GB",
            "Pin, Sạc 3300mAh, 15 W"
        ],
        alterOptions: [
            "128GB",
            "256GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "128GB",
            "256GB"
        ],
        oldPrices: [
            24990000,
            26990000
        ],
        currentPrices: [
            14990000,
            16990000
        ],
        ratings: 5,
        soldQuantity: 486,
        brand: "samsung",
        mainCarouselImages: [
            "samsung-galaxy-z-flip-3-kem-1-org.jpg",
            "samsung-galaxy-z-flip-3-1-2.jpg",
            "samsung-galaxy-z-flip-3-2-3.jpg",
            "samsung-galaxy-s22-ultra-xanh-reu-1-1.jpg"
        ],
        dotCarouselImages: [
            "samsung-galaxy-z-flip-3-cream-1-200x200.jpg",
            "samsung-galaxy-z-flip-3-black-1-200x200.jpg",
            "samsung-galaxy-z-flip-3-violet-1-200x200.jpg",
            "samsung-galaxy-z-flip-3-green-1-200x200.jpg"
        ],
        colors: [
            "Kem",
            "Đen",
            "Tím",
            "Xanh lá"
        ],
        detailImgURL: "samsung-galaxy-z-flip-3-kem-note.jpg",
        specAttributes: {
            "Màn hình": "Dynamic AMOLED 2X, Chính 6.7\" & Phụ 1.9\", Full HD+",
            "Chip": "Snapdragon 888",
            "Hệ điều hành": "Android 11",
            "Camera sau": "2 camera 12MP",
            "Camera trước": "10MP",
            "RAM": "8GB",
            "Bộ nhớ trong": "256GB",
            "Pin, Sạc": "3300mAh, 15 W"
        },
        reviews: [
            {
                reviewer: "Võ Thị Liên",
                date: "31-12-2021",
                time: "10:14AM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "28-8-2021",
                time: "10:8PM",
                rating: 5,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Đức Thắng",
                date: "14-6-2021",
                time: "5:21PM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "22-4-2021",
                time: "8:25PM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "6-2-2021",
                time: "7:16PM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Thu",
                date: "13-12-2020",
                time: "5:49AM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "31-11-2020",
                time: "3:27PM",
                rating: 3,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Linh",
                date: "27-11-2020",
                time: "2:14AM",
                rating: 2,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "12-10-2020",
                time: "4:13AM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "7-10-2020",
                time: "8:44AM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "19-9-2020",
                time: "1:26PM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "27-4-2020",
                time: "7:26PM",
                rating: 1,
                content: "Rất tốt"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "25-3-2020",
                time: "7:4AM",
                rating: 5,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Đức Thắng",
                date: "23-2-2020",
                time: "2:35AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Linh",
                date: "21-1-2020",
                time: "9:35PM",
                rating: 5,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Đức Thắng",
                date: "28-11-2019",
                time: "9:25PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "27-11-2019",
                time: "9:51PM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "27-11-2019",
                time: "4:14PM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "21-10-2019",
                time: "4:56PM",
                rating: 3,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Xuân Bắc",
                date: "23-9-2019",
                time: "1:52PM",
                rating: 2,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Hà Lợi",
                date: "2-9-2019",
                time: "7:45AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "26-8-2019",
                time: "11:23AM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Long",
                date: "16-8-2019",
                time: "1:29AM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "HUYỀN",
                date: "12-7-2019",
                time: "2:28AM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Minh",
                date: "7-3-2019",
                time: "11:41AM",
                rating: 5,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Hiếu",
                date: "19-2-2019",
                time: "2:1AM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            }
        ]
    },

    {
        id: 44,
        category: "smartphone",
        name: "OPPO Find X5 Pro",
        indexProductImgURL: "oppo-find-x5-pro-den-thumb-600x600.jpg",
        features: [
            "Màn hình AMOLED, 6.7\", Quad HD+ (2k)",
            "Chip Snapdragon 8 Gen 1",
            "Hệ điều hành Android 12",
            "Camera sau 2 camera 50MP, 1 camera 13MP",
            "Camera trước 32MP",
            "RAM 12GB",
            "Bộ nhớ trong 256GB",
            "Pin, Sạc 5000mAh, 80W"
        ],
        alterOptions: [
            "256GB",
            "512GB"
        ],
        ram: [
            "12GB"
        ],
        rom: [
            "256GB",
            "512GB"
        ],
        oldPrices: [
            35990000,
            38990000
        ],
        currentPrices: [
            32990000,
            37590000
        ],
        ratings: 5,
        soldQuantity: 369,
        brand: "oppo",
        mainCarouselImages: [
            "oppo-find-x5-pro-1-1.jpg",
            "oppo-find-x5-pro-trang-1.jpg",
           
        ],
        dotCarouselImages: [
            "oppo-find-x5-pro-den-thumb-200x200.jpg",
            "oppo-find-x5-pro-trang-thumb-1-200x200.jpg",
           
        ],
        colors: [
            "Đen",
            "Trắng"
        ],
        detailImgURL: "oppo-find-x5-pro-16.jpg",
        specAttributes: {
            "Màn hình": "AMOLED, 6.7\", Quad HD+ (2k)",
            "Chip": "Snapdragon 888",
            "Hệ điều hành": "Android 12",
            "Camera sau": "2 camera 50MP, 1 camera 13MP",
            "Camera trước": "32MP",
            "RAM": "12GB",
            "Bộ nhớ trong": "256GB",
            "Pin, Sạc": "5000mAh, 80 W"
        },
        reviews: [
            {
                reviewer: "Võ Thị Liên",
                date: "31-12-2021",
                time: "10:14AM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "28-8-2021",
                time: "10:8PM",
                rating: 5,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Đức Thắng",
                date: "14-6-2021",
                time: "5:21PM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "22-4-2021",
                time: "8:25PM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "6-2-2021",
                time: "7:16PM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Thu",
                date: "13-12-2020",
                time: "5:49AM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "31-11-2020",
                time: "3:27PM",
                rating: 3,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Linh",
                date: "27-11-2020",
                time: "2:14AM",
                rating: 2,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "12-10-2020",
                time: "4:13AM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "7-10-2020",
                time: "8:44AM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "19-9-2020",
                time: "1:26PM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "27-4-2020",
                time: "7:26PM",
                rating: 1,
                content: "Rất tốt"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "25-3-2020",
                time: "7:4AM",
                rating: 5,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Đức Thắng",
                date: "23-2-2020",
                time: "2:35AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Linh",
                date: "21-1-2020",
                time: "9:35PM",
                rating: 5,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Đức Thắng",
                date: "28-11-2019",
                time: "9:25PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "27-11-2019",
                time: "9:51PM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "27-11-2019",
                time: "4:14PM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "21-10-2019",
                time: "4:56PM",
                rating: 3,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Xuân Bắc",
                date: "23-9-2019",
                time: "1:52PM",
                rating: 2,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Hà Lợi",
                date: "2-9-2019",
                time: "7:45AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "26-8-2019",
                time: "11:23AM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Long",
                date: "16-8-2019",
                time: "1:29AM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "HUYỀN",
                date: "12-7-2019",
                time: "2:28AM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Minh",
                date: "7-3-2019",
                time: "11:41AM",
                rating: 5,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Hiếu",
                date: "19-2-2019",
                time: "2:1AM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            }
        ]
    },

    {
        id: 45,
        category: "smartphone",
        name: "OPPO A57",
        indexProductImgURL: "oppo-a57-xanh-thumb-1-600x600.jpg",
        features: [
            "Màn hình IPS LCD, 6.56\", HD+",
            "Chip MediaTek Helio G35",
            "Hệ điều hành Android 12",
            "Camera sau chính 13MP & phụ 2MP",
            "Camera trước 8MP",
            "RAM 4GB",
            "Bộ nhớ trong 64GB",
            "Pin, Sạc 5000mAh, 33W"
        ],
        alterOptions: [
            "64GB",
            "128GB"
        ],
        ram: [
            "4GB"
        ],
        rom: [
            "64GB",
            "128GB"
        ],
        oldPrices: [
            5190000,
            6290000
        ],
        currentPrices: [
            4490000,
            5690000
        ],
        ratings: 3,
        soldQuantity: 136,
        brand: "oppo",
        mainCarouselImages: [
            "oppo-a57-4g-glr-xanh-1.jpg",
            "oppo-a57-4g-glr-den-1.jpg",
           
        ],
        dotCarouselImages: [
            "oppo-a57-xanh-thumb-1-200x200.jpg",
            "oppo-a57-den-thumb-200x200.jpg",
           
        ],
        colors: [
            "Xanh ngọc",
            "Đen"
        ],
        detailImgURL: "oppo-a57-4g-note-1-1.jpg",
        specAttributes: {
            "Màn hình": "IPS LCD, 6.56\", HD+",
            "Chip": "MediaTek Helio G35",
            "Hệ điều hành": "Android 12",
            "Camera sau": "Chính 13MP & Phụ 2MP",
            "Camera trước": "8MP",
            "RAM": "4GB",
            "Bộ nhớ trong": "54GB",
            "Pin, Sạc": "5000mAh, 33W"
        },
        reviews: [
            {
                reviewer: "Long",
                date: "12-12-2021",
                time: "11:13PM",
                rating: 2,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "HUYỀN",
                date: "11-12-2021",
                time: "3:42AM",
                rating: 1,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Dai Thu",
                date: "14-11-2021",
                time: "12:60AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Bảo Vy",
                date: "9-11-2021",
                time: "8:6PM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "4-10-2021",
                time: "4:37AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "1-9-2021",
                time: "8:41AM",
                rating: 1,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Đức Thắng",
                date: "19-8-2021",
                time: "4:30AM",
                rating: 4,
                content: "Rất tốt"
            },
            {
                reviewer: "CHI",
                date: "29-5-2021",
                time: "9:56PM",
                rating: 3,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Bảo Vy",
                date: "2-4-2021",
                time: "4:43PM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "THẢO",
                date: "11-3-2021",
                time: "5:35PM",
                rating: 1,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "31-2-2021",
                time: "3:24AM",
                rating: 5,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "18-1-2021",
                time: "2:25PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Bảo Vy",
                date: "12-1-2021",
                time: "8:3PM",
                rating: 4,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "21-12-2020",
                time: "2:53PM",
                rating: 1,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Minh",
                date: "7-11-2020",
                time: "5:38PM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "4-10-2020",
                time: "9:38AM",
                rating: 2,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "2-9-2020",
                time: "8:7AM",
                rating: 2,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "20-5-2020",
                time: "9:41AM",
                rating: 2,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Dai Thu",
                date: "20-4-2020",
                time: "3:39AM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "18-4-2020",
                time: "12:25PM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "6-4-2020",
                time: "2:19AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "NgMinh",
                date: "1-3-2020",
                time: "7:38PM",
                rating: 3,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Chị Trang",
                date: "1-3-2020",
                time: "5:1PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "31-2-2020",
                time: "8:51AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "29-2-2020",
                time: "11:21AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "19-2-2020",
                time: "8:47PM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "CHI",
                date: "16-10-2019",
                time: "8:24PM",
                rating: 2,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Xuân Bắc",
                date: "7-10-2019",
                time: "12:32AM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Bảo Vy",
                date: "22-9-2019",
                time: "6:26AM",
                rating: 5,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "3-9-2019",
                time: "1:2PM",
                rating: 1,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Minh",
                date: "30-8-2019",
                time: "9:2PM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "THẮM",
                date: "24-8-2019",
                time: "2:18PM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "15-8-2019",
                time: "4:38AM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "11-8-2019",
                time: "2:15AM",
                rating: 2,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Minh",
                date: "2-8-2019",
                time: "9:6PM",
                rating: 3,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Đức Thắng",
                date: "31-7-2019",
                time: "1:42AM",
                rating: 2,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "HUYỀN",
                date: "21-7-2019",
                time: "4:30AM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Hiếu",
                date: "28-6-2019",
                time: "1:39AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Chị Trang",
                date: "19-4-2019",
                time: "10:49AM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Xuân Bắc",
                date: "11-4-2019",
                time: "7:31PM",
                rating: 2,
                content: "May tốt"
            },
            {
                reviewer: "Chị Trang",
                date: "12-3-2019",
                time: "5:24PM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Long",
                date: "23-1-2019",
                time: "1:26AM",
                rating: 1,
                content: "Rất tốt"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "9-1-2019",
                time: "6:27PM",
                rating: 4,
                content: "Sài rất ok nhé!"
            }
        ]
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
        alterOptions: [
            "128GB",
            "256GB",
            "512GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "128GB",
            "256GB",
            "512GB"
        ],
        oldPrices: [
            26990000,
            29990000,
            35990000
        ],
        currentPrices: [
            26090000,
            29690000,
            30990000
        ],
        ratings: 5,
        soldQuantity: 532,
        brand: "apple",
        reviews: [
            {
                reviewer: "Lê Ngọc Huy",
                date: "17-12-2021",
                time: "8:46PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "17-9-2021",
                time: "5:46AM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Đức Thắng",
                date: "1-7-2021",
                time: "9:45AM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "6-4-2021",
                time: "11:3PM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Hà Lợi",
                date: "4-4-2021",
                time: "2:41PM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "9-2-2021",
                time: "3:20PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "20-1-2021",
                time: "5:53PM",
                rating: 5,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Dai Thu",
                date: "30-10-2020",
                time: "7:52PM",
                rating: 4,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "26-10-2020",
                time: "9:19AM",
                rating: 4,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "22-7-2020",
                time: "11:26PM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Võ Thị Liên",
                date: "24-4-2020",
                time: "4:10PM",
                rating: 1,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Dai Thu",
                date: "20-4-2020",
                time: "11:29PM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "NgMinh",
                date: "10-3-2020",
                time: "9:38PM",
                rating: 5,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "7-3-2020",
                time: "5:30AM",
                rating: 5,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "23-2-2020",
                time: "3:24AM",
                rating: 1,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "18-1-2020",
                time: "9:24AM",
                rating: 5,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "THẮM",
                date: "1-1-2020",
                time: "4:1AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Linh",
                date: "7-12-2019",
                time: "1:46AM",
                rating: 4,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "22-11-2019",
                time: "4:39AM",
                rating: 5,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "2-9-2019",
                time: "8:28AM",
                rating: 1,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "1-7-2019",
                time: "10:3AM",
                rating: 5,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Xuân Bắc",
                date: "30-3-2019",
                time: "2:1PM",
                rating: 2,
                content: "Rất tốt"
            },
            {
                reviewer: "HUYỀN",
                date: "20-1-2019",
                time: "10:52PM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "5-1-2019",
                time: "8:13PM",
                rating: 3,
                content: "Rất tốt"
            }
        ]
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
        alterOptions: [
            "64GB",
            "256GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "64GB",
            "256GB"
        ],
        oldPrices: [
            20990000,
            24990000
        ],
        currentPrices: [
            20290000,
            24290000
        ],
        ratings: 4,
        soldQuantity: 921,
        brand: "apple",
        reviews: [
            {
                reviewer: "Hồ Thị Hiên",
                date: "29-12-2021",
                time: "10:41PM",
                rating: 3,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "7-12-2021",
                time: "3:30AM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "12-11-2021",
                time: "8:11AM",
                rating: 5,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "1-11-2021",
                time: "12:45AM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "27-10-2021",
                time: "10:3PM",
                rating: 5,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "19-10-2021",
                time: "1:46AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "24-8-2021",
                time: "3:3AM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Thu",
                date: "20-7-2021",
                time: "2:41AM",
                rating: 4,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Bảo Vy",
                date: "18-7-2021",
                time: "8:45AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "HUYỀN",
                date: "16-7-2021",
                time: "9:42AM",
                rating: 2,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Hiếu",
                date: "10-7-2021",
                time: "3:25AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Thu",
                date: "1-7-2021",
                time: "9:4PM",
                rating: 5,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "HÀ",
                date: "23-6-2021",
                time: "11:50AM",
                rating: 4,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "27-5-2021",
                time: "9:32PM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "9-4-2021",
                time: "6:16PM",
                rating: 5,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "11-3-2021",
                time: "11:44PM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "8-12-2020",
                time: "11:21AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Bảo Vy",
                date: "7-12-2020",
                time: "10:47PM",
                rating: 4,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "29-11-2020",
                time: "9:12PM",
                rating: 2,
                content: "May tốt"
            },
            {
                reviewer: "Minh",
                date: "26-11-2020",
                time: "4:25PM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "3-10-2020",
                time: "5:43PM",
                rating: 3,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "23-9-2020",
                time: "5:19PM",
                rating: 3,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "29-8-2020",
                time: "12:56AM",
                rating: 2,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "22-7-2020",
                time: "1:35PM",
                rating: 1,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "3-7-2020",
                time: "7:19PM",
                rating: 3,
                content: "May tốt"
            },
            {
                reviewer: "HÀ",
                date: "28-5-2020",
                time: "8:21PM",
                rating: 3,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "6-5-2020",
                time: "10:59AM",
                rating: 2,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "30-3-2020",
                time: "8:21PM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Đức Thắng",
                date: "11-2-2020",
                time: "4:26PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "3-1-2020",
                time: "8:15AM",
                rating: 4,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Chị Trang",
                date: "20-12-2019",
                time: "10:57PM",
                rating: 2,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "31-10-2019",
                time: "10:5AM",
                rating: 3,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "19-9-2019",
                time: "10:8AM",
                rating: 4,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "15-5-2019",
                time: "9:15AM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "Hải",
                date: "30-3-2019",
                time: "7:7AM",
                rating: 2,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "9-3-2019",
                time: "2:19PM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "NgMinh",
                date: "11-2-2019",
                time: "7:46AM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "NgMinh",
                date: "11-2-2019",
                time: "4:60AM",
                rating: 3,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "7-1-2019",
                time: "9:19PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "HÀ",
                date: "4-1-2019",
                time: "6:46PM",
                rating: 5,
                content: "Quá tệ sản phẩm kém chất lượng"
            }
        ]
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
        alterOptions: [
            "64GB",
            "256GB"
        ],
        ram: [
            "4GB"
        ],
        rom: [
            "64GB",
            "256GB"
        ],
        oldPrices: [
            19990000,
            23990000
        ],
        currentPrices: [
            17790000,
            20790000
        ],
        ratings: 4,
        soldQuantity: 124,
        brand: "apple",
        reviews: [
            {
                reviewer: "Hà Lợi",
                date: "27-12-2021",
                time: "3:13PM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Bảo Vy",
                date: "17-12-2021",
                time: "5:8PM",
                rating: 1,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Bảo Vy",
                date: "6-12-2021",
                time: "1:33AM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Hà Lợi",
                date: "4-12-2021",
                time: "12:52AM",
                rating: 1,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Hiếu",
                date: "18-8-2021",
                time: "5:58AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "11-4-2021",
                time: "3:43PM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "25-12-2020",
                time: "2:38PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "HUYỀN",
                date: "23-12-2020",
                time: "9:25AM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "23-11-2020",
                time: "3:19AM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "12-11-2020",
                time: "4:12PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "8-10-2020",
                time: "1:19AM",
                rating: 3,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "27-9-2020",
                time: "3:60PM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "25-9-2020",
                time: "9:17AM",
                rating: 2,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Bảo Vy",
                date: "10-8-2020",
                time: "2:12PM",
                rating: 5,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Xuân Bắc",
                date: "5-5-2020",
                time: "6:46AM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Long",
                date: "15-4-2020",
                time: "10:22PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "28-3-2020",
                time: "12:44AM",
                rating: 4,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "26-3-2020",
                time: "8:7PM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "20-3-2020",
                time: "8:8AM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Hà Lợi",
                date: "6-3-2020",
                time: "8:8PM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "THẮM",
                date: "13-2-2020",
                time: "11:20AM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "4-2-2020",
                time: "3:51AM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "26-12-2019",
                time: "6:36PM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Đức Thắng",
                date: "16-12-2019",
                time: "10:13AM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Đức Thắng",
                date: "20-10-2019",
                time: "8:38AM",
                rating: 1,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "7-10-2019",
                time: "3:18PM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "4-10-2019",
                time: "5:11AM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Long",
                date: "29-9-2019",
                time: "5:57PM",
                rating: 4,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Long",
                date: "25-9-2019",
                time: "5:28PM",
                rating: 1,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Thu",
                date: "16-9-2019",
                time: "5:36PM",
                rating: 2,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "HÀ",
                date: "29-8-2019",
                time: "2:33AM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "27-8-2019",
                time: "2:58AM",
                rating: 2,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "14-7-2019",
                time: "10:14PM",
                rating: 3,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Chị Trang",
                date: "4-7-2019",
                time: "12:56PM",
                rating: 3,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "28-6-2019",
                time: "3:45PM",
                rating: 1,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "26-6-2019",
                time: "1:57AM",
                rating: 3,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "17-6-2019",
                time: "10:43PM",
                rating: 3,
                content: "May tốt"
            },
            {
                reviewer: "HÀ",
                date: "12-6-2019",
                time: "2:35AM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "31-5-2019",
                time: "12:28PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "11-5-2019",
                time: "1:28AM",
                rating: 4,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "3-5-2019",
                time: "3:23AM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "23-4-2019",
                time: "8:55PM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "21-4-2019",
                time: "12:28PM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Bảo Vy",
                date: "25-3-2019",
                time: "2:4PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "14-3-2019",
                time: "10:19AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Hà Lợi",
                date: "30-2-2019",
                time: "4:11PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Xuân Bắc",
                date: "19-2-2019",
                time: "10:32PM",
                rating: 4,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "9-2-2019",
                time: "3:22AM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            }
        ]
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
        alterOptions: [
            "64GB",
            "256GB"
        ],
        ram: [
            "3GB"
        ],
        rom: [
            "64GB",
            "256GB"
        ],
        oldPrices: [
            10590000,
            15990000
        ],
        currentPrices: [
            9990000,
            13990000
        ],
        ratings: 4,
        soldQuantity: 655,
        brand: "apple",
        reviews: [
            {
                reviewer: "Bùi Thị Vương",
                date: "31-12-2021",
                time: "7:38PM",
                rating: 3,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "21-12-2021",
                time: "7:7PM",
                rating: 5,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "12-12-2021",
                time: "2:13AM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "10-12-2021",
                time: "3:30AM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "HUYỀN",
                date: "28-9-2021",
                time: "1:8PM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "13-9-2021",
                time: "6:24PM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "11-7-2021",
                time: "7:28AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Long",
                date: "26-6-2021",
                time: "5:36PM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "CHI",
                date: "12-4-2021",
                time: "7:1AM",
                rating: 3,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "11-4-2021",
                time: "3:21AM",
                rating: 3,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "17-3-2021",
                time: "11:29AM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "8-3-2021",
                time: "9:23PM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "10-2-2021",
                time: "6:26AM",
                rating: 5,
                content: "Uy tín"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "5-2-2021",
                time: "2:20AM",
                rating: 4,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Minh",
                date: "17-12-2020",
                time: "1:26PM",
                rating: 2,
                content: "May tốt"
            },
            {
                reviewer: "Hà Lợi",
                date: "1-12-2020",
                time: "6:27AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "21-11-2020",
                time: "6:19AM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "CHI",
                date: "20-10-2020",
                time: "5:42PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "HÀ",
                date: "19-10-2020",
                time: "12:55AM",
                rating: 5,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Hiếu",
                date: "8-10-2020",
                time: "7:26AM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "31-9-2020",
                time: "1:14PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "2-9-2020",
                time: "2:60PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "8-8-2020",
                time: "11:1PM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Dai Thu",
                date: "23-7-2020",
                time: "2:16PM",
                rating: 1,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "11-7-2020",
                time: "10:46AM",
                rating: 4,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Thu",
                date: "4-6-2020",
                time: "6:21AM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hải",
                date: "8-5-2020",
                time: "5:20PM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "18-4-2020",
                time: "3:51AM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "THẮM",
                date: "14-4-2020",
                time: "2:43PM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "CHI",
                date: "12-4-2020",
                time: "8:60PM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "7-4-2020",
                time: "12:18PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "17-2-2020",
                time: "2:3PM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "HUYỀN",
                date: "15-2-2020",
                time: "4:24AM",
                rating: 4,
                content: "May tốt"
            },
            {
                reviewer: "Hiếu",
                date: "3-2-2020",
                time: "7:9PM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "17-1-2020",
                time: "11:27PM",
                rating: 2,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Minh",
                date: "2-1-2020",
                time: "7:53PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "11-12-2019",
                time: "8:6PM",
                rating: 5,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "THẮM",
                date: "28-11-2019",
                time: "1:18AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Thu",
                date: "20-11-2019",
                time: "6:6PM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "THẮM",
                date: "6-11-2019",
                time: "2:48PM",
                rating: 5,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "1-11-2019",
                time: "8:28PM",
                rating: 5,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "18-10-2019",
                time: "8:11PM",
                rating: 4,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "7-10-2019",
                time: "6:38PM",
                rating: 4,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "22-8-2019",
                time: "1:19PM",
                rating: 3,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "1-8-2019",
                time: "12:20PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "18-7-2019",
                time: "4:20PM",
                rating: 3,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "31-6-2019",
                time: "3:29PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hải",
                date: "18-6-2019",
                time: "1:18PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "THẢO",
                date: "5-6-2019",
                time: "9:14PM",
                rating: 5,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "23-5-2019",
                time: "10:51PM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "HUYỀN",
                date: "22-5-2019",
                time: "12:37AM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Linh",
                date: "22-5-2019",
                time: "2:55PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "19-5-2019",
                time: "10:2PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "7-5-2019",
                time: "3:15PM",
                rating: 3,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "13-4-2019",
                time: "12:28AM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "21-3-2019",
                time: "3:17AM",
                rating: 3,
                content: "Rất tốt"
            },
            {
                reviewer: "NgMinh",
                date: "14-3-2019",
                time: "2:52AM",
                rating: 3,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "3-3-2019",
                time: "7:21AM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "25-1-2019",
                time: "12:3PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "HÀ",
                date: "11-1-2019",
                time: "6:31AM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            }
        ]
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
        alterOptions: [
            "128GB",
            "256GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "128GB",
            "256GB"
        ],
        oldPrices: [
            23990000,
            26590000
        ],
        currentPrices: [
            20990000,
            24990000
        ],
        ratings: 5,
        soldQuantity: 236,
        brand: "samsung",
        reviews: [
            {
                reviewer: "NgMinh",
                date: "25-12-2021",
                time: "6:60PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Long",
                date: "17-12-2021",
                time: "1:44PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "29-11-2021",
                time: "1:39PM",
                rating: 2,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "13-11-2021",
                time: "9:19AM",
                rating: 3,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "15-10-2021",
                time: "2:39PM",
                rating: 4,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Long",
                date: "15-9-2021",
                time: "1:25PM",
                rating: 2,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "14-9-2021",
                time: "11:50PM",
                rating: 4,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "13-9-2021",
                time: "2:60PM",
                rating: 2,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "CHI",
                date: "8-9-2021",
                time: "12:37AM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Minh",
                date: "4-9-2021",
                time: "3:20PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "28-8-2021",
                time: "8:6AM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Hà Lợi",
                date: "11-8-2021",
                time: "9:52PM",
                rating: 5,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "28-7-2021",
                time: "8:31PM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "1-7-2021",
                time: "9:55PM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "29-5-2021",
                time: "7:24PM",
                rating: 3,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "22-4-2021",
                time: "4:5AM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "16-4-2021",
                time: "7:18PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "29-3-2021",
                time: "3:20AM",
                rating: 1,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "19-3-2021",
                time: "12:32PM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "30-2-2021",
                time: "2:7AM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Minh",
                date: "30-1-2021",
                time: "4:27PM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "25-1-2021",
                time: "4:17PM",
                rating: 2,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Long",
                date: "3-1-2021",
                time: "4:39PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "2-1-2021",
                time: "1:35PM",
                rating: 4,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Nguyễn Anh",
                date: "28-12-2020",
                time: "10:9PM",
                rating: 4,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "14-12-2020",
                time: "7:8PM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "29-11-2020",
                time: "9:35PM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Minh",
                date: "28-11-2020",
                time: "7:10AM",
                rating: 4,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Thu",
                date: "15-11-2020",
                time: "8:5AM",
                rating: 3,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "11-11-2020",
                time: "1:33PM",
                rating: 3,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Thu",
                date: "25-9-2020",
                time: "4:33AM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "2-6-2020",
                time: "10:45PM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "25-5-2020",
                time: "9:14AM",
                rating: 3,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "2-5-2020",
                time: "3:56AM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "1-4-2020",
                time: "7:23AM",
                rating: 3,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Xuân Bắc",
                date: "31-2-2020",
                time: "4:38PM",
                rating: 4,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Dai Thu",
                date: "23-1-2020",
                time: "3:46PM",
                rating: 2,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Thu",
                date: "2-12-2019",
                time: "10:55AM",
                rating: 3,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Dai Thu",
                date: "7-10-2019",
                time: "10:34AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "HUYỀN",
                date: "20-9-2019",
                time: "12:15PM",
                rating: 4,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "17-9-2019",
                time: "10:36AM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "24-7-2019",
                time: "4:12PM",
                rating: 3,
                content: "Rất tốt"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "7-7-2019",
                time: "6:36AM",
                rating: 5,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "CHI",
                date: "7-6-2019",
                time: "6:58PM",
                rating: 1,
                content: "Rất tốt"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "22-5-2019",
                time: "6:12AM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "25-4-2019",
                time: "8:9AM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "6-4-2019",
                time: "5:46PM",
                rating: 3,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "5-3-2019",
                time: "6:19PM",
                rating: 3,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "19-2-2019",
                time: "11:41PM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            }
        ]
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
        alterOptions: [
            "32GB",
            "64GB"
        ],
        ram: [
            "3GB"
        ],
        rom: [
            "32GB",
            "64GB"
        ],
        oldPrices: [
            4890000,
            6190000
        ],
        currentPrices: [
            4490000,
            5690000
        ],
        ratings: 3,
        soldQuantity: 149,
        brand: "samsung",
        reviews: [
            {
                reviewer: "CHI",
                date: "30-11-2021",
                time: "12:36PM",
                rating: 5,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Hà Lợi",
                date: "9-11-2021",
                time: "2:28PM",
                rating: 3,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "6-10-2021",
                time: "11:35PM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "NgMinh",
                date: "1-9-2021",
                time: "9:43PM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "15-8-2021",
                time: "6:18PM",
                rating: 3,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "25-5-2021",
                time: "9:8AM",
                rating: 3,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Xuân Bắc",
                date: "4-5-2021",
                time: "2:26AM",
                rating: 2,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Thu",
                date: "5-4-2021",
                time: "5:59PM",
                rating: 3,
                content: "May tốt"
            },
            {
                reviewer: "Minh",
                date: "25-2-2021",
                time: "1:15PM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "THẮM",
                date: "27-1-2021",
                time: "11:32PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "24-12-2020",
                time: "10:24AM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Bảo Vy",
                date: "2-11-2020",
                time: "2:1PM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "CHI",
                date: "23-10-2020",
                time: "12:54PM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "HUYỀN",
                date: "4-9-2020",
                time: "10:37AM",
                rating: 5,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Dai Thu",
                date: "26-7-2020",
                time: "1:23PM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "24-4-2020",
                time: "11:38AM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "29-1-2020",
                time: "8:19PM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Xuân Bắc",
                date: "17-1-2020",
                time: "1:58AM",
                rating: 5,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "THẢO",
                date: "12-1-2020",
                time: "11:42PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "CHI",
                date: "5-1-2020",
                time: "12:57AM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "21-11-2019",
                time: "1:37PM",
                rating: 2,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "5-7-2019",
                time: "8:5AM",
                rating: 3,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Chị Trang",
                date: "15-4-2019",
                time: "7:42PM",
                rating: 3,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Hà Lợi",
                date: "5-4-2019",
                time: "8:46PM",
                rating: 3,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Bảo Vy",
                date: "29-2-2019",
                time: "2:16PM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "CHI",
                date: "12-2-2019",
                time: "9:39PM",
                rating: 2,
                content: "Rất tốt"
            }
        ]
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
        alterOptions: [
            "128GB",
            "256GB"
        ],
        ram: [
            "6GB"
        ],
        rom: [
            "128GB",
            "256GB"
        ],
        oldPrices: [
            13990000,
            15590000
        ],
        currentPrices: [
            12990000,
            14190000
        ],
        ratings: 4,
        soldQuantity: 145,
        brand: "huawei",
        reviews: [
            {
                reviewer: "Nguyễn Như Thành",
                date: "24-12-2021",
                time: "6:25PM",
                rating: 3,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Linh",
                date: "7-12-2021",
                time: "6:19AM",
                rating: 4,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Dai Thu",
                date: "19-11-2021",
                time: "6:43PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "14-11-2021",
                time: "5:47PM",
                rating: 5,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "31-10-2021",
                time: "6:28AM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "26-9-2021",
                time: "12:43AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "14-9-2021",
                time: "1:36AM",
                rating: 2,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Thu",
                date: "11-9-2021",
                time: "9:41AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "17-8-2021",
                time: "12:29PM",
                rating: 3,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "THẢO",
                date: "1-8-2021",
                time: "10:50AM",
                rating: 3,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "8-6-2021",
                time: "7:32PM",
                rating: 3,
                content: "May tốt"
            },
            {
                reviewer: "Đức Thắng",
                date: "11-5-2021",
                time: "7:12AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Chị Trang",
                date: "5-5-2021",
                time: "6:4PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "8-4-2021",
                time: "12:43AM",
                rating: 2,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Hiếu",
                date: "31-2-2021",
                time: "9:32AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "CHI",
                date: "8-2-2021",
                time: "3:2PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "17-1-2021",
                time: "2:22PM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "30-11-2020",
                time: "7:17AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "HUYỀN",
                date: "28-11-2020",
                time: "5:30AM",
                rating: 4,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Bảo Vy",
                date: "7-11-2020",
                time: "1:52AM",
                rating: 1,
                content: "Rất tốt"
            },
            {
                reviewer: "Minh",
                date: "2-11-2020",
                time: "12:9PM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "17-10-2020",
                time: "7:35AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "31-7-2020",
                time: "8:59PM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Võ Thị Liên",
                date: "29-7-2020",
                time: "1:31AM",
                rating: 2,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "NgMinh",
                date: "25-7-2020",
                time: "4:52AM",
                rating: 4,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Linh",
                date: "4-7-2020",
                time: "7:8PM",
                rating: 3,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Hiếu",
                date: "3-7-2020",
                time: "12:24PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Linh",
                date: "16-3-2020",
                time: "2:46AM",
                rating: 3,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "12-3-2020",
                time: "9:34AM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Nguyễn Anh",
                date: "7-3-2020",
                time: "4:21AM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "31-12-2019",
                time: "5:28AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "2-12-2019",
                time: "4:3PM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Hà Lợi",
                date: "9-11-2019",
                time: "6:20PM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Bảo Vy",
                date: "5-11-2019",
                time: "2:4AM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "3-11-2019",
                time: "4:2AM",
                rating: 5,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Thu",
                date: "27-10-2019",
                time: "8:31AM",
                rating: 3,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "11-10-2019",
                time: "2:4PM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Linh",
                date: "2-10-2019",
                time: "6:43PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "24-9-2019",
                time: "12:28PM",
                rating: 4,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "23-9-2019",
                time: "5:3PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Xuân Bắc",
                date: "1-9-2019",
                time: "5:38PM",
                rating: 5,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Hải",
                date: "21-8-2019",
                time: "2:51AM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "7-7-2019",
                time: "6:49AM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "3-7-2019",
                time: "6:44PM",
                rating: 1,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "29-6-2019",
                time: "10:55AM",
                rating: 5,
                content: "May tốt"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "14-6-2019",
                time: "6:32PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "CHI",
                date: "16-5-2019",
                time: "5:35PM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "4-5-2019",
                time: "9:2AM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "3-5-2019",
                time: "6:45PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "2-5-2019",
                time: "8:60AM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Thu",
                date: "23-3-2019",
                time: "6:17AM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Linh",
                date: "16-3-2019",
                time: "12:5AM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Hà Lợi",
                date: "20-1-2019",
                time: "9:37AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "17-1-2019",
                time: "4:44AM",
                rating: 1,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Chị Trang",
                date: "15-1-2019",
                time: "9:7PM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "10-1-2019",
                time: "2:29PM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "9-1-2019",
                time: "1:44AM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            }
        ]
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
        alterOptions: [
            "128GB",
            "256GB"
        ],
        ram: [
            "4GB"
        ],
        rom: [
            "128GB",
            "256GB"
        ],
        oldPrices: [
            7790000,
            8900000
        ],
        currentPrices: [
            6790000,
            7590000
        ],
        ratings: 5,
        soldQuantity: 217,
        brand: "huawei",
        reviews: [
            {
                reviewer: "Dai Thu",
                date: "25-10-2021",
                time: "9:44PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "HÀ",
                date: "29-9-2021",
                time: "5:10AM",
                rating: 4,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Linh",
                date: "21-9-2021",
                time: "5:1PM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "10-9-2021",
                time: "4:10PM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "3-9-2021",
                time: "11:60AM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Bảo Vy",
                date: "1-9-2021",
                time: "9:3PM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Hải",
                date: "25-7-2021",
                time: "2:26PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Chị Trang",
                date: "26-3-2021",
                time: "7:10AM",
                rating: 1,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "HUYỀN",
                date: "8-3-2021",
                time: "3:27PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Minh",
                date: "15-2-2021",
                time: "8:17AM",
                rating: 5,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "THẮM",
                date: "21-1-2021",
                time: "5:25AM",
                rating: 5,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "18-1-2021",
                time: "4:49PM",
                rating: 5,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Bảo Vy",
                date: "3-1-2021",
                time: "7:51AM",
                rating: 3,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "9-12-2020",
                time: "11:42PM",
                rating: 3,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "THẢO",
                date: "29-11-2020",
                time: "6:43PM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "22-8-2020",
                time: "9:5AM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "7-7-2020",
                time: "6:50PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "HUYỀN",
                date: "27-6-2020",
                time: "9:47PM",
                rating: 3,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "25-6-2020",
                time: "6:20AM",
                rating: 5,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "14-6-2020",
                time: "9:41AM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Linh",
                date: "7-6-2020",
                time: "9:8AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "30-4-2020",
                time: "11:55AM",
                rating: 3,
                content: "May tốt"
            },
            {
                reviewer: "Long",
                date: "9-4-2020",
                time: "2:10AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "HÀ",
                date: "8-4-2020",
                time: "10:48AM",
                rating: 4,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "24-3-2020",
                time: "10:36AM",
                rating: 3,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "1-3-2020",
                time: "1:35AM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Hải",
                date: "22-2-2020",
                time: "2:3AM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Hà Lợi",
                date: "10-2-2020",
                time: "5:2PM",
                rating: 4,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "6-12-2019",
                time: "2:19PM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "11-11-2019",
                time: "12:52AM",
                rating: 1,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "10-11-2019",
                time: "4:20AM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Chị Trang",
                date: "3-11-2019",
                time: "8:50AM",
                rating: 5,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Chị Trang",
                date: "16-10-2019",
                time: "2:48PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "5-9-2019",
                time: "5:27AM",
                rating: 5,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "CHI",
                date: "16-8-2019",
                time: "5:9PM",
                rating: 3,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Long",
                date: "9-8-2019",
                time: "8:2AM",
                rating: 5,
                content: "May tốt"
            },
            {
                reviewer: "Bảo Vy",
                date: "6-8-2019",
                time: "4:7AM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Hải",
                date: "1-8-2019",
                time: "7:21PM",
                rating: 5,
                content: "Uy tín"
            },
            {
                reviewer: "Hải",
                date: "1-8-2019",
                time: "4:38PM",
                rating: 4,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "HUYỀN",
                date: "31-5-2019",
                time: "8:48PM",
                rating: 5,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Linh",
                date: "20-5-2019",
                time: "11:46PM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Hà Lợi",
                date: "10-5-2019",
                time: "5:33AM",
                rating: 1,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Chị Trang",
                date: "21-4-2019",
                time: "5:58AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Minh",
                date: "1-4-2019",
                time: "8:35AM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Minh",
                date: "25-3-2019",
                time: "8:54PM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "HÀ",
                date: "31-2-2019",
                time: "3:24AM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "18-2-2019",
                time: "9:25PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Hải",
                date: "4-2-2019",
                time: "12:14PM",
                rating: 1,
                content: "San pham nay rat tot"
            }
        ]
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
        alterOptions: [
            "64GB"
        ],
        ram: [
            "4GB"
        ],
        rom: [
            "64GB"
        ],
        oldPrices: [
            8190000
        ],
        currentPrices: [
            7390000
        ],
        ratings: 3,
        soldQuantity: 62,
        brand: "lenovo",
        reviews: [
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "31-12-2021",
                time: "1:47PM",
                rating: 3,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "9-12-2021",
                time: "9:44PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hải",
                date: "5-11-2021",
                time: "8:56PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Hải",
                date: "31-10-2021",
                time: "4:60AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Linh",
                date: "20-10-2021",
                time: "8:29PM",
                rating: 2,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "3-10-2021",
                time: "4:33AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Đức Thắng",
                date: "29-8-2021",
                time: "2:56PM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "NgMinh",
                date: "2-8-2021",
                time: "4:25AM",
                rating: 1,
                content: "May tốt"
            },
            {
                reviewer: "Minh",
                date: "23-6-2021",
                time: "11:45AM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "6-4-2021",
                time: "6:59PM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "12-2-2021",
                time: "9:52AM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Thu",
                date: "4-2-2021",
                time: "4:28PM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "3-2-2021",
                time: "1:9PM",
                rating: 3,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "2-2-2021",
                time: "5:48PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "THẢO",
                date: "23-1-2021",
                time: "5:34PM",
                rating: 1,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "6-1-2021",
                time: "4:31AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "1-12-2020",
                time: "3:20PM",
                rating: 2,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "31-11-2020",
                time: "11:53AM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "17-11-2020",
                time: "12:25AM",
                rating: 3,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "7-10-2020",
                time: "7:37PM",
                rating: 2,
                content: "Rất tốt"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "18-9-2020",
                time: "3:34PM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "12-9-2020",
                time: "9:28PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Dai Thu",
                date: "28-8-2020",
                time: "3:3PM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "NgMinh",
                date: "18-7-2020",
                time: "7:32PM",
                rating: 5,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Hải",
                date: "19-6-2020",
                time: "1:44PM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "27-4-2020",
                time: "9:35AM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Thu",
                date: "27-4-2020",
                time: "2:45PM",
                rating: 5,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Đức Thắng",
                date: "25-4-2020",
                time: "12:58AM",
                rating: 2,
                content: "Rất tốt"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "24-4-2020",
                time: "6:12AM",
                rating: 2,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "19-4-2020",
                time: "11:22PM",
                rating: 4,
                content: "Rất tốt"
            },
            {
                reviewer: "Hiếu",
                date: "5-2-2020",
                time: "8:55AM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Thu",
                date: "17-1-2020",
                time: "8:30AM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "17-12-2019",
                time: "7:24PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "9-12-2019",
                time: "1:30PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "26-10-2019",
                time: "2:7PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "17-10-2019",
                time: "11:35AM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "NgMinh",
                date: "1-10-2019",
                time: "4:51AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "30-8-2019",
                time: "7:5AM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "9-8-2019",
                time: "11:53PM",
                rating: 3,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "14-6-2019",
                time: "10:7PM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "7-6-2019",
                time: "9:59PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Xuân Bắc",
                date: "2-6-2019",
                time: "5:34PM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Đức Thắng",
                date: "29-5-2019",
                time: "8:54PM",
                rating: 1,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "THẢO",
                date: "21-4-2019",
                time: "10:29PM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "13-4-2019",
                time: "3:44PM",
                rating: 4,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "HUYỀN",
                date: "6-4-2019",
                time: "8:20PM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "CHI",
                date: "6-4-2019",
                time: "8:7PM",
                rating: 4,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "25-3-2019",
                time: "8:10PM",
                rating: 2,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Dai Thu",
                date: "20-2-2019",
                time: "7:1AM",
                rating: 1,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "17-2-2019",
                time: "4:28PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "6-2-2019",
                time: "3:51AM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "6-2-2019",
                time: "3:5PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Hải",
                date: "6-1-2019",
                time: "11:19PM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            }
        ]
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
        alterOptions: [
            "64GB"
        ],
        ram: [
            "4GB"
        ],
        rom: [
            "64GB"
        ],
        oldPrices: [
            14590000
        ],
        currentPrices: [
            13590000
        ],
        ratings: 5,
        soldQuantity: 478,
        brand: "apple",
        reviews: [
            {
                reviewer: "Huỳnh Phương Bình",
                date: "29-12-2021",
                time: "3:55AM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Long",
                date: "28-11-2021",
                time: "5:30AM",
                rating: 4,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Bảo Vy",
                date: "6-11-2021",
                time: "2:44AM",
                rating: 5,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Lương Thị Lan",
                date: "22-8-2021",
                time: "7:51PM",
                rating: 5,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Chị Trang",
                date: "24-7-2021",
                time: "9:37PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Xuân Bắc",
                date: "15-7-2021",
                time: "3:58PM",
                rating: 4,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "13-7-2021",
                time: "12:10PM",
                rating: 5,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "9-7-2021",
                time: "6:31PM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "4-7-2021",
                time: "1:32AM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "20-6-2021",
                time: "10:18AM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Dai Thu",
                date: "17-6-2021",
                time: "7:21PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "THẢO",
                date: "19-4-2021",
                time: "10:56PM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Hải",
                date: "4-4-2021",
                time: "9:26PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "8-3-2021",
                time: "5:50AM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "31-2-2021",
                time: "12:24AM",
                rating: 3,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "CHI",
                date: "20-2-2021",
                time: "12:20AM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Thu",
                date: "19-2-2021",
                time: "11:26AM",
                rating: 4,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Dai Thu",
                date: "1-1-2021",
                time: "2:7PM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "NgMinh",
                date: "3-11-2020",
                time: "10:39AM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "NgMinh",
                date: "11-9-2020",
                time: "12:51PM",
                rating: 2,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "5-9-2020",
                time: "2:16PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Minh",
                date: "14-8-2020",
                time: "12:34AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Hiếu",
                date: "28-7-2020",
                time: "7:49PM",
                rating: 4,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "THẢO",
                date: "7-7-2020",
                time: "9:43AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "30-6-2020",
                time: "4:58PM",
                rating: 5,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "THẮM",
                date: "24-6-2020",
                time: "4:35AM",
                rating: 1,
                content: "Rất tốt"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "16-3-2020",
                time: "11:15PM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "11-3-2020",
                time: "10:60PM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "1-3-2020",
                time: "12:43AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "HUYỀN",
                date: "13-1-2020",
                time: "6:9AM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "26-11-2019",
                time: "4:46PM",
                rating: 3,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "7-11-2019",
                time: "2:22AM",
                rating: 2,
                content: "Rất tốt"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "18-8-2019",
                time: "4:17AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "15-8-2019",
                time: "6:38PM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "11-8-2019",
                time: "5:43AM",
                rating: 1,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "2-6-2019",
                time: "8:42PM",
                rating: 2,
                content: "Rất tốt"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "2-6-2019",
                time: "2:36PM",
                rating: 2,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "30-5-2019",
                time: "9:52PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "5-5-2019",
                time: "4:20PM",
                rating: 3,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "HUYỀN",
                date: "18-4-2019",
                time: "9:44PM",
                rating: 2,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "15-4-2019",
                time: "3:42AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "5-2-2019",
                time: "11:36AM",
                rating: 4,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "23-1-2019",
                time: "10:48PM",
                rating: 2,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "21-1-2019",
                time: "11:6PM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "4-1-2019",
                time: "7:47AM",
                rating: 3,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            }
        ]
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
            "Trọng lượng 1,4kg"
        ],
        alterOptions: [
            "256GB",
            "512GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "256GB",
            "512GB"
        ],
        oldPrices: [
            35590000,
            41990000
        ],
        currentPrices: [
            34890000,
            40290000
        ],
        ratings: 4,
        soldQuantity: 45,
        brand: "apple",
        reviews: [
            {
                reviewer: "Hải",
                date: "20-11-2021",
                time: "11:57AM",
                rating: 2,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "20-10-2021",
                time: "12:8PM",
                rating: 2,
                content: "Rất tốt"
            },
            {
                reviewer: "Minh",
                date: "23-7-2021",
                time: "5:10PM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "8-4-2021",
                time: "5:48PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "26-3-2021",
                time: "5:40AM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Đức Thắng",
                date: "16-2-2021",
                time: "9:20AM",
                rating: 4,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "1-1-2021",
                time: "6:1PM",
                rating: 5,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "2-11-2020",
                time: "11:15AM",
                rating: 1,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "17-8-2020",
                time: "10:13PM",
                rating: 5,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "14-6-2020",
                time: "6:40AM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "23-5-2020",
                time: "11:56AM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "15-5-2020",
                time: "4:24AM",
                rating: 1,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "27-1-2020",
                time: "2:10AM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "26-7-2019",
                time: "6:29AM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "Hà Lợi",
                date: "10-7-2019",
                time: "9:46AM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Thu",
                date: "29-5-2019",
                time: "10:56AM",
                rating: 2,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Linh",
                date: "26-5-2019",
                time: "3:55PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "29-4-2019",
                time: "2:23PM",
                rating: 2,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "11-4-2019",
                time: "3:21AM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "26-1-2019",
                time: "3:37AM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            }
        ]
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
            "Trọng lượng 2,2kg"
        ],
        alterOptions: [
            "512GB"
        ],
        ram: [
            "32GB"
        ],
        rom: [
            "512GB"
        ],
        oldPrices: [
            98990000
        ],
        currentPrices: [
            90990000
        ],
        ratings: 5,
        soldQuantity: 136,
        brand: "apple",
        reviews: [
            {
                reviewer: "Nông Đức Mạnh",
                date: "27-12-2021",
                time: "8:29AM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "15-11-2021",
                time: "8:45PM",
                rating: 2,
                content: "Rất tốt"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "6-8-2021",
                time: "7:11PM",
                rating: 5,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "7-7-2021",
                time: "9:22PM",
                rating: 4,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "18-5-2021",
                time: "9:20PM",
                rating: 3,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "2-5-2021",
                time: "11:31PM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "HÀ",
                date: "26-2-2021",
                time: "1:51AM",
                rating: 2,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Linh",
                date: "2-2-2021",
                time: "2:34PM",
                rating: 5,
                content: "Uy tín"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "14-1-2021",
                time: "7:44PM",
                rating: 3,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "13-1-2021",
                time: "3:52PM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "14-12-2020",
                time: "9:20PM",
                rating: 3,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "26-11-2020",
                time: "1:3AM",
                rating: 3,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "24-10-2020",
                time: "9:39AM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "19-10-2020",
                time: "5:43PM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "NgMinh",
                date: "28-8-2020",
                time: "7:38PM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "27-8-2020",
                time: "12:55AM",
                rating: 1,
                content: "Rất tốt"
            },
            {
                reviewer: "HUYỀN",
                date: "23-8-2020",
                time: "8:51PM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "28-6-2020",
                time: "7:15PM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "16-6-2020",
                time: "9:42AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Hà Lợi",
                date: "4-6-2020",
                time: "11:60AM",
                rating: 3,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "HÀ",
                date: "27-5-2020",
                time: "10:50PM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "9-5-2020",
                time: "6:41AM",
                rating: 2,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "12-4-2020",
                time: "11:30PM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "THẮM",
                date: "22-2-2020",
                time: "7:60AM",
                rating: 2,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Thu",
                date: "1-2-2020",
                time: "1:58PM",
                rating: 4,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "23-1-2020",
                time: "3:19PM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "6-1-2020",
                time: "9:23PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Hà Lợi",
                date: "1-1-2020",
                time: "2:57PM",
                rating: 4,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "13-12-2019",
                time: "5:29AM",
                rating: 5,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Xuân Bắc",
                date: "10-7-2019",
                time: "11:29PM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "17-6-2019",
                time: "6:49PM",
                rating: 4,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "4-6-2019",
                time: "5:48PM",
                rating: 3,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Bảo Vy",
                date: "23-3-2019",
                time: "5:17AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "16-2-2019",
                time: "7:51PM",
                rating: 1,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Đức Thắng",
                date: "15-1-2019",
                time: "10:52PM",
                rating: 2,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "12-1-2019",
                time: "9:38PM",
                rating: 3,
                content: "Rất tốt"
            }
        ]
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
            "Trọng lượng 1,6kg"
        ],
        alterOptions: [
            "512GB"
        ],
        ram: [
            "32GB"
        ],
        rom: [
            "512GB"
        ],
        oldPrices: [
            76900000
        ],
        currentPrices: [
            72900000
        ],
        ratings: 4,
        soldQuantity: 512,
        brand: "apple",
        reviews: [
            {
                reviewer: "CHI",
                date: "31-11-2021",
                time: "1:4AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Bảo Vy",
                date: "25-11-2021",
                time: "6:44AM",
                rating: 4,
                content: "May tốt"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "1-11-2021",
                time: "3:28PM",
                rating: 4,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "7-10-2021",
                time: "5:43PM",
                rating: 1,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Đức Thắng",
                date: "4-10-2021",
                time: "11:29PM",
                rating: 2,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "13-9-2021",
                time: "6:18AM",
                rating: 5,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "13-7-2021",
                time: "11:15AM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hải",
                date: "9-7-2021",
                time: "11:22AM",
                rating: 2,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Thu",
                date: "31-3-2021",
                time: "9:9PM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Linh",
                date: "28-3-2021",
                time: "5:16AM",
                rating: 5,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "10-2-2021",
                time: "6:55PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "CHI",
                date: "17-12-2020",
                time: "3:9PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hà Lợi",
                date: "4-12-2020",
                time: "1:48PM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "31-11-2020",
                time: "3:35PM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Dai Thu",
                date: "11-11-2020",
                time: "3:60AM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "27-10-2020",
                time: "10:33AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "22-10-2020",
                time: "6:27PM",
                rating: 4,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "THẮM",
                date: "7-10-2020",
                time: "12:45AM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "NgMinh",
                date: "5-9-2020",
                time: "2:2AM",
                rating: 4,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "22-7-2020",
                time: "8:5AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Hải",
                date: "7-7-2020",
                time: "6:35AM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Hiếu",
                date: "26-6-2020",
                time: "10:48PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "19-6-2020",
                time: "5:10AM",
                rating: 4,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Minh",
                date: "10-5-2020",
                time: "5:35PM",
                rating: 1,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Dai Thu",
                date: "30-4-2020",
                time: "9:40AM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Đức Thắng",
                date: "29-3-2020",
                time: "10:53AM",
                rating: 4,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Bảo Vy",
                date: "19-3-2020",
                time: "6:33PM",
                rating: 4,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Hải",
                date: "14-3-2020",
                time: "5:39AM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Hải",
                date: "8-3-2020",
                time: "12:3AM",
                rating: 5,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "27-2-2020",
                time: "10:31PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "2-2-2020",
                time: "10:25AM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "3-1-2020",
                time: "8:57AM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "2-11-2019",
                time: "12:44PM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "25-10-2019",
                time: "2:46AM",
                rating: 4,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "19-10-2019",
                time: "2:7AM",
                rating: 4,
                content: "May tốt"
            },
            {
                reviewer: "NgMinh",
                date: "2-10-2019",
                time: "9:21PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "31-8-2019",
                time: "4:17PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "29-8-2019",
                time: "10:10PM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "10-8-2019",
                time: "1:47PM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "20-5-2019",
                time: "6:43PM",
                rating: 5,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "21-4-2019",
                time: "6:4AM",
                rating: 4,
                content: "May tốt"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "28-3-2019",
                time: "10:3AM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "11-3-2019",
                time: "6:39AM",
                rating: 4,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "NgMinh",
                date: "8-3-2019",
                time: "2:49AM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "28-2-2019",
                time: "8:49AM",
                rating: 5,
                content: "Uy tín"
            },
            {
                reviewer: "Hà Lợi",
                date: "27-2-2019",
                time: "10:33PM",
                rating: 1,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "15-2-2019",
                time: "10:41PM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Minh",
                date: "12-2-2019",
                time: "1:24PM",
                rating: 5,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "3-2-2019",
                time: "1:30PM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Xuân Bắc",
                date: "25-1-2019",
                time: "4:58PM",
                rating: 3,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Lương Thị Lan",
                date: "20-1-2019",
                time: "6:58AM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hải",
                date: "14-1-2019",
                time: "2:50AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "THẢO",
                date: "8-1-2019",
                time: "1:8AM",
                rating: 1,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "5-1-2019",
                time: "3:31AM",
                rating: 2,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            }
        ]
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
            "Trọng lượng 1,4kg"
        ],
        alterOptions: [
            "256GB",
            "512GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "256GB",
            "512GB"
        ],
        oldPrices: [
            34990000,
            39990000
        ],
        currentPrices: [
            31490000,
            35290000
        ],
        ratings: 4,
        soldQuantity: 363,
        brand: "apple",
        reviews: [
            {
                reviewer: "Võ Thị Liên",
                date: "20-12-2021",
                time: "7:45AM",
                rating: 1,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Võ Thị Liên",
                date: "19-12-2021",
                time: "2:6AM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "13-12-2021",
                time: "3:43AM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "15-11-2021",
                time: "3:53AM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Long",
                date: "6-11-2021",
                time: "8:27PM",
                rating: 5,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "22-10-2021",
                time: "5:51AM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "THẢO",
                date: "17-9-2021",
                time: "11:8PM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "8-9-2021",
                time: "9:56AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "27-7-2021",
                time: "11:36AM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Bảo Vy",
                date: "7-5-2021",
                time: "3:30AM",
                rating: 5,
                content: "May tốt"
            },
            {
                reviewer: "Long",
                date: "18-4-2021",
                time: "7:24PM",
                rating: 4,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "19-3-2021",
                time: "4:24PM",
                rating: 3,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "15-2-2021",
                time: "7:34PM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "THẮM",
                date: "14-12-2020",
                time: "2:26AM",
                rating: 3,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "31-9-2020",
                time: "1:36PM",
                rating: 3,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "24-9-2020",
                time: "2:29AM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Thu",
                date: "18-9-2020",
                time: "9:2PM",
                rating: 2,
                content: "May tốt"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "5-7-2020",
                time: "9:45AM",
                rating: 3,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "5-4-2020",
                time: "6:39AM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Hải",
                date: "28-2-2020",
                time: "2:44AM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "30-1-2020",
                time: "6:49AM",
                rating: 5,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "29-1-2020",
                time: "10:37AM",
                rating: 3,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "NgMinh",
                date: "15-12-2019",
                time: "6:38AM",
                rating: 4,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "3-12-2019",
                time: "11:20PM",
                rating: 2,
                content: "Rất tốt"
            },
            {
                reviewer: "HUYỀN",
                date: "24-10-2019",
                time: "7:58AM",
                rating: 5,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "19-10-2019",
                time: "1:23AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "15-10-2019",
                time: "2:50PM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Hà Lợi",
                date: "26-9-2019",
                time: "5:45PM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "4-9-2019",
                time: "12:50PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "28-8-2019",
                time: "3:44PM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "15-7-2019",
                time: "1:3PM",
                rating: 4,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "14-7-2019",
                time: "5:52AM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "1-6-2019",
                time: "4:21AM",
                rating: 2,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "8-4-2019",
                time: "4:4AM",
                rating: 5,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Võ Thị Liên",
                date: "19-3-2019",
                time: "5:24AM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "16-2-2019",
                time: "7:8AM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            }
        ]
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
            "Trọng lượng 1,29kg"
        ],
        alterOptions: [
            "256GB",
            "512GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "256GB",
            "512GB"
        ],
        oldPrices: [
            33990000,
            37990000
        ],
        currentPrices: [
            29290000,
            33990000
        ],
        ratings: 4,
        soldQuantity: 1032,
        brand: "apple",
        reviews: [
            {
                reviewer: "Đức Thắng",
                date: "24-12-2021",
                time: "6:34AM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "10-12-2021",
                time: "5:30PM",
                rating: 2,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Bảo Vy",
                date: "19-11-2021",
                time: "4:58PM",
                rating: 5,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Chị Trang",
                date: "16-11-2021",
                time: "2:27PM",
                rating: 3,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "10-11-2021",
                time: "6:56AM",
                rating: 2,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Linh",
                date: "2-11-2021",
                time: "12:56PM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Dai Thu",
                date: "8-10-2021",
                time: "1:23PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Bảo Vy",
                date: "30-8-2021",
                time: "8:19AM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "27-8-2021",
                time: "10:48PM",
                rating: 2,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "6-8-2021",
                time: "7:13AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "4-8-2021",
                time: "2:28AM",
                rating: 3,
                content: "Rất tốt"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "31-7-2021",
                time: "3:57AM",
                rating: 2,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "30-7-2021",
                time: "1:9PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Bảo Vy",
                date: "11-5-2021",
                time: "10:30PM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "6-5-2021",
                time: "10:23AM",
                rating: 3,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Nguyễn Anh",
                date: "25-4-2021",
                time: "10:7PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "10-4-2021",
                time: "10:36PM",
                rating: 2,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "THẢO",
                date: "8-4-2021",
                time: "12:23PM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "14-2-2021",
                time: "7:36PM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "14-2-2021",
                time: "4:18PM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Hà Lợi",
                date: "13-2-2021",
                time: "1:17PM",
                rating: 5,
                content: "May tốt"
            },
            {
                reviewer: "Linh",
                date: "2-1-2021",
                time: "12:56PM",
                rating: 3,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Long",
                date: "13-12-2020",
                time: "12:10PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Linh",
                date: "18-11-2020",
                time: "8:41AM",
                rating: 2,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "11-11-2020",
                time: "12:18AM",
                rating: 2,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "5-11-2020",
                time: "8:4PM",
                rating: 4,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "15-10-2020",
                time: "9:17AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "11-10-2020",
                time: "3:41PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "26-8-2020",
                time: "9:31AM",
                rating: 3,
                content: "May tốt"
            },
            {
                reviewer: "Bảo Vy",
                date: "16-8-2020",
                time: "7:26AM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "13-8-2020",
                time: "2:10PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Xuân Bắc",
                date: "18-7-2020",
                time: "5:53PM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "16-7-2020",
                time: "9:34AM",
                rating: 4,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "1-7-2020",
                time: "7:29PM",
                rating: 5,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "9-6-2020",
                time: "11:54AM",
                rating: 2,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "6-6-2020",
                time: "8:59AM",
                rating: 4,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Chị Trang",
                date: "11-4-2020",
                time: "5:44PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "8-4-2020",
                time: "2:4AM",
                rating: 1,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Linh",
                date: "18-2-2020",
                time: "4:32PM",
                rating: 4,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "10-1-2020",
                time: "3:34PM",
                rating: 3,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "26-12-2019",
                time: "10:49PM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "18-12-2019",
                time: "9:7AM",
                rating: 5,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "28-11-2019",
                time: "7:9PM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "29-10-2019",
                time: "12:35AM",
                rating: 4,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "21-9-2019",
                time: "3:41AM",
                rating: 3,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "19-9-2019",
                time: "7:39PM",
                rating: 5,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "10-9-2019",
                time: "5:29AM",
                rating: 3,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "18-8-2019",
                time: "11:27AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "8-8-2019",
                time: "6:25AM",
                rating: 1,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "NgMinh",
                date: "20-4-2019",
                time: "5:48AM",
                rating: 5,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Hà Lợi",
                date: "8-4-2019",
                time: "12:9PM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "THẢO",
                date: "5-4-2019",
                time: "11:35AM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "20-3-2019",
                time: "6:11PM",
                rating: 2,
                content: "May tốt"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "17-3-2019",
                time: "6:23PM",
                rating: 1,
                content: "May tốt"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "29-2-2019",
                time: "4:37AM",
                rating: 3,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "23-2-2019",
                time: "6:11PM",
                rating: 2,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Minh",
                date: "14-2-2019",
                time: "11:21AM",
                rating: 3,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "29-1-2019",
                time: "9:42PM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "19-1-2019",
                time: "2:46PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            }
        ]
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
            "Trọng lượng 1,7kg"
        ],
        alterOptions: [
            "512GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "512GB"
        ],
        oldPrices: [
            17990000
        ],
        currentPrices: [
            17490000
        ],
        ratings: 5,
        soldQuantity: 96,
        brand: "asus",
        reviews: [
            {
                reviewer: "Bùi Thị Vương",
                date: "29-12-2021",
                time: "9:13PM",
                rating: 4,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "18-12-2021",
                time: "3:42PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "13-11-2021",
                time: "8:46PM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hà Lợi",
                date: "18-10-2021",
                time: "7:12PM",
                rating: 5,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "THẢO",
                date: "10-10-2021",
                time: "2:49AM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Thu",
                date: "7-10-2021",
                time: "3:51AM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "8-9-2021",
                time: "1:36PM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Hiếu",
                date: "14-8-2021",
                time: "1:25AM",
                rating: 1,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Linh",
                date: "10-8-2021",
                time: "9:10AM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "Thu",
                date: "7-8-2021",
                time: "6:57AM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "10-7-2021",
                time: "5:57AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "29-5-2021",
                time: "1:24PM",
                rating: 2,
                content: "Uy tín"
            },
            {
                reviewer: "NgMinh",
                date: "25-5-2021",
                time: "2:19PM",
                rating: 2,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "23-5-2021",
                time: "10:22AM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "8-5-2021",
                time: "1:11AM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "CHI",
                date: "16-4-2021",
                time: "1:27PM",
                rating: 4,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "25-2-2021",
                time: "10:26AM",
                rating: 1,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "16-2-2021",
                time: "12:35PM",
                rating: 1,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Linh",
                date: "31-12-2020",
                time: "8:54AM",
                rating: 4,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "10-12-2020",
                time: "7:24PM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "THẢO",
                date: "25-11-2020",
                time: "12:41AM",
                rating: 2,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "21-11-2020",
                time: "3:35PM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "8-11-2020",
                time: "10:18AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "25-10-2020",
                time: "1:49PM",
                rating: 1,
                content: "Rất tốt"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "23-8-2020",
                time: "3:3AM",
                rating: 4,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "THẢO",
                date: "25-7-2020",
                time: "7:11PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Bảo Vy",
                date: "8-7-2020",
                time: "5:9AM",
                rating: 5,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "5-7-2020",
                time: "9:40PM",
                rating: 4,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "3-7-2020",
                time: "6:21PM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "22-6-2020",
                time: "2:49AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "5-6-2020",
                time: "8:18PM",
                rating: 1,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "8-5-2020",
                time: "1:39PM",
                rating: 2,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Chị Trang",
                date: "8-4-2020",
                time: "3:1PM",
                rating: 4,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "27-3-2020",
                time: "3:42PM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Hiếu",
                date: "10-3-2020",
                time: "8:50PM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Đức Thắng",
                date: "24-2-2020",
                time: "6:42AM",
                rating: 2,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "CHI",
                date: "13-1-2020",
                time: "3:17PM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "24-12-2019",
                time: "4:56PM",
                rating: 4,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Bảo Vy",
                date: "16-11-2019",
                time: "2:35PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "6-10-2019",
                time: "6:54PM",
                rating: 5,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "6-10-2019",
                time: "3:1AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "29-9-2019",
                time: "7:42PM",
                rating: 5,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Thanh Tuyền",
                date: "12-8-2019",
                time: "9:49AM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Lương Thị Lan",
                date: "29-7-2019",
                time: "5:57AM",
                rating: 1,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "22-7-2019",
                time: "3:30PM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "18-6-2019",
                time: "9:24PM",
                rating: 4,
                content: "Rất tốt"
            },
            {
                reviewer: "Hải",
                date: "26-5-2019",
                time: "8:28PM",
                rating: 1,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Long",
                date: "20-4-2019",
                time: "3:39AM",
                rating: 3,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "25-3-2019",
                time: "8:24AM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "28-2-2019",
                time: "8:60AM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "HUYỀN",
                date: "19-2-2019",
                time: "11:26PM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Thu",
                date: "19-1-2019",
                time: "1:58PM",
                rating: 3,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            }
        ]
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
            "Trọng lượng 2,3kg"
        ],
        alterOptions: [
            "512GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "512GB"
        ],
        oldPrices: [
            19990000
        ],
        currentPrices: [
            15990000
        ],
        ratings: 5,
        soldQuantity: 141,
        brand: "asus",
        reviews: [
            {
                reviewer: "Lương Thị Lan",
                date: "20-12-2021",
                time: "7:1PM",
                rating: 5,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "15-12-2021",
                time: "12:45PM",
                rating: 2,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Long",
                date: "14-11-2021",
                time: "1:57AM",
                rating: 3,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "29-8-2021",
                time: "6:47AM",
                rating: 4,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "10-8-2021",
                time: "9:56AM",
                rating: 4,
                content: "Rất tốt"
            },
            {
                reviewer: "HUYỀN",
                date: "10-5-2021",
                time: "8:9PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "13-3-2021",
                time: "10:47PM",
                rating: 3,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "24-2-2021",
                time: "10:29AM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Hà Lợi",
                date: "14-2-2021",
                time: "12:10AM",
                rating: 2,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "12-12-2020",
                time: "7:17AM",
                rating: 1,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Hải",
                date: "10-7-2020",
                time: "4:12PM",
                rating: 2,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "12-6-2020",
                time: "10:39AM",
                rating: 4,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Linh",
                date: "22-2-2020",
                time: "8:27AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Linh",
                date: "11-12-2019",
                time: "8:42PM",
                rating: 4,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Dai Thu",
                date: "11-12-2019",
                time: "1:34PM",
                rating: 5,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "28-10-2019",
                time: "1:47AM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Vũ Thị Hồng Minh",
                date: "27-10-2019",
                time: "9:27AM",
                rating: 5,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "2-9-2019",
                time: "8:15AM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "7-6-2019",
                time: "10:41PM",
                rating: 1,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "2-6-2019",
                time: "10:13PM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hải",
                date: "23-4-2019",
                time: "10:29PM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Phan Thị Sương Sương",
                date: "17-2-2019",
                time: "4:34PM",
                rating: 1,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "11-2-2019",
                time: "2:40AM",
                rating: 3,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "6-2-2019",
                time: "2:23PM",
                rating: 4,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "11-1-2019",
                time: "7:8AM",
                rating: 2,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            }
        ]
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
            "Trọng lượng 1.14kg"
        ],
        alterOptions: [
            "512GB"
        ],
        ram: [
            "16GB"
        ],
        rom: [
            "512GB"
        ],
        oldPrices: [
            29990000
        ],
        currentPrices: [
            27990000
        ],
        ratings: 4,
        soldQuantity: 236,
        brand: "asus",
        reviews: [
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "20-7-2021",
                time: "3:31AM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Linh",
                date: "7-7-2021",
                time: "1:43AM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Thu",
                date: "4-7-2021",
                time: "2:37PM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Hà Lợi",
                date: "27-5-2021",
                time: "2:37PM",
                rating: 5,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "5-5-2021",
                time: "4:55AM",
                rating: 2,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "22-4-2021",
                time: "3:8PM",
                rating: 2,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hiếu",
                date: "26-1-2021",
                time: "10:49PM",
                rating: 1,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "18-9-2020",
                time: "8:29AM",
                rating: 3,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "18-8-2020",
                time: "7:37AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "Nguyễn Thị Tiến",
                date: "11-6-2020",
                time: "2:7AM",
                rating: 5,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "THẢO",
                date: "31-5-2020",
                time: "11:3AM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "THẮM",
                date: "9-4-2020",
                time: "11:54AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "14-12-2019",
                time: "2:4AM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "24-10-2019",
                time: "2:39AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Nguyễn Như Thành",
                date: "3-9-2019",
                time: "12:50AM",
                rating: 1,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Dai Thu",
                date: "30-8-2019",
                time: "7:47PM",
                rating: 5,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "THẢO",
                date: "22-8-2019",
                time: "7:27AM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Linh",
                date: "18-8-2019",
                time: "1:36AM",
                rating: 4,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "CHI",
                date: "28-5-2019",
                time: "7:52PM",
                rating: 3,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Nguyễn Duy Khuôn",
                date: "1-5-2019",
                time: "4:39PM",
                rating: 5,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Hiếu",
                date: "5-4-2019",
                time: "9:10AM",
                rating: 3,
                content: "Uy tín"
            },
            {
                reviewer: "NgMinh",
                date: "31-3-2019",
                time: "10:44PM",
                rating: 2,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "30-2-2019",
                time: "5:35AM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "22-2-2019",
                time: "11:16PM",
                rating: 3,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "20-2-2019",
                time: "9:29AM",
                rating: 3,
                content: "Bạn nhân viên tư vấn cài máy nhiệt tình , vui vẻ"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "29-1-2019",
                time: "10:53AM",
                rating: 3,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            }
        ]
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
            "Trọng lượng 1.25kg"
        ],
        alterOptions: [
            "512GB"
        ],
        ram: [
            "16GB"
        ],
        rom: [
            "512GB"
        ],
        oldPrices: [
            49500000
        ],
        currentPrices: [
            42090000
        ],
        ratings: 4,
        soldQuantity: 362,
        brand: "hp",
        reviews: [
            {
                reviewer: "Nguyễn Như Thành",
                date: "31-9-2021",
                time: "11:43PM",
                rating: 3,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "HÀ",
                date: "4-9-2021",
                time: "11:52PM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Hải",
                date: "19-7-2021",
                time: "6:4PM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "Hiếu",
                date: "30-4-2021",
                time: "5:13PM",
                rating: 4,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "4-2-2021",
                time: "2:51AM",
                rating: 3,
                content: "May tốt"
            },
            {
                reviewer: "THẢO",
                date: "15-12-2020",
                time: "9:26AM",
                rating: 5,
                content: "Máy thiết kế cực kỳ tinh xảo,hệ điều hành cực mượt và đặc biệt chụp hình rất đẹp và nét, tôi rất thích"
            },
            {
                reviewer: "HÀ",
                date: "12-12-2020",
                time: "9:21AM",
                rating: 2,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "9-12-2020",
                time: "10:4AM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "20-11-2020",
                time: "12:10PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Đức Thắng",
                date: "20-10-2020",
                time: "8:25PM",
                rating: 4,
                content: "May tốt"
            },
            {
                reviewer: "HÀ",
                date: "8-10-2020",
                time: "10:16AM",
                rating: 5,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "NgMinh",
                date: "3-9-2020",
                time: "5:50AM",
                rating: 4,
                content: "May tốt"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "15-6-2020",
                time: "12:49PM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "4-6-2020",
                time: "5:40AM",
                rating: 4,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Võ Thị Liên",
                date: "6-5-2020",
                time: "2:24AM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyễn Thị Nhàn",
                date: "19-4-2020",
                time: "6:54PM",
                rating: 4,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Long",
                date: "19-3-2020",
                time: "9:44AM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Hà Lợi",
                date: "23-1-2020",
                time: "2:45AM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "23-1-2020",
                time: "2:14PM",
                rating: 4,
                content: "Máy thiết kế rất tinh sảo,hệ điều hành mượt,chụp hình siêu nét"
            },
            {
                reviewer: "Long",
                date: "27-12-2019",
                time: "8:34PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Minh",
                date: "19-12-2019",
                time: "5:6PM",
                rating: 2,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "3-10-2019",
                time: "11:5AM",
                rating: 5,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "20-9-2019",
                time: "8:26PM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "4-9-2019",
                time: "9:19PM",
                rating: 1,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Linh",
                date: "14-4-2019",
                time: "7:60AM",
                rating: 3,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "THẢO",
                date: "29-3-2019",
                time: "3:54PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "12-2-2019",
                time: "1:42PM",
                rating: 1,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "30-1-2019",
                time: "2:52PM",
                rating: 1,
                content: "Uy tín"
            }
        ]
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
            "Trọng lượng 2.2kg"
        ],
        alterOptions: [
            "512GB"
        ],
        ram: [
            "8GB"
        ],
        rom: [
            "512GB"
        ],
        oldPrices: [
            26490000
        ],
        currentPrices: [
            21190000
        ],
        ratings: 4,
        soldQuantity: 284,
        brand: "acer",
        reviews: [
            {
                reviewer: "Lê Ngọc Huy",
                date: "14-12-2021",
                time: "10:40AM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "THẮM",
                date: "29-11-2021",
                time: "12:17PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Đức Thắng",
                date: "13-11-2021",
                time: "10:7AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Thu",
                date: "19-10-2021",
                time: "8:8PM",
                rating: 2,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "3-9-2021",
                time: "1:54PM",
                rating: 5,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "25-7-2021",
                time: "10:3AM",
                rating: 1,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "11-7-2021",
                time: "11:48AM",
                rating: 4,
                content: "Rất tốt"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "4-6-2021",
                time: "8:13AM",
                rating: 2,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "CHI",
                date: "29-4-2021",
                time: "10:15PM",
                rating: 2,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Chị Trang",
                date: "5-4-2021",
                time: "2:16PM",
                rating: 2,
                content: "Sản phẩm rất tốt màn hình sắc nét mượt mà pin trâu. Hệ điều hành ổn định không lỗi vặt gì."
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "4-4-2021",
                time: "5:19PM",
                rating: 2,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "25-3-2021",
                time: "8:27PM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Cao Văn Nghị",
                date: "6-3-2021",
                time: "12:13PM",
                rating: 5,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "HÀ",
                date: "15-2-2021",
                time: "11:28PM",
                rating: 1,
                content: "May tốt"
            },
            {
                reviewer: "Lê Ngọc Huy",
                date: "1-1-2021",
                time: "3:5AM",
                rating: 1,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Đức Thắng",
                date: "30-12-2020",
                time: "5:16PM",
                rating: 2,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Thu",
                date: "13-12-2020",
                time: "8:52AM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "Huỳnh Phương Bình",
                date: "8-11-2020",
                time: "7:17AM",
                rating: 5,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "14-10-2020",
                time: "7:52AM",
                rating: 3,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "8-10-2020",
                time: "12:9AM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            },
            {
                reviewer: "Minh",
                date: "29-8-2020",
                time: "9:27AM",
                rating: 2,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "25-8-2020",
                time: "4:14AM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "4-8-2020",
                time: "8:53AM",
                rating: 2,
                content: "Dùng tốt, khoảng tầm 4,5 ngày gần đây pin tụt nhanh như uống nước lã. 1p mất hết 2% pin. Mong ktv hổ trợ kiểm tra máy e ạ. Chứ kiểu này vừa hết 30 ngày đổi máy cái bị lỗi. Hơi thất vọng"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "2-8-2020",
                time: "1:52PM",
                rating: 4,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "26-7-2020",
                time: "3:59AM",
                rating: 5,
                content: "Quá tệ sản phẩm kém chất lượng"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "12-7-2020",
                time: "8:56PM",
                rating: 1,
                content: "Mới mua dk hơn tháng mà máy đơ sạc thì nóng dùng đang chụp ảnh hay vào Zalo là đơ tím hết màn hình rồi tự tắt nguồn chán kinh mấy chục cái điện thoại như cái cục gạch"
            },
            {
                reviewer: "Bùi Thị Vương",
                date: "3-7-2020",
                time: "3:34PM",
                rating: 2,
                content: "Sài rất ok nhé!"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "19-6-2020",
                time: "1:10PM",
                rating: 2,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành êm ái và chụp hình sắc nét"
            },
            {
                reviewer: "Nguyễn Anh",
                date: "8-6-2020",
                time: "10:52AM",
                rating: 5,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Mai Văn Thủy",
                date: "3-6-2020",
                time: "9:6AM",
                rating: 5,
                content: "San pham nay rat tot"
            },
            {
                reviewer: "Bảo Vy",
                date: "1-6-2020",
                time: "12:11AM",
                rating: 3,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Pham Thi Phuong Linh",
                date: "1-6-2020",
                time: "3:26AM",
                rating: 5,
                content: "Uy tín"
            },
            {
                reviewer: "Lương Thị Lan",
                date: "20-5-2020",
                time: "8:49PM",
                rating: 1,
                content: "Máy đẹp quá đi mất thôi"
            },
            {
                reviewer: "Tạ Trúc Lâm",
                date: "18-4-2020",
                time: "1:1AM",
                rating: 1,
                content: "Mua về sài chỉ lên mạng k kung hư.. Bảo hành thì hứa hẹn 5-15 ngày mà hứa cả tháng k thấy. Gọi là hẹn"
            },
            {
                reviewer: "THẮM",
                date: "15-4-2020",
                time: "8:16PM",
                rating: 4,
                content: "Máy kém chất lượng hơn 3 tháng sử dụng thì máy lỗi và không được bảo hành"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "26-3-2020",
                time: "2:20PM",
                rating: 4,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Đức Thắng",
                date: "4-3-2020",
                time: "7:4AM",
                rating: 1,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Đức Thắng",
                date: "17-2-2020",
                time: "10:38PM",
                rating: 4,
                content: "Phải nói là pin quá trâu. Dùng 1 ngày dài onscreen 8 tiếng vẫn còn 40% pin."
            },
            {
                reviewer: "Nguyễn Văn Vũ",
                date: "14-2-2020",
                time: "10:2PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Đức Thắng",
                date: "25-1-2020",
                time: "6:44PM",
                rating: 1,
                content: "Iphone thì không còn gì để chê rồi, thế giới di động phục vụ rất tốt, nhân viên thân thiện, nhiệt tình, dễ thương, TechGalaxy luôn là ưu tiên hàng đầu của mình khi mua đồ công nghệ"
            },
            {
                reviewer: "Nguyen Thi Thuy An",
                date: "21-1-2020",
                time: "6:9AM",
                rating: 1,
                content: "Uy tín"
            },
            {
                reviewer: "Minh",
                date: "21-1-2020",
                time: "4:24AM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "CHI",
                date: "19-1-2020",
                time: "10:57PM",
                rating: 2,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "Ngô Trọng Tân",
                date: "7-1-2020",
                time: "11:13PM",
                rating: 1,
                content: "Máy thiết kế cực kì tinh xảo , hệ điều hành cực mượt và đặc biệt chụp hình siêu nét"
            },
            {
                reviewer: "Thanh Tuyền",
                date: "1-1-2020",
                time: "8:19PM",
                rating: 3,
                content: "Máy thiết kế cực kỳ tinh xảo, hệ điều hành cực mượt và chụp hình cực kỳ siêu nét"
            },
            {
                reviewer: "Bảo Vy",
                date: "15-12-2019",
                time: "5:39PM",
                rating: 5,
                content: "Rất tốt"
            },
            {
                reviewer: "Hiếu",
                date: "3-12-2019",
                time: "2:27PM",
                rating: 3,
                content: "Máy thì tốt . Nhưng khi bị lỗi đi bảo hành thì lại xử lý rất lâu và tốn thời gian. Nhưng kết quả là k được đổi và nhận lại máy lỗi về sử dụng tiếp. Rất không hài lòng về chế độ bảo hành. Đùn đẩy qua lại cho nhau và k có trách nhiệm. Rất cần được phản hồi. Cảm ơn ạ"
            },
            {
                reviewer: "THẮM",
                date: "2-11-2019",
                time: "4:27PM",
                rating: 3,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "NgMinh",
                date: "14-10-2019",
                time: "6:41PM",
                rating: 1,
                content: "Hài lòng về sản phẩm và chất lượng phục vụ"
            },
            {
                reviewer: "Võ Thị Liên",
                date: "11-10-2019",
                time: "10:36PM",
                rating: 1,
                content: "Về tổng thể thì khá ok, chỉ có một điểm trừ là màn hình tai thỏ, mình thấy dù hiệu năng có tốt đến mức nào thì cái nhìn đầu tiên với màn hình tai thỏ thì đã có ấn tượng không hài hoà, không đẹp chút nào, nhìn như màn hình bị cắt xén đi bớt, cho nên nói về thiết kế thì iPhone vẫn còn 1 hạn chế là màn hình tai thỏ. Mong rằng dòng máy tiếp theo iPhone sẽ trang bị một màn hình nốt ruồi thì mới thật sự hoàn hảo, xứng đáng với biểu tượng thương hiệu dtdd cao cấp."
            },
            {
                reviewer: "Nông Đức Mạnh",
                date: "1-10-2019",
                time: "7:11AM",
                rating: 5,
                content: "May tốt"
            },
            {
                reviewer: "Hồ Thị Hiên",
                date: "29-9-2019",
                time: "6:20PM",
                rating: 5,
                content: "B cho mình hỏi giá nay bao gồm sạc voi tai nghe chưa hay mua sạc riêng vậy bạn, minh Thấy ở trong hộp chỉ co dây sạc nhanh thôi à"
            },
            {
                reviewer: "Triệu Thị Hương",
                date: "21-8-2019",
                time: "4:41PM",
                rating: 1,
                content: "Đt mua đc 2 tháng mấy, lần thứ 1 đang xài thì bị sọc màn hình gửi đi bảo hành về bị hở viền trên phần giáp với phần loa . Lần 2 gửi đi nhận về thì ko khắc phục đc lỗi . Lần 3 là hôm nay nhận máy cũng vậy vẫn ko khắc phục được lỗi. Lần thứ 4 gửi đi thì đang đợi phản hồi về tình trạng máy..."
            },
            {
                reviewer: "THẢO",
                date: "17-6-2019",
                time: "7:22AM",
                rating: 2,
                content: "Mua ngay máy lô màn obe bị lỗi tần số quét LTPO, cứ coi clip facebook bị nhấp nháy rất khó chịu vì màn ko hoạt động LTPO,test thử máy khác máy bị máy ko, ra đổi máy khác thì ko dc."
            },
            {
                reviewer: "TRAN VAN NGHIA",
                date: "11-5-2019",
                time: "10:31PM",
                rating: 4,
                content: "Uy tín"
            },
            {
                reviewer: "Long",
                date: "2-5-2019",
                time: "8:33PM",
                rating: 2,
                content: "Máy rất đẹp xứng đáng với đối tiền"
            }
        ]
    }
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


