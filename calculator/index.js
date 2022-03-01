const allBtn = document.querySelectorAll('.calculator-btn button');

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');

const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');

const previousInput = document.querySelector('.previous-input');
const currentInput = document.querySelector('.current-input');

const signBtn = document.querySelector('[data-sign]');

const piBtn = document.querySelector('[data-pi]');
const percentBtn = document.querySelector('[data-percent]');
const exponentBtn = document.querySelector('[data-exponent]');
const squareRootBtn = document.querySelector('[data-square-root]');
const squareBtn = document.querySelector('[data-square]');
const lnBtn = document.querySelector('[data-ln]');
const logBtn = document.querySelector('[data-log]');
const factorialBtn = document.querySelector('[data-factorial]');

const sinBtn = document.querySelector('[data-sin]');
const cosBtn = document.querySelector('[data-cos]');
const tanBtn = document.querySelector('[data-tan]');

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

        
        if(this.previousInput.includes("^")) {
            this.currentInput = Math.pow(parseFloat(this.previousInput),parseFloat(this.currentInput)).toString();
            this.previousInput = "";
        }
        else if(this.operator === "+") this.currentInput = parseFloat(this.previousInput) + parseFloat(this.currentInput);
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

    appendPi(){
        this.currentInput = Math.PI;
    }

    percentage(){
        this.currentInput = this.currentInput/100;
    }

    sine(){
        this.currentInput = Math.sin(this.currentInput).toString();
    }

    cosine(){
        this.currentInput = Math.cos(this.currentInput).toString();
    }

    tangent(){
        this.currentInput = Math.tan(this.currentInput).toString();
    }

    exponent(){
        
        this.previousInput = this.currentInput + "^";
        this.currentInput = "";
    }

    squareRoot(){
        this.currentInput = Math.sqrt(this.currentInput).toString();
    }

    square(){
        this.currentInput = Math.pow(this.currentInput,2).toString();
    }

    naturalLogarithmic(){
        this.currentInput = Math.log(this.currentInput).toString();
    }

    logarithmic(){
        this.currentInput = Math.log10(this.currentInput).toString();
    }

    factorial(){

        let factorial = 1;

        for(let i=1; i<=this.currentInput; i++){
            factorial *= i;
        }

        this.currentInput = factorial.toString();
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

piBtn.addEventListener('click',e=>{
    calculator.appendPi();
})

percentBtn.addEventListener('click',e=>{
    calculator.percentage();
})

sinBtn.addEventListener('click',e=>{
    calculator.sine();
})

cosBtn.addEventListener('click',e=>{
    calculator.cosine();
})

tanBtn.addEventListener('click',e=>{
    calculator.tangent();
})

exponentBtn.addEventListener('click',e=>{
    calculator.exponent();
})

squareRootBtn.addEventListener('click',e=>{
    calculator.squareRoot();
})

squareBtn.addEventListener('click',e=>{
    calculator.square();
})

lnBtn.addEventListener('click',e=>{
    calculator.naturalLogarithmic();
})

logBtn.addEventListener('click',e=>{
    calculator.logarithmic();
})

factorialBtn.addEventListener('click',e=>{
    calculator.factorial();
})

allBtn.forEach(btn=>btn.addEventListener('click',e=>{
    calculator.display();
}));
