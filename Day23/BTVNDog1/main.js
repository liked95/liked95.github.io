const selectOptionEl = document.getElementById("greed-select-option")
const btnGetSubBreed = document.getElementById("get-sub-breed")
const img = document.querySelector("img")

async function populateBreeds() {
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/list/all")
        console.log(res)
        let breeds = res.data.message 
        console.log(breeds)
        for (const breed in breeds) {
            selectOptionEl.innerHTML += `
            <option value = "${breed}">${breed} </option>
        `
        }
    } catch (error) {
        console.log(error)
    }
}

populateBreeds()


// get sub breed

btnGetSubBreed.addEventListener("click", async () => {
    try {
        img.src = ""
        let subBreedListEl = document.getElementById("sub-breed-list")
        let breed = selectOptionEl.value
        let res = await axios.get(`https://dog.ceo/api/breed/${breed}/list`)
        const subBreeds = res.data.message
        console.log(subBreeds)
        if (!subBreeds.length) {
            subBreedListEl.innerHTML = `<li>Không có sub breed</li>`
            return;
        }

        subBreedListEl.innerHTML = ""
        for (const subBreed of subBreeds) {
            subBreedListEl.innerHTML += `<li style = "text-decoration: underline; color: blue; cursor: pointer" onclick = "changeImg('${breed}','${subBreed}')">${subBreed}</li>`
        }
        
    } catch (error) {
        console.log(error)
    }
})

// Lay anh sub breed
// onclick = "changeImg("${breed}","${subBreed}")"

const changeImg = async (breed, subBreed) => {
    try {
        console.log(breed, subBreed)
        let image = await axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`)  
        img.src = image.data.message 
    } catch (error) {
        console.log(error)
    }
}
