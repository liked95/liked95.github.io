class CoffeeMachine {
    _waterAmount = 0

    set waterAmount(value) {
        if (value < 0) {
            this._waterAmount = 0
        }

        this._waterAmount = value
    }

    get waterAmount() {
        return this._waterAmount
    }

    constructor(power) {
        this._power = power
    }
}

let instantcoffee = new CoffeeMachine(25)

console.log(instantcoffee.waterAmount)
instantcoffee.waterAmount(-100)
console.log(instantcoffee.waterAmount)