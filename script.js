let displayValue = '0';
let currentOperation = null;
let firstOperand = null;
let currentOperator = null;
let calculationHistory = [];



function updateDisplay() {
    const display = document.getElementById('display');
    

    if (currentOperation !== null && currentOperation !== '=') {
        
        display.textContent = firstOperand + ' ' + currentOperation + ' ' + displayValue;
    } else if (currentOperation !== null && currentOperation !== '=' && operator === '*') {
        display.textContent = firstOperand + ' ' + operator + ' ' + displayValue;
    }
    else {
        display.textContent = displayValue;
    }
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue = number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function setOperation(operator) {
    if (currentOperation !== null) {
        calculate();
    }
    currentOperation = operator;
    if (currentOperation === '*') {
        currentOperation = 'x';
    }
    firstOperand = parseFloat(displayValue);
    displayValue = '0';
    const display = document.getElementById('display');
    display.textContent = firstOperand + ' ' + currentOperation;
}

function calculate() {
    if (currentOperation === null || currentOperation === '=') {
        return;
    }

    const secondOperand = parseFloat(displayValue);
    let result;

    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case 'x':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand !== 0) {
                result = firstOperand / secondOperand;
            } else {
                alert('Error: Division by zero');
                clearAll();
                return;
            }
            break;
    }

    // Add the calculation to the history
    calculationHistory.push(`${firstOperand} ${currentOperation} ${secondOperand} = ${result}`);

    displayValue = result.toString();
    displayHistory = result.toString();
    currentOperation = '=';
    updateDisplay();
    updateHistory();
}

function clearAll() {
    displayValue = '0';
    currentOperation = null;
    firstOperand = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}
function backspace() {
    if (displayValue.length >= 0) {
        displayValue -= displayValue;
    } else {
        displayValue = '0';
    }
    updateDisplay();
}
// Initialize the display
updateDisplay();

function updateHistory() {
    const display = document.getElementById('display');
    display.textContent = displayHistory;
}

