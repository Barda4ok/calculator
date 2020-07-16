function calculatepercent()
    {
    var firstnum = 8;
    var percentnum = 50;
    var percentresult = 8 * 100 / 50;
    console.log(percentresult);
    }

calculator.one.addEventListener('click', function() {
    calculator.result.value += '1';
}, false)

calculator.two.addEventListener('click', function() {
    calculator.result.value += '2';
}, false)

calculator.three.addEventListener('click', function() {
    calculator.result.value += '3';
}, false)

calculator.four.addEventListener('click', function() {
    calculator.result.value += '4';
}, false)

calculator.five.addEventListener('click', function() {
    calculator.result.value += '5';
}, false)

calculator.six.addEventListener('click', function() {
    calculator.result.value += '6';
}, false)

calculator.seven.addEventListener('click', function() {
    calculator.result.value += '7';
}, false)

calculator.eight.addEventListener('click', function() {
    calculator.result.value += '8';
}, false)

calculator.nine.addEventListener('click', function() {
    calculator.result.value += '9';
}, false)

calculator.zero.addEventListener('click', function() {
    calculator.result.value += '0';
}, false)

calculator.dot.addEventListener('click', function() {
    calculator.result.value += '.';
}, false)

calculator.clear.addEventListener('click', function() {
    calculator.result.value += '';
}, false)

calculator.plus.addEventListener('click', function() {
    calculator.result.value += '+';
}, false)

calculator.minus.addEventListener('click', function() {
    calculator.result.value += '-';
}, false)

calculator.split.addEventListener('click', function() {
    calculator.result.value += '/';
}, false)

calculator.multiply.addEventListener('click', function() {
    calculator.result.value += '*';
}, false)

calculator.equal.addEventListener('click', function() {
    calculator.result.value = eval(calculator.result.value);
}, false)


calculator.percent.addEventListener('click', function() {
    calculator.result.value += calculatepercent;
 }, false)