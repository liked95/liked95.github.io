const openBtn = document.querySelector(".menu-icon")
const closeBtn = document.querySelector(".menu-close")
const sideBarEl = document.querySelector(".nav-menu")
const overlay = document.getElementById("overlay")
const body = document.querySelector("body")

function openSideBar() {
    overlay.classList.add("show")
    sideBarEl.classList.add("show")
    body.style.overflowY = "hidden"
}

function closeSideBar() {
    overlay.classList.remove("show")
    sideBarEl.classList.remove("show")
    body.style.overflowY = "auto"
}

openBtn.addEventListener("click", () => {
    openSideBar()
})



closeBtn.addEventListener("click", () => {
    closeSideBar()
})

overlay.addEventListener("click", () => {
    closeSideBar()
})

window.addEventListener("resize", (e) => {
    if (window.innerWidth > 991) {
        closeSideBar()
    }
})




