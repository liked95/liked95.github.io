function checkArrAsc(arr) {
    // Sử dụng vòng for để duyệt mảng
    // Kiểm tra nếu tồn tại phần tử đằng trước > phần tử đằng sau => Không tăng dần
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }

    return true;
}

arr1 = [1, 2, 6, 5, 7, 7]
console.log(checkArrAsc(arr1))


function checkEvenArrAsc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1] || arr[i] % 2 !== 0) {
            return false;
        }
    }

    return true;
}

arr2 = [0, 2, 6, 8, 10, 12]
console.log(checkEvenArrAsc(arr2))