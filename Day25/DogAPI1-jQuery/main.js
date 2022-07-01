const btn = document.querySelector("button")
const imgEl = document.querySelector("img")

btn.addEventListener("click", async () => {
    try {
        // Goi API --> https://dog.ceo/api/breeds/image/random
        let res = await axios.get("https://dog.ceo/api/breeds/image/random")
        console.log(res)
        imgEl.src = res.data.message

    } catch (error) {
        console.log(error)
    }
})



// API caller via AJAX jQuery
$("#btn-jquery").click(() => {
    $.ajax({
        type: "GET",
        url: "https://dog.ceo/api/breeds/image/random",
        success: function (response) {
        $("img").attr("src", response.message)
        },
        error: function (error) {
            console.log(error)
        }
    })
})


// API via Fecth Vanilla JS
const btnFetch = document.getElementById("btn-fetch")
btnFetch.addEventListener("click", async () => {
    try {
        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await res.json()
        imgEl.src = data.message
        console.log(data)
    } catch (error) {
        console.log(error)
    }
})

