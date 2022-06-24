
//Add, a + b
function add(a,b) {
    return a + b
}
//Subtract, a - b
function subtract(a,b) {
    return a - b
}
//Multiply, a * b
function multiply(a,b) {
    return a * b
}
//Divide, a / b
function divide(a,b) {
    return a / b
}
//Operate, (a, b, operator)
function operate(a,b,operator){
    return operator(parseInt(a),parseInt(b))
}

//get user input
var userInput = ""

function input(a) {
    userInput = userInput + a
    display.innerHTML = userInput
}





//Calculator Display
const display = document.getElementById("display")


