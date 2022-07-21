import { changeTheme } from './themeChange.js'

changeTheme.changeThemeColor();



let total = 0;
let firstTerm  = 0;
let secondTerm = 0;

let trigger   = false;
let firstTry  = false;
let operator;

const isNumber = new RegExp('\\d');
const input    = document.querySelector('#input');
const buttons  = document.querySelectorAll('.btn');

function runOperation(operator, a, b) {
    if(operator === "+") return a + b;
    if(operator === "-") return a - b;
    if(operator === "x") return a * b;
    if(operator === "/") return a / b;
}

function reset() {
    total       = 0;
    firstTerm   = 0;
    secondTerm  = 0;
    input.value = 0;
    trigger     = false;
    firstTry    = false;
}

function maxCharacterLength(string, length) {
    if (string.length > length) {
        return string.substring(0, length);
    } else {
        return string;
    }
}

function checkForTwoDecimals(input) {
    let numberOfDecimals = 0;
    let arr = [...input.value];
    for (let i = 0; i < arr.length; i++) {
        if(numberOfDecimals === 1 ) {
            arr.pop();
            break;
        } else {
            if(arr[i] === ".") {
                numberOfDecimals++;
            }
        }  
    }
   input.value = arr.join("");
}

function deleteNumber(input) {
    let value = input.value;
    value = value.split("");
    value.pop();
    value = value.join("");
    value = value.replace(/\,/g,'');
    value = parseFloat(value);
    value = value.toLocaleString("en-US", { maximumFractionDigits: 19 })
    value = value.toString();
    if (value === "NaN") {
        value = "";
    }
    input.value = value;
}

//Reaches out to the operator variable
function equalsLogic(operand) {
    if(operator === operand) {
        secondTerm = parseFloat(input.value)
        total = runOperation(operator, firstTerm, secondTerm)
        input.value = total;
        firstTry = false;
        total = 0;
        firstTerm = 0;
        secondTerm = 0;
    }
}

//Reaches out to the operator variable
function mathLogic(btn, operand) {
    if(btn.innerHTML === operand) {
        if (firstTry === false) {
            operator = operand;
            firstTry = true;
            trigger  = true;
            firstTerm = parseFloat(input.value)
        } else {
            trigger  = true;
            secondTerm = parseFloat(input.value)
            total = runOperation(operator, firstTerm, secondTerm)
            input.value = total;
            firstTerm = total;
            operator = operand;
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if( isNumber.test(button.innerHTML)) {
            // Removes the default zero once a number is pressed
            if(input.value === "0") {
                input.value = "";
            }
            if (trigger === true) {
                input.value = "";
                trigger = false;
            }
            
            let arr = [...input.value];
            arr.push(button.innerHTML); 
            arr = arr.join("");
            arr = maxCharacterLength(arr, 15)

            arr = arr.replace(/\,/g,'');
            arr = parseFloat(arr);
            arr = arr.toLocaleString("en-US", { maximumFractionDigits: 19 })
            console.log(arr)
           
            input.value = arr; 
        }
        if(button.innerHTML === ".") {
            let arr = [...input.value];
            arr.push(button.innerHTML);
            arr = arr.join("");
            arr = maxCharacterLength(arr, 15)

            input.value =  arr; 
            checkForTwoDecimals(input); 
        }
        mathLogic(button, "+");
        mathLogic(button, "-");
        mathLogic(button, "x");
        mathLogic(button, "/");
        if(button.innerHTML === "DEL") {
            deleteNumber(input);  
        }
        if(button.innerHTML === "RESET") {
            reset();
        }
        if(button.innerHTML === "=") {
            equalsLogic("+")
            equalsLogic("-")
            equalsLogic("x")
            equalsLogic("/")
        }
    })
});


