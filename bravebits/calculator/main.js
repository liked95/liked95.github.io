const resultEle = document.querySelector(".result")
const resetBtn = document.getElementById("reset")
const changeSignBtn = document.getElementById("change_sign")
const percentageBtn = document.getElementById("percentage")
const divideBtn = document.getElementById("divide")
const multiplyBtn = document.getElementById("multiply")
const addBtn = document.getElementById("add")
const subtractBtn = document.getElementById("subtract")
const decimalBtn = document.getElementById("decimal")
const calcBtn = document.getElementById("calc_action")

const [key0, key1, key2, key3, key4, key5, key6, key7, key8, key9] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .map(num => document.getElementById(`key_${num}`))

let prevRes = undefined;
let res = 0;
let resText = "0";
let prevOperator
let operator;
let count = 0;
let isDecimalPressed = false;
let isLastPressCalc = false

function renderResult() {
    resultEle.textContent = resText;
}

function resetOperators() {
    [addBtn, subtractBtn, divideBtn, multiplyBtn].forEach(ele => {
        ele.classList.remove("active")
    })
    prevOperator = operator
    operator = undefined
    isDecimalPressed = false;
    isLastPressCalc = false

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
        isLastPressCalc = true

    }
}

function handleResetCalculator() {
    resText = "0"
    res = 0;
    prevRes = undefined;
    count = 0;


    resetOperators()
    renderResult()
}


renderResult()

Array.from([key0, key1, key2, key3, key4, key5, key6, key7, key8, key9]).forEach(key => {
    key.addEventListener("click", (e) => {
        let num = e.target.id
        num = +num.slice(-1)

        // skip if press 0 when res value == 0
        if (num == 0 && resText == 0 && !operator) {
            // console.log("stop");
            return
        }

        if (isLastPressCalc) {
            handleResetCalculator()
        }


        resText = resText == "0" ? num.toString() : resText + num.toString()
        res = parseFloat(resText)
        console.log(res, resText)
        isLastPressCalc = false
        renderResult()

    })
})

// click AC btn
resetBtn.onclick = () => {
    handleResetCalculator()
}


[addBtn, subtractBtn, divideBtn, multiplyBtn].forEach(ele => {
    ele.addEventListener("click", (e) => {
        if (res == 0) return
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
            // console.log("ok", res)
        }

        if (count > 0 && operator && prevOperator) calcRes()
        isLastPressCalc = false


    })
})

calcBtn.addEventListener("click", () => {
    calcRes()
})

// handle decimal
decimalBtn.addEventListener("click", () => {
    if (isDecimalPressed) return;

    if (isLastPressCalc) {
        handleResetCalculator()
    }

    // console.log(res, resText)
    if (resText == '-') {
        resText = '-0.'
    } else {
        resText = resText + '.'
    }
    // console.log(res, resText)
    renderResult()
    isDecimalPressed = true
})

// handle Change sign

changeSignBtn.addEventListener("click", () => {
    if (isLastPressCalc) {
        handleResetCalculator()
    }
    if (res == 0) {
        if (!resText.includes("-")) {
            resText = '-'
        } else {
            resText = 0
        }
    } else {
        if (!resText.includes("-")) {
            resText = '-' + resText
        } else {
            resText = resText.slice(1)
        }
    }

    res = parseFloat(resText)
    renderResult()

})