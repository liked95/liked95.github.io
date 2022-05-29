<!-- Viết lại các string methods, array methods vào trong file markdown -->
# Tổng hợp String Methods và Array Methods
## String Method
Có 3 cách lấy chuỗi con của 1 chuỗi `slice`, `substring`, và `substr`.
1. `slice(start, end)`
2. `substring(start, end)`
3. `substr(start, length)`

**Lưu ý** Javascript đếm từ 0 chứ ko phải 1 và `end` trong slice method không chứa phần tử tại index đó
```javascript
let text = 'abc'
let text1 = text.slice(0, 2) 
// text1 = 'ab'
```

Có 2 cách để thay thế string content. 
1. `replace(a, b)` sẽ tìm chuỗi `a` đầu tiên trong string (tính từ trái sang phải) và thay thế nó bằng chuỗi `b`. Ví dụ:

```javascript
let text = 'abcb'
let text1 = text.replace('b', '1') 
// text1 = 'a1cb'
```

2. `replaceAll(a, b)` sẽ thay thế tất cả `a` bằng `b`. Ví dụ:

```javascript
let text = 'abcb'
let text1 = text.replaceAll('b', '1') 
// text1 = 'a1c1'
```
Có thể chuyển string to chữ thường bằng chữ in hoa bằng `toUpperCase()` và ngược lại bằng `toLowerCase()`. Ví dụ:

```javascript
let text = 'abCB'
let text1 = text.toUpperCase()
// text1 = 'ABCB'
let text2 = text.toLowerCase()
// text2 = 'abcb'
```

Có thể cắt khoảng trắng (space) quanh string bằng method `trim()`

```javascript
let text = '  abCB   '
let text1 = text.trim()
// text1 = 'abCB'
```
Có thể convert string thành array bằng `split()`, 

```javascript
let text = 'abcde'
let text1 = text.split("")
// text1 =  ['a', 'b', 'c', 'd', 'e']
```

## Array Method

`pop()` được dùng để loại bỏ phần tử cuối cùng của array, và return phần tử đó, `shift()` thì dùng để bỏ phần tử đầu array; 
```javascript
let arr = [1, 2, 5, 4, 8, 0]
arr.pop() // this return 0, the last element
// arr = [1, 2, 5, 4, 8]

let arr = [1, 2, 5, 4, 8, 0]
arr.shift() 
// arr = [2, 5, 4, 8, 0]
```
`push(element)` có tác dụng ngược lại, dùng để thêm 1 `element` vào cuối array, còn `unshift(element)` được dùng để add element vào đầu array
```javascript
let arr = [1, 2, 5, 4, 8, 0]
arr.push(10) // this return the length of the new array
// arr = [1, 2, 5, 4, 8, 0, 10]

let arr = [1, 2, 5, 4, 8, 0]
arr.unshift(9) // this return the length of the new array
// arr = [9, 2, 5, 4, 8, 0]
```

`sort()` được dùng để sắp xếp lại array từ trái sang phải dựa trên mã hóa `ASCII` <br />
`reverse()` có tác dụng đảo ngược thứ tự các phần tử trong array <br />
`toString()` có tác dụng biến `array` và `number` thành `string` <br />
`join(a)` có tác dụng nối các phần tử trong array, ngăn cách bởi `a` <br />
`slice(start, end)` tạo ra 1 bản sao của array bắt đầu từ `start` tới `end` (ko bao gồm `end`). Ví dụ: <br />
```javascript
let arr = [1, 2, 5, 4, 8, 0]
let slicedText = arr.slice(0, 3)
// slicedText = [1, 2, 5]
```

`splice(start, deleteCount, item1)` thay đổi nội dung của array bằng cách loại bỏ hoặc thay thể phần tử trong array bằng một hay nhiều phần tử khác. Ví dụ:

```javascript
let arr = [1, 2, 5, 4, 8, 0]
arr.splice(2, 1, 'replaced')
// arr = [1, 2, 'replaced', 4, 8, 0]
```

