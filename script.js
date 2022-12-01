let firstOperand = '';
let secondOperand = '';
let operator = '';

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const currentOperationScreen = document.querySelector('.currentOperationScreen');
const previousOperationScreen = document.querySelector('.previousOperationScreen');
const clearScreenButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const equalButton = document.querySelector('.equal')

numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        appendNumber(number.innerHTML);
        updateScreen();
    });
})

operationButtons.forEach(operation => {
    operation.addEventListener('click', () => {
        selectOperator(operation.innerHTML);
        updateScreen();
    })
})

clearScreenButton.addEventListener('click', ()=>{
    clearScreen()
})

equalButton.addEventListener('click', () => {
    evaluate();
    updateScreen();
})

deleteButton.addEventListener('click', ()=>{
    deleteNumber();
})

function clearScreen() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    updateScreen();
}

function deleteNumber() {
    firstOperand = firstOperand.toString().slice(0, -1);
    updateScreen();
}

function appendNumber(number) {
    if (number === '.' && firstOperand.includes('.')) return;
    if(firstOperand.length > 5) return;
    firstOperand = firstOperand.toString() + number.toString();
}

function selectOperator(operation) {
    if (firstOperand === '') return;
    if (secondOperand !== '') {
        evaluate();
    }
    secondOperand = firstOperand;
    firstOperand = '';
    operator = operation;
}

function evaluate() {
    let calculation = 0;
    first = parseFloat(firstOperand);
    second = parseFloat(secondOperand);
    if(isNaN(first) || isNaN(second)) return;
    switch (operator) {
        case '+':
            calculation = second + first;
            break;
        case '-':
            calculation = second - first;
            break;
        case '÷':
            calculation = second / first;
            break;
        case '×':
            calculation = second * first;
            break;
        default:
            return;
    }
    firstOperand = calculation;
    operator = '';
    secondOperand = '';
}

function updateScreen() {
    currentOperationScreen.innerHTML = firstOperand;
    previousOperationScreen.innerHTML = `${secondOperand} ${operator}`;
}
