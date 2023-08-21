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
    switch (o) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subs(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return devide(a, b);

        default:
            break;
    }
}



let operation = '';
let firstNum = 4;
let secondNum = 66;

operation = '-'
console.log(operate(firstNum, secondNum, operation));
operation = '+'
console.log(operate(firstNum, secondNum, operation));
operation = '*'
console.log(operate(firstNum, secondNum, operation));
operation = '/'
console.log(operate(firstNum, secondNum, operation));
secondNum = 0;
operation = '/'
console.log(operate(firstNum, secondNum, operation));
