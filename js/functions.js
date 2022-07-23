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
    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    value = value;
    if (value === "NaN") {
        value = "";
    }
    input.value = value;
}


export function removeCommasFrom(string) {
    return string.replace(/\,/g,'');
}

export function addCommasTo(string) {
    return string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function convertToFloat(string) {
    let str = string;
    str = removeCommasFrom(str);
    str = parseFloat(str);
    return str;
}