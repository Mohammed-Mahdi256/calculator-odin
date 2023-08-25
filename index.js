function add(a, b){
    return a + b;
}
function subs(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function devide(a, b){
    return b === 0 ? undefined : (a/b).toFixed(2);
}

function operate(a, b, o) {
    a = Number(a);
    b = Number(b);
    switch (o) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subs(a, b);
            break;
        case 'X':
            return multiply(a, b);
            break;
        case '/':
            return devide(a, b);

        default:
            return false;
            break;
    }
}



let operation = '';
let firstNum = NaN;
let secondNum = NaN;
let currentDisplay = 0;
let erase = false;
let firstOperation = true;
let changeSecondNum = true;





const resultScreen = document.querySelector('.result-screen');

const digitBtns = document.querySelectorAll('.digit');
digitBtns.forEach(digit => {
    digit.addEventListener('click', () => {
        if(erase) {
            resultScreen.textContent = '';
            currentDisplay = '';
            erase = false;
        }
        

        
        if(resultScreen.textContent == '0') currentDisplay = digit.textContent;
        else currentDisplay = resultScreen.textContent + digit.textContent;

        resultScreen.textContent = currentDisplay;
        changeSecondNum = true;
        
    })
})

const operationBtns = document.querySelectorAll('.operation');
operationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(! firstOperation){
            secondNum = currentDisplay;
            
            resultScreen.textContent = operate(firstNum, secondNum, operation);
            currentDisplay = resultScreen.textContent;
        }
        operation = btn.textContent;
        firstNum = currentDisplay;
        erase = true;
        firstOperation = false;
        changeSecondNum = true;
        
            
    });
});

const equalBtn = document.querySelector('.equal-btn');
equalBtn.addEventListener('click', () => {
    if(! firstOperation){
        if(changeSecondNum) {
            secondNum = currentDisplay;
            changeSecondNum = false;
        }
        if(secondNum == 0 && operation == '/') {
            clear();
            return;
        }
        resultScreen.textContent = operate(firstNum, secondNum, operation);
        currentDisplay = resultScreen.textContent;
    }
    firstNum = currentDisplay;
    erase = true; 
    firstOperation = true;
});


function clear(){

}