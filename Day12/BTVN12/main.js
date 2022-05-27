// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false

// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// Ví dụ:

// checkStringExist(“i love you”, “you”) => true
// checkStringExist(“i love you”, “hate”) => false

function checkStringExist(string, subString) {
    for (let i = 0; i < string.length; i++) {
        if (string.substr(i, subString.length) == subString) {
            return true;
        }
    }

    return false;
}


console.log(checkStringExist("Ijustwannakissyoi u", "stwa"))


// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

// Ví dụ:

// shortenString(“Xin chào các bạn”) => “Xin chào…”
// shortenString("hello’) => “hello”

function shortenString(string) {
    if (string.length > 8) {
        string = `${string.substr(0, 8)}...`
    }

    return string;
}

console.log(shortenString("Xin chào các bạn"))
console.log(shortenString("hello"))


// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

// Ví dụ

// “Race car” => true,
// “hello world” => false.


function isPalindrome(string) {

    function reverseString(str) {
        let res = "";
        for (let i = str.length - 1; i >= 0; i--) {
            res += str[i];
        }
        return res;
    }

    let reversedVersion = reverseString(string);
    if (string.toLowerCase().replaceAll(" ", "") == reversedVersion.toLowerCase().replaceAll(" ", "")) {

        return true;
    }

    return false;

}

console.log(isPalindrome('Race car'))
console.log(isPalindrome('raC e C a  R '))
console.log(isPalindrome('Hello world'))

// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

// Ví dụ

// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359

function smallestNumber(number) {

    let newNumber = "";

    if (number >= 0) {
        number = number.toString();
        let zeros = "";
        while (number.length > 0) {
            let min = Number(number[0])
            for (let i = 0; i < number.length; i++) {
                if (Number(number[i]) < min) {
                    min = Number(number[i])
                }
            }

            // after min has been found for each for loop

            if (min === 0) {
                zeros += min
            } else {
                newNumber += min
            }

            number = number.replace(min, "");
        }
        return Number(newNumber.slice(0, 1) + zeros + newNumber.slice(1))
    } else {
        // strip the minus sign "-"
        number = number.toString().slice(1);
        while (number.length > 0) {
            max = Number(number[0])
            for (let i = 0; i < number.length; i++) {
                if (Number(number[i]) > max) {
                    max = Number(number[i])
                }
            }

            newNumber += max;
            number = number.replace(max, "");
        }

        return -1 * Number(newNumber)
    }

}

console.log(smallestNumber(310))
console.log(smallestNumber(53751))
console.log(smallestNumber(14350))
console.log(smallestNumber(-470150))
console.log(smallestNumber(-501401384))

// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

// Ví dụ:

// “HELLO world” => “hello_world”
// “Xin Chào Các BẠN” => “xin_chào_các_bạn”

function snakeCase(str) {
    return str.toLowerCase().replaceAll(" ", "_");
}

console.log(snakeCase("HELLO world"))
console.log(snakeCase("Xin Chào Các BẠN"))



