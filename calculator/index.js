const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');

const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');

const previousInput = document.querySelector('.previous-input');
const currentInput = document.querySelector('.current-input');


class Calculator{
    constructor(previousInput,currentInput){
    
        this.previousInputTxt = previousInput;
        this.currentInputTxt = currentInput;
        // this.clear();
        this.previousInput = "";
        this.currentInput = "";
        this.operator = undefined;
    }

    clear(){
        this.previousInput = "";
        this.currentInput = "";
        this.operator = undefined;
    }

    appendNumber(e){
        this.number = e.target.textContent;
        this.currentInput += this.number;

    }

    appendOperator(e){
        
        this.operator = e.target.textContent;
        
        if(this.previousInput === ""){
            this.previousInput = this.currentInput + this.operator;
            this.currentInput = "";
        }
    }

    operation(){

        this.previousInput = parseFloat(this.previousInput);
        this.currentInput = parseFloat(this.currentInput);

        if(this.operator === "+") this.currentInput = this.previousInput + this.currentInput;
        else if(this.operator === "-") this.currentInput = this.previousInput - this.currentInput;
        else if(this.operator === "*") this.currentInput = this.previousInput * this.currentInput;
        else if(this.operator === "/") this.currentInput = this.previousInput / this.currentInput;

        this.previousInput = "";

    }

    display(){
        this.currentInputTxt.value = this.currentInput;
        this.previousInputTxt.value = this.previousInput;
    }

}

const calculator = new Calculator(previousInput,currentInput);

numberBtn.forEach(btn => btn.addEventListener('click',e=>{
    calculator.appendNumber(e);
    calculator.display();
}))

operatorBtn.forEach(btn => btn.addEventListener('click',e=>{
    calculator.appendOperator(e);
    calculator.display();
}))

equalsBtn.addEventListener('click',e=>{
    calculator.operation();
    calculator.display();
});