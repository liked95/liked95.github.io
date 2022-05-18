# Tổng hợp kiến thức buổi đầu JavaScript

## JavaScript là gì
JavaScript là ngôn ngữ client-side rendering được dùng cùng với HTML và CSS để người dùng có thể tương tác trực tiếp với Browser. JavaScript là ngôn ngữ compiling khác với ngôn ngữ interpreting như C, C++. Ứng dụng thường thấy của JavaScript là: 
- Thay đổi nội dung của HTML element
- Thay đổi style của HTML element
- Phản hồi sự kiện của user thông qua lệnh `addEventListener`
- Thông báo người dùng (`alert`) hay tiếp nhận thông tin của người dùng (`prompt`)
- Information validation khi người dùng điền form
- Kiểm soát animation của trang web

JavaScript được đặt trong thẻ `<script></script>`, có thể được đặt trong thẻ `<head></head>` hay `<body></body>` của HTML. Best practice vẫn là link external JavaScript script file và đặt ở ngay trên thẻ đóng của `body`.

## Variable
Biến trong JavaScript có thể được khai báo bằng `let`, `const`, hoặc `var`:
- Có thể declare biến mà không cần initialize (`let name;`)
- Có thể declare và initialize đồng thời (`let name = 'Techmaster';`)

Quy tắc đặt tên biến là ko bắt đầu bằng số, và có phân biệt chữ hoa. Best practice là đặt tên biến theo phong cách `camelCase`.

## String
String là kiểu dữ liệu dạng text có thể có 1 hoặc nhiều kí tự. String phải được đặt trong nháy đơn `'` hoặc nháy kép `"`. Ví dụ:
```
    let school = "THCS Trần Quốc Tuấn";
```
Chuối có thể nối với nhau bằng dấu +:
```
    let district = "Thanh Xuân";
    let city = "Hà Nội"
    console.log("Xin chào các bạn. Tôi ở " + district + ", " + city + ".");
```
Template string trong ES6 có thể được dùng để giúp việc nối string đơn giản và ít gặp lỗi hơn:
```
console.log("Xin chào các bạn. Tôi ở ${district}, ${city}.")
```

**Lưu ý**: Khi nối string với number bằng dấu + thì number sẽ được được xem là string. Ví dụ:  `console.log("4"+4)` sẽ cho ra kết quả trên console là `44` thay vì `8`.

## Number
Number trong JavaScript được khai báo bằng số tự nhiên (`8`) hay số thập phân (`8.8`) và không được đặt trên nháy đơn hay kép.
```
let age = 8;
```
**Lưu ý:** JavaScript là dynamic typing language nên chỉ có 1 kiểu number, khác với static typing language có nhiều kiểu number như `integer`, `float`, `double`, `long`. Ngoại trừ toán tử `+`, JavaScript sẽ cố gắng convert string thành number khi ta thực hiện phép `-, *, /` giữa `string` và `number`. Ví dụ `'40'/4` sẽ cho kết quả là `10`. Còn `'40' + 4` sẽ cho kết quả là `404`.

## Math Object
Math là 1 object có những phương thức được built-in sẵn trong JavaScript. Một số phương thức hay dùng là:
- `Math.PI`: return 3.1415...
- `Math.random()`: return ngẫu nhiên 1 số thập phân từ 0 đến 1 (không bao gồm 1).
- `Math.ceil(number)` : Làm tròn số lên
- `Math.floor(number)` : Làm tròn số xuống
- `Math.min(list)`: Return giá trị nhỏ nhất trong list
- `Math.max(list)`: Return giá trị lớn nhất trong list
- `Math.pow(a, b)`: Return số mũ `b` của cơ số `a`. Tương đương với `a**b`
- `Math.sqrt(a)`: Return căn bậc 2 của `a`
- `Math.sin(a)`, `Math.cos(a)`, `Math.tan(a)`, `Math.asin(a)`, `Math.acos(a)`, `Math.atan(a)`: Các hàm lượng giác.





