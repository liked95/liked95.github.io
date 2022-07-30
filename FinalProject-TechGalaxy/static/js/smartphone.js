// render smartphone category
const phoneCategoryBox = document.querySelector(".smartphone-container .product-category-container")
// $(".search-quantity")

let filterResults = products.filter(p => p.category == "smartphone")
renderCardItem(phoneCategoryBox, filterResults)
$(".search-quantity").text(filterResults.length)

const filterCheckBoxes = document.querySelectorAll(".filter-option input")
let deleteTagIcons = []
let filterTagArr = []
const tagContainer = document.querySelector(".tags")
const selectSortBtn = document.getElementById("sort")


function updateTag() {
    tagContainer.innerHTML = ""
    filterTagArr.forEach(tag => {
        tagContainer.innerHTML += `
        <span class="tag-item">
           <span> ${tag.displayTag}</span>
            <span class="delete-tag-icon" onclick = removeMiniTag("${tag.displayTag}")>
                <img src="../static/images/icons/128px-White_x_in_red_rounded_square.svg.png" alt="squareX">
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


        // reset lai trang thai ban dau
        filterResults = products.filter(p => p.category == "smartphone")
        renderCardItem(phoneCategoryBox, filterResults)
        $(".search-quantity").text(filterResults.length)
    }
})


// lọc điện thoại
const filterBtn = document.querySelector(".filter-btn")
// convert filter criteria from array into objects with key = criteria, value = [value1, value2]



filterBtn.addEventListener("click", () => {
    filterProduct(products, filterTagArr, "smartphone", phoneCategoryBox)
    $(".search-quantity").text(filterResults.length)
    selectSortBtn.value = ""
})




// sort action

selectSortBtn.addEventListener("change", (e) => {
    let sortValue = e.target.value
    let sortResults = filterResults
    if (sortValue == "priceAsc") sortResults = filterResults.sort((p1, p2) => p1.currentPrices[0] - p2.currentPrices[0])
    if (sortValue == "priceDesc") sortResults = filterResults.sort((p1, p2) => p2.currentPrices[0] - p1.currentPrices[0])
    if (sortValue == "discountAsc") sortResults = filterResults.sort((p1, p2) => Math.abs(Number(p1.discounts[0])) - Math.abs(Number(p2.discounts[0])))
    if (sortValue == "discountDesc") sortResults = filterResults.sort((p1, p2) => Math.abs(Number(p2.discounts[0])) - Math.abs(Number(p1.discounts[0])))
    if (sortValue == "quantityAsc") sortResults = filterResults.sort((p1, p2) => p1.soldQuantity - p2.soldQuantity)
    if (sortValue == "quantityDesc") sortResults = filterResults.sort((p1, p2) => p2.soldQuantity - p1.soldQuantity)
    if (sortValue == "ratingAsc") sortResults = filterResults.sort((p1, p2) => p1.ratings - p2.ratings)
    if (sortValue == "ratingDesc") sortResults = filterResults.sort((p1, p2) => p2.ratings - p1.ratings)
    renderCardItem(phoneCategoryBox, sortResults)
})



