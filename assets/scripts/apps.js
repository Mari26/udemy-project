const defaultResult = 0;

let currentResult = defaultResult;
let logEntries =[] ;

// Gets input from input field
function getUserNumberInput(){
return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, CulcNumber){
    const calcDescreption =`${resultBeforeCalc} ${operator} ${CulcNumber}`;
    outputResult (currentResult,calcDescreption); 
}
function writeTolog (operationIdentifier,prevResult,operationNumber,rnewResult){
    const logEntry= {
        operation : operationIdentifier,
        prevResult: prevResult,
        number : operationNumber,
        result: rnewResult,

}
logEntries.push(logEntry);
    console.log(logEntries);
     
}

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();

    if (calculationType==='ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    }else if (calculationType==='SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    }else if (calculationType==='MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator= '*';
    }else if (calculationType==='DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator= '/';
    }
    const initialResult = currentResult;
    let mathOperator;
    
if (calculationType != 'ADD' && 
calculationType != 'SUBTRACT' && 
calculationType != 'MULTIPLY'&&  
calculationType != 'DIVIDE' || 
!enteredNumber)
{
    return;
}
    createAndWriteOutput (mathOperator,initialResult,enteredNumber); 
    writeTolog(calculationType,initialResult,enteredNumber,currentResult);

}


function add(){

    calculateResult('ADD');
    
}

/*
currentResult = add (2,4);
let description = `${currentResult} + "სრული სიგიჟე"`
outputResult (currentResult,'bbgb');*/

function subtract (){
    calculateResult('SUBTRACT');
}

function multiply (){
    calculateResult('MULTIPLY'); 
  
}


function divide (){
    calculateResult('DIVIDE'); 
    
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


/*
let numbers = [10, 3, -1];

function solve() {
    numbers.push(8);
    numbers.push(2);
    return numbers;
};
console.log(solve());
*/