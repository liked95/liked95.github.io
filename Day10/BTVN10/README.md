# Tổng hợp kiến thức buổi 2

## Function
Function là tập hợp các đoạn code để thực hiện 1 tác vụ cụ thể. Function có tham số được khai báo trong khi viết hàm, còn đối số là giá trị thực được truyền vào tham số để chạy phương trình</br>
Cú pháp: 
```javascript
function functionName(parameter1, parametern)
```

Các loại function: 
- Function không có tham số: 
```javascript
function greet() {
    console.log('Hello World')
}
```

- Function  có tham số: 
```javascript
function greet(name) {
    console.log(`Hello ${name}`)
}
```

*Lưu ý*: Function có tham số có thể có Default Parameters, ví dụ như `name = 'Bui Hien`. Khi đó nếu không được truyền đối số với, tham số `name` sẽ lấy giá trị mặc định là `'Bui Hien'`.

- Function trả kết quả (code sau từ khóa `return` sẽ không được thực thi):  
```javascript
function calcAge(year) {
    return 2022 - year
}
```

- Function không trả kết quả khi không chứa từ khóa `return`.

## Phạm vi của biến
Có 3 loại scope:

1) Global scope: là 1 biến khi nó được khai báo bên ngoài function
2) Function scope: là 1 biến khi nó được khai báo bên trong function
3) Block scope: là 1 biến khi nó được khai báo bên trong dấu {}. Ví dụ biến được khai báo bên trong {} sau conditional statement:
```javascript
    if (true) {
        const name = 'Bui Hien';
    }
```
*Lưu ý*: Nếu biến không được khai báo bằng từ khóa (`let`, `const`), nó sẽ trở thành global variables và có thể được truy cập với tất cả các function.

## Boolean

Kiểu dữ liệu Boolean trả về 1 trong 2 kết quả: `true` hoặc `false`. Ví dụ 
```javascript
let a = 5;
let b = 10;
console.log(a > b)
// console sẽ in ra false
```

Trong ví dụ trên có thể dùng hàm Boolean để xác định `true`/`false`: `console.log(Boolean(a > b))`.
Hàm Boolean được dùng để ép giá trị về kiểu Boolean. Nếu thuộc 1 trong 6 giá trị sau sẽ được xem là falsy values: false, null, undefined, 0, '', NaN. Nếu thuộc các giá trị còn lại thì được xem là truthy values.

## Conditional statement
Câu lệnh `if` được dùng để chạy 1 code block nếu điều kiện đặt trước nó là `true`:
```javascript
if (condition) {
    // code block to execute
}
```

Nếu thêm `else` thì sẽ ta có thể định nghĩa đoạn code nào được chạy nếu điều kiện của `if` trả về `false`
```javascript
let age = 30;
if (age > 50) console.log('Too old')
else console.log('Too young')
```
`else if` được dùng khi có nhiều hơn hai điều kiện
```javascript
let age = 30;
if (age >= 80) console.log('Too old')
else if (age >= 50 && age < 80) console.log('Quite old')
else if (age >= 20 && age < 50) console.log('Quite young')
else console.log('Too young')
```

*Lưu ý*: Khi so sánh điều kiện có thể dùng `==` và `===` để so sánh giữa hai đối tượng. `==`(abstract equality) thực hiện phép chuyển đổi cần thiết trước khi so sánh. Ví dụ như convert `string` thành `number`. Trong khi đó, `===` (strict equality) không thực hiện chuyển đổi loại trước khi so sánh.

## Ternary operator
Toán tử 3 ngôi được dùng để rút gọn `if else` statement.
Thay vì: 
```javascript
let a = 10;
if (a % 2 === 0) {
    console.log('a is an even number')
} else {
    console.log('a is an odd number')
}
```
Ta có thể rút gọn đoạn code với ternary operator:
```javascript
let a = 10;
(a % 2 === 0) ? console.log('a is an even number') : console.log('a is an odd number')
```