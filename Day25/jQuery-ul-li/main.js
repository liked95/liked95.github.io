// Nối tiếp vào bài tập buổi 1 - Bài số 3: ul-li

// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
$("body").append(`<button class="add-btn">Add</button>`)
$("body").append(`<input type = "text">`)

// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
$(".add-btn").click(() => {
    let value = $("input").val()
    if (!value) {
        alert("Ko dc de trong")
        return;
    }

    $("#list").append(`<li>${value}</li>`)
    $("input").val("")
})


// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
$("body").append(`<button class="remove-btn">Remove</button>`)
$(".remove-btn").click(() => {
    $("#list li:last-child").remove()
})


// Thêm 1 nút Hide trên đầu của danh sách ul
$("body").prepend(`<button class="toggle-btn">Hide</button>`)
$(".toggle-btn").click(() => {
    $("#list").toggle(300)
    if ($(".toggle-btn").text() === "Hide") {
        $(".toggle-btn").text("Show")
    } else {
        $(".toggle-btn").text("Hide")
    }
})

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide