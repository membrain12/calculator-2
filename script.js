function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (n2 == 0) {
        return "Not today!";
    }
    
    return n1 / n2;
}

function operate(op, n1, n2) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    
    if (op == "+") {
        return add(n1, n2);
    } else if (op == "-") {
        return subtract(n1, n2);
    } else if (op == "X") {
        return multiply(n1, n2);
    } else if (op == "÷") {
        return divide(n1, n2);
    } else {
        return;
    }
}

const numbers = Array.from(document.querySelectorAll('.number'));
const operations = Array.from(document.querySelectorAll('.operations'));
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const decimal = document.querySelector('#decimal');

clear.addEventListener('click', e => {
    displayValue = "";
    display.textContent = displayValue;
    firstNum = "";
    operation = "";
    secNum = "";
});

equals.addEventListener('click', () => {
    if (firstNum == "" || operation == "") {
        display.textContent = "ERROR";
    }
    secNum = displayValue;
    displayValue = operate(operation, firstNum, secNum);

    if (displayValue.toString().length > 14) {
        displayValue = displayValue.toString().slice(0, 14);
    }
    display.textContent = displayValue;
    firstNum = displayValue;
    operation = "";
    displayValue = "";
});

numbers.forEach(number => {
    number.addEventListener('click', e => {  
        displayValue += number.textContent;


        if (displayValue.toString().length > 14) {
            displayValue = displayValue.toString().slice(0, 14);
        }
        display.textContent = displayValue;
    });
});

decimal.addEventListener('click', () => {
    if (displayValue.indexOf('.') == -1) {
        displayValue += decimal.textContent;
        if (displayValue.toString().length > 14) {
            displayValue = displayValue.toString().slice(0, 14);
        }
        display.textContent = displayValue;
    }
});

operations.forEach(op => {
    op.addEventListener('click', e => {
        
        if (firstNum != "" && operation != "") {
            secNum = displayValue;
            firstNum = operate(operation, firstNum, secNum);
            operation = op.textContent;
            secNum = "";
            displayValue = firstNum;
            if (displayValue.toString().length > 14) {
                displayValue = displayValue.toString().slice(0, 14);
            }
            display.textContent = displayValue;
            displayValue = "";
        } else {
            firstNum = display.textContent;
            operation = op.textContent;
            
            displayValue = '';
            if (displayValue.toString().length > 14) {
                displayValue = displayValue.toString().slice(0, 14);
            }
            display.textContent = displayValue;
        }
    });
});


let firstNum = '';
let operation = '';
let secNum = '';

let displayValue = '';