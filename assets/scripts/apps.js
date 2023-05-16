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

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput ('+',initialResult,enteredNumber); 
    writeTolog('ADD',initialResult,enteredNumber,currentResult);
    
}

/*
currentResult = add (2,4);
let description = `${currentResult} + "სრული სიგიჟე"`
outputResult (currentResult,'bbgb');*/

function subtract (){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput ('-',initialResult,enteredNumber);  
    writeTolog('SUBTRACT',initialResult,enteredNumber,currentResult);
}

function multiply (){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput ('*',initialResult,enteredNumber);  
    writeTolog('MULTIPLY',initialResult,enteredNumber,currentResult);
}


function divide (){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput ('/',initialResult,enteredNumber); 
    writeTolog('DIVIDE',initialResult,enteredNumber,currentResult);
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