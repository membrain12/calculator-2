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
    display.textContent = displayValue;
    displayValue = "";
});

numbers.forEach(number => {
    number.addEventListener('click', e => {  
        displayValue += number.textContent;
        display.textContent = displayValue;
    });
});

decimal.addEventListener('click', () => {
    if (displayValue.indexOf('.') == -1) {
        displayValue += decimal.textContent;
        display.textContent = displayValue;
    }
});

operations.forEach(op => {
    op.addEventListener('click', e => {
        
        firstNum = displayValue;
        operation = op.textContent;
        
        displayValue = '';
        display.textContent = displayValue;
    });
});


let firstNum;
let operation;
let secNum;

let displayValue = '';