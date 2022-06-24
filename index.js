
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

//Calculator Display
const display = document.getElementById("display")

//get user input 1
let userInput = ""
let currentNum = ""
let symbol = ""

function input(a) {
    userInput = userInput + a
    display.innerHTML = userInput
}
//Operate, (a, b, operator)
function operate(a,b,operator){
    a = currentNum
    b = userInput

    if (userInput == ""){
        userInput = userInput
        symbol = operator;
    }else if (currentNum != "" && symbol == ""){
        symbol = operator;
        currentNum = userInput
        userInput = ""
    }
    else if(currentNum == ""){
        currentNum = userInput;
        //console.log("user input is " + userInput)
        userInput = ""
        //console.log("current value is " + currentNum)
        display.innerHTML = parseFloat(currentNum).toFixed(2);
        symbol = operator
    }
    else {
        currentNum = window[symbol](parseFloat(a), parseFloat(b))
        //console.log("user input is " + userInput)
        userInput=""
        //console.log("current value is " + currentNum)
        display.innerHTML = parseFloat(currentNum).toFixed(2);
        symbol = operator
    }
}
function equate(a,b){
    if (userInput == ""){
        userInput = userInput
    }
    else if (currentNum == "" ) {
        currentNum = ""
    }
    else {
        //console.log(symbol)
        a = currentNum
        b = userInput
        currentNum = window[symbol](parseFloat(a),parseFloat(b))
        display.innerHTML = parseFloat(currentNum).toFixed(2)
        userInput = ""
        symbol = ""
        //console.log(currentNum)
    }
}
function clearCalc() {
    currentNum = ""
    userInput = ""
    symbol = ""
    //console.log("current value is " + currentNum)
    //console.log("user input is " + userInput)
    display.innerHTML = currentNum
}



