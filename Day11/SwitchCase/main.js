// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”

function repeatString(string) {
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += string;
    }

    return result;
}

console.log(repeatString('a'))


// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”

function repeatStringWithHyphen(string) {
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += string;
        if (i === 10 - 1) break;
        result += '-';
    }

    return result;
}

console.log(repeatStringWithHyphen('a'))




// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’

function repeatCustomString(string, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += string;
        if (i === times - 1) break;
        result += '-';
    }

    return result;
}

console.log(repeatCustomString('a', 9))

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

function sumOfNumbersDivisibleBy5() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0) sum += i;
    }
    return sum;
}

console.log(sumOfNumbersDivisibleBy5())


// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function calcSphereVolume(radius) {
    return 4 / 3 * Math.PI * radius ** 3
}

console.log(calcSphereVolume(4))



// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// Note : Kết quả xuôi và ngược là như nhau

// Ví dụ :

// sum(3,8) = 22
// sum(8,3) = 22

function sumNumbersBetween(a, b) {
    let sum = 0;

    if (a <= b) {
        for (let i = a + 1; i <= b - 1; i++) {
            sum += i;
        }
        return sum;
    } else {
        for (let i = a - 1; i >= b + 1; i--) {
            sum += i;
        }
        return sum;
    }
}

console.log(sumNumbersBetween(3, 8))
console.log(sumNumbersBetween(8, 3))
console.log(sumNumbersBetween(6, 5))



// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function isPrime(number) {
    if (number === 0 || number === 1 || number < 0) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}


console.log(isPrime(61))


// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function sumPrimeNumbers(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumPrimeNumbers(1000))

// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function sumDivisors(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumDivisors(10))

