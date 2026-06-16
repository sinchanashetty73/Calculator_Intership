const display = document.getElementById("display");

function appendValue(value){

    const current = display.value;

    const operators = ['+','-','*','/','%'];

    const lastChar = current.slice(-1);

    if(
        operators.includes(lastChar) &&
        operators.includes(value)
    ){
        return;
    }

    if(value === "."){

        const parts = current.split(/[\+\-\*\/%]/);

        const currentNumber = parts[parts.length-1];

        if(currentNumber.includes(".")){
            return;
        }
    }

    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        if(display.value.trim() === ""){
            alert("Please enter a value");
            return;
        }

        if(display.value.includes("/0")){
            alert("Cannot divide by zero");
            return;
        }

        const result = eval(display.value);

        display.value = result;

    }
    catch{

        alert("Invalid Expression");
    }
}

/* Keyboard Support */

document.addEventListener("keydown",(event)=>{

    const key = event.key;

    if(
        !isNaN(key) ||
        ['+','-','*','/','%','.'].includes(key)
    ){
        appendValue(key);
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        deleteLast();
    }

    if(key === "Escape"){
        clearDisplay();
    }
});