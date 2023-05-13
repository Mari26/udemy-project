const defaultResult = 0;

let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput(){
return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, CulcNumber){
    const calcDescreption =`${resultBeforeCalc} ${operator} ${CulcNumber}`;
    outputResult (currentResult,calcDescreption); 
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput ('+',initialResult,enteredNumber); 
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
}

function multiply (){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput ('*',initialResult,enteredNumber);  
}


function divide (){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput ('/',initialResult,enteredNumber); 
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




