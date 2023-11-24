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
    if (op == "+") {
        return add(n1, n2);
    } else if (op == "-") {
        return subtract(n1, n2);
    } else if (op == "*") {
        return multiply(n1, n2);
    } else if (op == "/") {
        return divide(n1, n2);
    } else {
        return;
    }
}

let firstNum;
let operation;
let secNum;