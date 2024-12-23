
// const output  = document.querySelector('.output');

// let currentInput = '';
// let previousNumber = '';
// let operation = null;
// let display = '';

// //function to add digit to the current input and display
// const appendNumber = (number) =>{
//     if(currentInput.length <10){
//         currentInput += number;
//         display = display + number;
//         console.log(display);
//         updateDisplay(display);
//     }
   
// }
// const updateDisplay = (value) =>{
//     output.textContent = value;
// }

// //function to perform the selected operation
// const setOperation  = (op) => {
//     if (currentInput == '')
//         return ; 

//     if (previousNumber !== ''){
//         calculate();
//     }

//     operation =  op ;
//     previousNumber = currentInput;
//     currentInput = '';
    
//     display =  previousNumber + operation ;
//     console.log(display);
//     updateDisplay(display);
//     };

//     const calculate =() => {
//         let result; 
//         const prev = parseFloat(previousNumber);
//         const curr = parseFloat(currentInput);

//         if (isNaN(prev) || isNaN(curr)) 
//             return;

//         switch(operation) {
//             case '+':
//                 result = prfev + curr;
//                 break; 
//             case '-':
//                 result = prev - curr;
//                 break;  
//             case '*':
//                 result = prev * curr;
//                 break;  
//             case '/':
//                 if (curr === 0) return updateDisplay('Error : Division by zero');
//                     result = prev / curr;
//                     break;    
                    
//                 default:
//                     return ;
//         }

//     updateDisplay (result);
//     previousNumber = '';
//     currentInput = result;
//     }

//     const clearDisplay = () => {
//         currentInput = '';
//         previousNumber = '';
//         operation = null;
//         result = '';
//         display = '';
//         updateDisplay('');
//     }

//     const deleteNumber = () =>{
//         if(currentInput === ''){
//             return;
//         }
//         currentInput = currentInput.slice(0, -1);
//         updateDisplay(currentInput);
//     }

const output  = document.querySelector('.output');

let currentNumber = '';
let previousNumber = '';
let operation = null;
let display = '';

//function to add digit to the current input and display
const appendNumber = (number) =>{
    if(currentNumber.length <10){
        currentNumber += number;
        display = display + number;
        console.log(display);
        updateDisplay(display);
    }
   
}
const updateDisplay = (value) =>{
    output.textContent = value;
}

// const setOperation = (op) =>{
//     if (currenNumber = '')return ;
//     if(previousNumber !== ''){
//         calculate();
//     }
//     operation = op;
//     console.log(display);
//     display = display + operation;
//     previousNumber = currentNumber;
//     currentNumber = '';
//     updateDisplay(display);

// }
const setOperation = (op) => {
    if (currentNumber === '') return;
    
    if (previousNumber !== '') {
        calculate(); 
    }

    operation = op;
    previousNumber = currentNumber; 
    currentNumber = ''; 
    
    display = previousNumber + operation; 
    console.log(display);
    updateDisplay(display);
};
const calculate = () =>{
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    
    if(isNaN(prev) || isNaN(current)) return;

    switch(operation){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if(current === 0) return updateDisplay('Error: Division by zero');
            result = prev / current;
            break;
        default:
            return;
    }
    updateDisplay(result);
    previousNumber = '';
    currentNumber = result;
}

const clearDisplay = () =>{

    currentNumber = '';
    previousNumber = '';
    operation = null;
    result = '';
    display = '';
    updateDisplay('');
}

const deleteNumber = () =>{
    if(currentNumber === ''){
        return;
    }
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay(currentNumber);
}



    