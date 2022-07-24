const changeTheme = {
    root:         document.documentElement,
    themeButtons: document.querySelectorAll('.select__btn'),
    themes: [
        {
            "--primary-color":     `#ffffff`,
            "--main-background":   `#3A4663`,
            "--screen-background": `#181F33`,
            "--toggle-background": `#242D44`,
            "--keypad-background": `#242D44`,
            "--primary-keys-background":  `#EAE3DC`,
            "--primary-keys-text-color": ` #434A59`,
            "--primary-keys-box-shadow":  `#B3A497`,
            "--primary-keys-hover-color": `#ffffff`,
            "--secondary-keys-background":  `#647198`,
            "--secondary-keys-text-color":  `#FFFFFF`,
            "--secondary-keys-box-shadow":  `#414E73`,
            "--secondary-keys-hover-color": `#A2B2E1`,
            "--equal-key-background":  `#D03F2F`, // ALSO THE TOGGLE BUTTON BACKGROUND COLOR
            "--equal-key-text-color":  `#FFFFFF`,
            "--equal-key-box-shadow":  `#93261A`,
            "--equal-key-hover-color": `#F96B5B`, // ALSO THE TOGGLE HOVER COLOR
        },
        {
            "--primary-color":     `#36362C`,
            "--main-background":   `#E6E6E6`,
            "--screen-background": `#EEEEEE`,
            "--toggle-background": `#D2CDCD`,
            "--keypad-background": `#D2CDCD`,
            "--primary-keys-background":  `#E5E4E1`,
            "--primary-keys-text-color": ` #36362C`,
            "--primary-keys-box-shadow":  `#A79E91`,
            "--primary-keys-hover-color": `#ffffff`,
            "--secondary-keys-background":  `#378187`,
            "--secondary-keys-text-color":  `#FFFFFF`,
            "--secondary-keys-box-shadow":  `#1B6066`,
            "--secondary-keys-hover-color": `#62B5BC`,
            "--equal-key-background":  `#C85402`, // ALSO THE TOGGLE BUTTON BACKGROUND COLOR
            "--equal-key-text-color":  `#FFFFFF`,
            "--equal-key-box-shadow":  `#873901`,
            "--equal-key-hover-color": `#FF8A38`, // ALSO THE TOGGLE HOVER COLOR
        },
        {
            "--primary-color":     `#FFE53D`,
            "--main-background":   `#17062A`,
            "--screen-background": `#1E0936`,
            "--toggle-background": `#1E0936`,
            "--keypad-background": `#1E0936`,
            "--primary-keys-background":  `#331C4D`,
            "--primary-keys-text-color": ` #FFE53D`,
            "--primary-keys-box-shadow":  `#881C9E`,
            "--primary-keys-hover-color": `#6C34AC`,
            "--secondary-keys-background":  `#56077C`,
            "--secondary-keys-text-color":  `#FFFFFF`,
            "--secondary-keys-box-shadow":  `#BE15F4`,
            "--secondary-keys-hover-color": `#8631AF`,
            "--equal-key-background":  `#00DED0`, // ALSO THE TOGGLE BUTTON BACKGROUND COLOR
            "--equal-key-text-color":  `#1A2327`,
            "--equal-key-box-shadow":  `#6CF9F1`,
            "--equal-key-hover-color": `#93FFF8`, // ALSO THE TOGGLE BUTTON HOVER COLOR
        },
    ],
    addClassTo(element, klass) {
        element.classList.add(klass);
    },
    removeClassFrom(element, klass) {
        element.classList.remove(klass);
    },
    removeActiveClass() {
        this.themeButtons.forEach(item => {
            this.removeClassFrom(item, "active-theme")
        })
    },
    // Loop through each CSS color variable property and change the value.
    changeThemeTo(theme) {
        for (let prop in theme){
            this.root.style.setProperty(prop, theme[prop]);
        }
    },
    // Add an event listener on each select theme button that will change the theme color when clicked.
    changeThemeColor() {
        this.themeButtons.forEach((button, index) => {
            button.addEventListener('click', (event) => {
                this.removeActiveClass();
                if(event.target.tagName === "BUTTON") {
                    this.addClassTo(event.target, "active-theme");
                }
                this.changeThemeTo(this.themes[index]);
            })
        });
    }
}

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
    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    value = value;
    if (value === "NaN") {
        value = "";
    }
    input.value = value;
}

function removeCommasFrom(string) {
    return string.replace(/\,/g,'');
}

function addCommasTo(string) {
    return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convertToFloat(string) {
    let str = string;
    str = removeCommasFrom(str);
    str = parseFloat(str);
    return str;
}

function reset() {
    total       = 0;
    firstTerm   = 0;
    secondTerm  = 0;
    trigger     = false;
    firstTry    = false;
}

function equalsLogic(operand) {
    if(operator === operand) {
        secondTerm = convertToFloat(input.value);
        total = runOperation(operator, firstTerm, secondTerm)
        input.value = total.toLocaleString();
        reset();
    }
}

function mathLogic(btn, operand) {
    if(btn.innerHTML === operand) {
        if (firstTry === false) {
            operator = operand;
            firstTry = true;
            trigger  = true;
            firstTerm = convertToFloat(input.value);
            console.log(firstTerm);
        } else {
            trigger  = true;
            secondTerm = convertToFloat(input.value);
            console.log(secondTerm);
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
            arr = maxCharacterLength(arr, 15);
            arr = removeCommasFrom(arr);
            if(arr.includes(".")) {
                let firstHalf = parseInt(arr);
                    firstHalf = firstHalf.toString();
                    firstHalf = removeCommasFrom(firstHalf);
                let decimalStr = arr.toString().split('.')[1];
                let secondHalf = decimalStr.split("");
                secondHalf = secondHalf.join("");
                firstHalf = addCommasTo(firstHalf);
                secondHalf = removeCommasFrom(secondHalf);
                arr = firstHalf.concat(".", secondHalf);
                console.log(arr);
                input.value = arr;
            } else {
                arr = addCommasTo(arr);
                input.value = arr; 
            } 
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

