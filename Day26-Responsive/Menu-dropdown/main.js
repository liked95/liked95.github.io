const btn = document.querySelector(".menu-icon")
const menuEl = document.querySelector(".menu ul")
let isShow = false


$(btn).click(() => {
    isShow = !isShow
    $(menuEl).slideToggle(() => {
        if (isShow) {
            $(menuEl).css("display", "flex")
        } else {
            $(menuEl).css("display", "none")
        }
    })
})



$(window).resize(() => {
    if ($(window).innerWidth() >= 768) {
        isShow = false
        $(menuEl).css("display", "flex")
    } else {
        $(menuEl).css("display", "none")
    }
})


