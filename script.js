class Calculator{

    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear() //resets the inputs.
    }

    clear() {

    }

    delete() {

    }

    appendNumber(number) { //determines what will occur every time a user clicks on a number to add to the display

    }

    chooseOperation(operation) {

    }

    compute() { //takes the values inside the calculator and displays the result.

    }

    updateDisplay() {

    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')