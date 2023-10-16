var res = document.getElementById('result');
var clr = document.getElementById('clear-btn');
var currentNum = '';
var currentOp = '';
var Operator = ['+','-','*','/'];
var enterBtn = document.getElementById('enterBtn');
var dotBtn = false;
var container = document.querySelector('.container');
container.addEventListener('click', valfun);

function valfun(e) {
    // using event delegation 
    if (!(e.target && e.target.tagName === 'BUTTON')) return ;

    // Clear button for  clear the display
        if (e.target.textContent === 'C') {
                clear();
                return;
        }

    // Eneter or equal button for calculate result

        if(e.target.textContent === 'Enter'){
            calculateResult();
            return;
        }


        // for  operator

        if (e.target.textContent === '+' || e.target.textContent === '-' || e.target.textContent === '*' || e.target.textContent === '/') {
            handleOperatorClick(e.target.textContent);
            return;
        }

         //for dot 

        else if (e.target.textContent === '.'){
            handleDotClick(e.target.value);
            return;

        }
         
        // for number 

        else {
            handleNumberClick(e.target.value);
            return;
        }
         
    }


// for clear button

function clear() {
    res.value = '';
    currentNum = '';
    currentOp = '';
    dotBtn = false;
}

// handling operator click
function handleOperatorClick(operator){
    if(!(currentNum  || currentOp ) ) return ;
       
            calculateResult();
        
        currentOp = operator;
        res.value = currentNum + currentOp;
        currentNum = '';
        dotBtn = false;
    
 }

// handling number click

function handleNumberClick(value){

    currentNum += value;
    res.value += value;
  }


// handling the dot click

function handleDotClick(value){
    if(!dotBtn) {
        currentNum += value;
        res.value += value;
        dotBtn = true ;
    }
  }

  // calculating result 
function calculateResult() {
    if (currentNum !== '' && currentOp !== '') {
        console.log('inside calculate function current num', parseFloat(currentNum));
        var result;
        var number1 = parseFloat(res.value.split(currentOp));
        console.log(`number 1 is ${number1}`);
        var number2 = parseFloat(currentNum);
        console.log(`number 2 is ${number2}`);

        switch (currentOp) {
            case '+':
                result = number1 + number2;
                console.log(`result of addition = ${result}`);
                break;
            case '-':
                result = number1 - number2;
                console.log(`result subtraction = ${result}`);
                break;
            case '*':
                result = number1 * number2;
                console.log(`result multiplication = ${result}`);
                break;
            case '/':
                if (number2 === 0) {
                    res.value = 'Error';
                    return;
                }
                result = number1 / number2;
                console.log(`result results of division = ${result}`);
                break;
            default:
                break;
        }

        res.value = result; // Update the display correctly
        currentNum = result;
        console.log(`current number is ${currentNum}`);
        currentOp = '';
    }
}


