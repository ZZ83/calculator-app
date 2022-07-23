export function runOperation(operator, a, b) {
    if(operator === "+") return a + b;
    if(operator === "-") return a - b;
    if(operator === "x") return a * b;
    if(operator === "/") return a / b;
}

export function maxCharacterLength(string, length) {
    if (string.length > length) {
        return string.substring(0, length);
    } else {
        return string;
    }
}

export function checkForTwoDecimals(input) {
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

export function deleteNumber(input) {
    let value = input.value;
    value = value.split("");
    value.pop();
    value = value.join("");
    value = value.replace(/\,/g,'');
    // value = parseFloat(value);
    value = value.toLocaleString("en-US", { maximumFractionDigits: 19 })
    value = value.toString();
    if (value === "NaN") {
        value = "";
    }
    input.value = value;
}