// render smartphone category
const phoneCategoryBox = document.querySelector(".smartphone-container .product-category-container")

renderCardItem(phoneCategoryBox, products.filter(p => p.category == "smartphone"))

const filterCheckBoxes = document.querySelectorAll(".filter-option input")
let deleteTagIcons = []


let filterTagArr = []
const tagContainer = document.querySelector(".tags")


function updateTag() {
    tagContainer.innerHTML = ""
    filterTagArr.forEach(tag => {
        tagContainer.innerHTML += `
        <span class="tag-item">
           <span> ${tag.displayTag}</span>
            <span class="delete-tag-icon" onclick = removeMiniTag("${tag.displayTag}")>
                <i class="fa-solid fa-xmark "></i>
            </span>
        </span>
        `
    })
}



// cập nhật rổ filter khi thay đổi check box
filterCheckBoxes.forEach(checkBox => {
    checkBox.addEventListener("change", (e) => {
        if (e.target.checked) {
            let key = e.target.parentNode.parentNode.id
            console.log(key)
            
            // get value của filter object
            let value
            if (key != "price") {
                value = e.target.parentNode.querySelector("label").textContent
            } else {
                value = e.target.id
            }

            const map = {}
            map["key"] = key, map["value"] = value, map["displayTag"] = e.target.value

            addFilterTag(map)
        } else {
            removeFilterTag(e.target.value)
        }
        deleteTagIcons = document.querySelectorAll(".delete-tag-icon")
        
    })
})


// thêm tag
function addFilterTag(tag) {
    if (tag) filterTagArr.push(tag)
    updateTag()
}
// xóa tag
function removeFilterTag(tag) {
    if (tag) {
        filterTagArr = filterTagArr.filter(filterTag => filterTag.displayTag != tag)
    }
    updateTag()
}


// xóa tag trong bộ lọc
function removeMiniTag(tag) {
    // xóa tag ở khung
    removeFilterTag(tag)

    // xóa tag ở check box
    console.log(tag)
    Array.from(filterCheckBoxes).find(checkbox => checkbox.value == tag).checked = false
}

// xoá hết
const eraseAllTagBtn = document.querySelector(".erase-tag-btn")

eraseAllTagBtn.addEventListener("click", () => {
    if (window.confirm("Bạn có muốn reset bộ lọc?")) {
        filterTagArr = []
        Array.from(filterCheckBoxes).forEach(checkbox => checkbox.checked = false)
        updateTag()
    }
})


// lọc điện thoại
const filterBtn = document.querySelector(".filter-btn")
// convert filter criteria from array into objects with key = criteria, value = [value1, value2]
function isSame(arr1, arr2) {
    return arr1.some(ele => arr2.includes(ele))
}

filterBtn.addEventListener("click", () => {
    // console.log(filterTagArr)
    const filterObject = {}
    filterTagArr.forEach(object => {
        if (!filterObject[object.key]) {
            filterObject[object.key] = [object.value]
        } else {
            filterObject[object.key].push(object.value)
        }
    })

    console.log(filterObject)

    let filterRes = []
    
    for (let p of products) {
        let isMatch = true
        
        for (let key in filterObject) {
            let values = filterObject[key]
            values = values.map(value => value.toLowerCase())
            console.log(values)
            if (key == "brand") {
                if (!values.includes(p[key].toLowerCase())) {
                    isMatch = false
                    break
                }
            } else if (key == "price") {

            } else {
                let productValues = p[key].map(val => val.toLowerCase())
                console.log(productValues)
                if (!isSame(productValues, values)) {
                    isMatch = false
                    break
                }
            }

        }

        if (isMatch) filterRes.push(p)
    }
    
    console.log(filterRes.length)
    renderCardItem(phoneCategoryBox, filterRes)

})




// 0: {key: 'price', value: 'seven-to-ten', displayTag: '7-10tr'}
// 1: {key: 'brand', value: 'Oppo', displayTag: 'Oppo'}
// 2: {key: 'ram', value: '12GB', displayTag: 'RAM:12GB'}
// 3: {key: 'rom', value: '64GB', displayTag: 'ROM:64GB'}



// brand: (3) ['Samsung', 'Apple', 'Huawei']
// price: (2) ['0:7', '10:20']
// ram: ['6GB']