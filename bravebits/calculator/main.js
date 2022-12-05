const resultEle = document.querySelector(".result")
const resetBtn = document.getElementById("reset")
const changeSignBtn = document.getElementById("change_sign")
const percentageBtn = document.getElementById("percentage")
const divideBtn = document.getElementById("divide")
const multiplyBtn = document.getElementById("multiply")
const addBtn = document.getElementById("add")
const subtractBtn = document.getElementById("subtract")
const calcBtn = document.getElementById("calc_action")

const [key0, key1, key2, key3, key4, key5, key6, key7, key8, key9] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .map(num => document.getElementById(`key_${num}`))

let prevRes = undefined;
let res = 0;
let resText = "0";
let prevOperator
let operator;
let count = 0;

function renderResult() {
    resultEle.textContent = resText;
}

function resetOperators() {
    [addBtn, subtractBtn, divideBtn, multiplyBtn].forEach(ele => {
        ele.classList.remove("active")
    })
    prevOperator = operator
    operator = undefined
}

function calcRes() {
    console.log(prevRes, operator, res, prevOperator);
    if (prevRes && operator) {
        console.log(prevRes, operator, res)

        if (operator == "add") {
            res = prevRes + res
        }
        if (operator == 'subtract') {
            res = prevRes - res
        }
        if (operator == 'multiply') {
            res = prevRes * res
        }
        if (operator == 'divide') {
            res = res == 0 ? "ERROR" : prevRes / res
        }

        resText = res.toString();

        count++
        resultEle.textContent = resText;
        resetOperators()
        // console.log("successfully")

    }
}


renderResult()

Array.from([key0, key1, key2, key3, key4, key5, key6, key7, key8, key9]).forEach(key => {
    key.addEventListener("click", (e) => {
        let num = e.target.id
        num = +num.slice(-1)

        // skip if press 0 when res value == 0
        if (num == 0 && resText == 0) {
            // console.log("stop");
            return
        }


        resText = resText == "0" ? num.toString() : resText + num.toString()
        res = res == 0 ? num.toString() : res.toString() + num.toString()
        res = +res
        // console.log(res)
        renderResult()

    })
})

// click AC btn
resetBtn.onclick = () => {
    resText = "0"
    res = 0;
    prevRes = undefined;
    count = 0;

    resetOperators()
    renderResult()
}


[addBtn, subtractBtn, divideBtn, multiplyBtn].forEach(ele => {
    ele.addEventListener("click", (e) => {
        let isActive = e.target.classList.contains("active")
        console.log('active: ', isActive)
        resetOperators()
        // e.target.classList.toggle("active")

        if (isActive) {
            e.target.classList.remove("active")
            operator = undefined
            res = prevRes
            prevRes = undefined
            resText = res.toString()
        } else {
            e.target.classList.add("active")
            operator = e.target.id
            prevRes = res
            res = 0
            resText = res.toString()
            console.log("ok", res)
        }

        if (count > 0 && operator && prevOperator) calcRes()


    })
})

calcBtn.addEventListener("click", () => {
    calcRes()
})
