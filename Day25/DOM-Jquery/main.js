// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó

$("#heading").css({
    "color": "red",
    "background-color": "green",
    "text-transform": "uppercase"
})
// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
$(".para").each((idx, ele) => {
    $(ele).css({
        "color": "blue",
        "fontSize": "20px"
    })
})

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
$(".para-3").after(`<a href ="http://facebook.com">Click to facebook</a>`)

// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
$("#title").text("Đây là thẻ tiêu đề")
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
$(".description").addClass("text-bold")
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
$(".para-3").replaceWith(`<button>CLick me senpai</button>`)
$("button").css({
    "color": "red",
    "backgroundColor": "purple",
    "display": "block"
})
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
$(".para-2").after($(".para-2").clone())
// Xóa thẻ có class=“para-1”
$(".para-1").remove()