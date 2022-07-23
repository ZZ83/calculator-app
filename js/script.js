import { changeTheme }  from './themeChange.js'
import { runOperation, maxCharacterLength, checkForTwoDecimals, deleteNumber } from './functions.js'

let total = 0;
let firstTerm  = 0;
let secondTerm = 0;
let trigger   = false;
let firstTry  = false;
let operator;
const isNumber = new RegExp('\\d');
const input    = document.querySelector('#input');
const buttons  = document.querySelectorAll('.btn');



export function reset() {
    total       = 0;
    firstTerm   = 0;
    secondTerm  = 0;
    trigger     = false;
    firstTry    = false;
}

function equalsLogic(operand) {
    if(operator === operand) {
        secondTerm = parseFloat(input.value)
        total = runOperation(operator, firstTerm, secondTerm)
        input.value = total;
        reset();
    }
}

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
            console.log(button.innerHTML);
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
            // arr = parseFloat(arr);
            arr = arr.toLocaleString("en-US", { maximumFractionDigits: 19 })
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
            input.value = 0;
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

changeTheme.changeThemeColor();

