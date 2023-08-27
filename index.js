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
let currentDisplay = '0';
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
            dotBtn.disabled = false;
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
            if(currentDisplay == 0 && operation == '/') {
                devideByZero();
                return;
            }
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
    if(currentDisplay == 0 && operation == '/') {
        devideByZero();
        return;
    }
    if(! firstOperation){
        if(changeSecondNum) {
            secondNum = currentDisplay;
            changeSecondNum = false;
        }
        resultScreen.textContent = operate(firstNum, secondNum, operation);
        currentDisplay = resultScreen.textContent;
    }
    firstNum = currentDisplay;
    erase = true; 
    firstOperation = true;
});

const signBtn = document.querySelector('.sign');
signBtn.addEventListener('click', () => {
    if(currentDisplay[0] == '-'){
        currentDisplay = currentDisplay.substring(1);
    }
    else {
        currentDisplay = `-${currentDisplay}`;
    }
    resultScreen.textContent = currentDisplay;
})

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear);
function clear(){
    currentDisplay = '0';
    resultScreen.textContent = currentDisplay;
    operation = '';
    firstNum = NaN;
    secondNum = NaN;
    erase = false;
    firstOperation = true;
    changeSecondNum = true;
}

function devideByZero() {
    alert("Math Error! Can't devide by 0. Enter another number.");
    erase = true;
}

const backspaceBtn = document.querySelector('.backspace');
backspaceBtn.addEventListener('click', () => {
    switch (currentDisplay.length) {
        case 0:
            currentDisplay = '0';
            break;
        case 1:
            currentDisplay = '0';
            break;
        default:
            currentDisplay = currentDisplay.slice(0, currentDisplay.length - 1);
            break;
    }
    resultScreen.textContent = currentDisplay;
})

const dotBtn = document.querySelector('.dot');
dotBtn.addEventListener('click', () => {
    if(currentDisplay == ''){
        currentDisplay = '0.';
    }
    else currentDisplay = `${currentDisplay}.`;
    resultScreen.textContent = currentDisplay;
    dotBtn.disabled = true;
})




window.addEventListener('keydown', (e) => {
    console.log(e.key);
    document.querySelectorAll('button').forEach(btn => {
        if(btn.textContent.toLowerCase() == e.key){
            btn.click();
            return;
        }
    })
    switch (e.key.toLowerCase()) {
        case 'enter':
            equalBtn.click();
            break;
            
        case 'backspace':
            backspaceBtn.click();
            break;
        
        case 'c':
            clearBtn.click();
            break;

        default:
            break;
        }
                
})
