const allBtn = document.querySelectorAll('.calculator-btn button');

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');

const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');

const previousInput = document.querySelector('.previous-input');
const currentInput = document.querySelector('.current-input');

const signBtn = document.querySelector('[data-sign]') 

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

    delete(){
        this.currentInput = this.currentInput.slice(0,this.currentInput.length-1);
    }

    appendNumber(e){

        this.number = e.target.textContent;

        if(this.currentInput.includes('.') && this.number === ".") return;

        else this.currentInput += this.number;
        

    }

    appendOperator(e){
        
        this.operator = e.target.textContent;
        
        if(this.previousInput === "" && this.currentInput === "") return;

        if(this.previousInput === ""){
            this.previousInput = this.currentInput + this.operator;
            this.currentInput = "";
        }
        

        if((this.previousInput.includes("+") || this.previousInput.includes("-") 
        || this.previousInput.includes("*") || this.previousInput.includes("/")) 
        && this.currentInput !== "") {

            let operator = this.previousInput.slice(this.previousInput.length-1);

            if(operator === "+") this.currentInput = parseFloat(this.previousInput) + parseFloat(this.currentInput);
            else if(operator === "-") this.currentInput = parseFloat(this.previousInput) - parseFloat(this.currentInput);
            else if(operator === "*") this.currentInput = parseFloat(this.previousInput) * parseFloat(this.currentInput);
            else if(operator === "/") this.currentInput = parseFloat(this.previousInput) / parseFloat(this.currentInput);
    
            this.previousInput = this.currentInput + this.operator;
            this.currentInput = "";
        }
        
        
    }

    operation(){

        if(this.operator === "+") this.currentInput = parseFloat(this.previousInput) + parseFloat(this.currentInput);
        else if(this.operator === "-") this.currentInput = parseFloat(this.previousInput) - parseFloat(this.currentInput);
        else if(this.operator === "*") this.currentInput = parseFloat(this.previousInput) * parseFloat(this.currentInput);
        else if(this.operator === "/") this.currentInput = parseFloat(this.previousInput) / parseFloat(this.currentInput);
    
        this.previousInput = "";
        this.currentInput = this.currentInput.toString();

    }

    appendSign(){
        if(this.currentInput.indexOf("-") === 0) this.currentInput = this.currentInput.slice(1,this.currentInput.length);
        else this.currentInput = "-" + this.currentInput;
    }


    display(){
        this.currentInputTxt.value = this.currentInput;
        this.previousInputTxt.value = this.previousInput;
    }

}

const calculator = new Calculator(previousInput,currentInput);


numberBtn.forEach(btn => btn.addEventListener('click',e=>{
    calculator.appendNumber(e);
}))

operatorBtn.forEach(btn => btn.addEventListener('click',e=>{
    calculator.appendOperator(e);
}))

equalsBtn.addEventListener('click',e=>{
    calculator.operation();
});

deleteBtn.addEventListener('click',e=>{
    calculator.delete();
});

clearBtn.addEventListener('click',e=>{
    calculator.clear();
});

signBtn.addEventListener('click',e=>{
    calculator.appendSign();
})

allBtn.forEach(btn=>btn.addEventListener('click',e=>{
    calculator.display();
}));
