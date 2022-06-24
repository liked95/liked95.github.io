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