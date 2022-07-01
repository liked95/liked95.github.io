$("#heading").text("Hello the fucking world")
$("#heading").css({"color" : "red", "backgroundColor" : "green"})
const heading = $("#heading")
console.log(heading)

$("#heading").click(() => {
    alert("click vao h1")
})

$("p").each((idx, ele) => {
    $(ele).html(`Thẻ para ${idx+1} đã được thay đổi nội dung`)
    $(ele).css("color", "blue")
})


// Truy cap 1 the thong qua chi so

$("p").eq(1).html("THẻ này được thay đổi nội dung(update)")

$("p").first().css("color", "pink")
$("p").last().css("color", "green")


// Add
$("p").last().after("<button>Click me </button>")

//Delete
$(".box ul").children().first().remove()

// Replace
$("p").first().replaceWith(`<input type="text" placeholder="type something">`)

// Clone
$("#heading").clone().appendTo("body")

// Hide Show
$("ul").last().css({
    "backgroundColor": "black",
    "color": "white"
})

$("button").click(() => {
    $("ul").last().slideToggle()
})