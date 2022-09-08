// $("#search")


$("#btn-search").click(() => {

    renderMeal()

    $("#result-heading").css("display", "block")
    $("#meals").css("display", "grid")
})

$("#search").keyup(e => {
    if (e.keyCode == 13) {
        renderMeal()

        $("#result-heading").css("display", "block")
        $("#meals").css("display", "grid")
    }
})


function renderMeal() {
    const searchValue = $("#search").val()

    if (!searchValue) {
        alert("Noi dung tim kiem khong duoc de trong!");
        return;
    }

    let res = getMealInfo(searchValue)
    console.log(res)
    res.then(meals => {

        //  Nơi hiển thị kết quả tìm kiếm 
        $("#result-heading h2").text(`Kết quả tìm kiếm cho từ khóa '${searchValue}'`)

        // Danh sach mon an
        let mealsHTML = ""

        meals.forEach(meal => {
            const { strMeal, strMealThumb, strCategory, strArea, strInstructions } = meal
            console.log(meal)

            mealsHTML += `
                <div class="meal">
                    <img src=${strMealThumb} alt="${strMeal}">

                    <div class="meal-info">
                        <h3>${strMeal}</h3>
                    </div>
                </div>
            `
        });

        $("#meals").html(mealsHTML)


        renderSingleMeal(meals)

    }).catch(error => console.log(error))
}




async function getMealInfo(keyword) {
    try {
        let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        return res.data.meals
    } catch (error) {
        console.log(error)
        return []
    }
}


$("#btn-random").click(function () {
    randomMeal()
})

const randomMeal = async () => {
    try {
        let res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        let randomMeals = res.data.meals
        renderSingleMeal(randomMeals)

        $("#result-heading").css("display", "none")
        $("#meals").css("display", "none")



    } catch (error) {
        console.log(error)
    }
}






function renderSingleMeal(meals) {
    // Chi tiet mon an
    let singleMealHTML = ""
    meals.forEach(meal => {
        const { strMeal, strMealThumb, strCategory, strArea, strInstructions } = meal

        let ingredientHTML = ""
        for (let i = 1; i <= 20; i++) {
            if (!meal[`strIngredient${i}`]) break;
            let ingredientVal = meal[`strIngredient${i}`]
            let measureVal = meal[`strMeasure${i}`]

            ingredientHTML += `
                <li>${ingredientVal} - ${measureVal}</li>
            `
        }

        singleMealHTML += `
            <div class="single-meal">

                <!-- Tên món ăn (Meal) -->
                <h1>${strMeal}</h1>

                <!-- Ảnh món ăn (MealThumb)-->
                <img src=${strMealThumb} alt="${strMeal}">
                <div class="single-meal-info">
                    <!-- Danh mục (Category) -->
                    <p>${strCategory}</p>
                    <!-- Khu vực (Area) -->
                    <p>${strArea}</p>
                </div>
                <div class="main">
                    <!-- Hướng dẫn (Instructions)-->
                    <p>${strInstructions}</p>

                    <!-- Danh sách thành phần (Ingredient) và số lượng (Measure) -->
                    <h2>Ingredients</h2>
                    <ul>
                        ${ingredientHTML}
                    </ul>
                </div>
            </div>
        `

        $("#single-meal").html(singleMealHTML)

    })

}