var input = 1
function doSomething() {
    let cbFn = function () {
        console.log(this.input * this.input)
    };
    // let bindedcbFn = cbFn.bind(this);
    setTimeout(cbFn.bind(this), 1000);
}
var obj = {
    input: 3,
    doSomething: doSomething
};
obj.doSomething(); // 9

// One great example can be of debounce method ("primarily used in // search, suggestion => while the user is typing don't make API    // calls , instead delay the execution till user finishes typing")
function debounce(fn, timeout) {
    let timer;

    return function (...args) {
        let context = this;
        clearTimeout(timer);
        setTimeout(function () { fn.apply(context, args) }, timeout);
    };
}