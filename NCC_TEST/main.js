const openBtn = document.querySelector(".menu-button")
const closeBtn = document.querySelector(".close-button")
const backdrop = document.getElementById("backdrop")
const sideBar = document.querySelector(".sidebar")


openBtn.addEventListener("click", () => {
    if (sideBar.classList.contains("active")) {
        sideBar.classList.remove("active")
        backdrop.classList.remove("active")
    } else {
        sideBar.classList.add("active")
        backdrop.classList.add("active")
    }
})

closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("active")
    backdrop.classList.remove("active")
})

backdrop.addEventListener("click", () => {
    sideBar.classList.remove("active")
    backdrop.classList.remove("active")
})