// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120


function calcFactorial(number) {
    if (number === 1) {
        return 1
    } else {
        return number * calcFactorial(number - 1)
    }
}

console.log(calcFactorial(4))


// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó

// Ví dụ: reverseString(‘hello’) => olleh

function reverseString(str) {
    let response = "";
    for (let i = str.length - 1; i >= 0; i--) {
        response += str[i];
    }

    return response;
}

console.log(reverseString(reverseString('Konichiwa')))


// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào

// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”

function translate(countryCode) {
    switch (countryCode) {
        case 'VN':
            return 'Chao xin'
        case 'US':
            return 'Holle'
        case 'JP':
            return reverseString('Arigato')
    }
}


console.log(translate('JP'))


// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.

// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”

function subString(str) {
    let response = ''
    if (str.length >= 15) {
        for (let i = 0; i < 10; i++) {
            response += str[i];
        }

        response += '...'
    }

    return response;
}

console.log(subString("xinchaocacbandenvoiTechmaster"))

// Bài 5: Viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.

// Gợi ý : sử dụng document.write()

function printNumber() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            document.write(`<span style="color:green">${i}</span>`);
        } else {
            document.write(`<span style="color:red">${i}</span>`);
        }
        document.write(`<br>`)
    }
}

// printNumber();


// Hinh 1

function printRectangle(row, col) {
    let content = "";
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            content += "*"
        }
        content += "<br>"
    }

    document.write(content)
}

// printRectangle(5, 4)

function printHollowRectangle(row, col) {
    let content = "";

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i === 0 || i === row - 1 || j === 0 | j === col - 1) {
                content += "* "
            } else {
                content += "  "
            }
        }
        content += "<br>"
    }

    document.write(`<pre>${content}<pre>`);
}

// printHollowRectangle(5, 5)


function printCross(side) {
    let content = "";

    for (let i = 0; i < side; i++) {
        for (let j = side - 1; j >= i; j--) {
            content += "* "
        }
        content += "<br>"
    }

    document.write(`<pre>${content}<pre>`);
}

printCross(10)