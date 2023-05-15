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

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput ('+',initialResult,enteredNumber); 
    
    const logEntry= {
        operation : 'ADD',
        prevResult: initialResult,
        number : enteredNumber,
        result: currentResult,

}
logEntries.push(logEntry);
    console.log(logEntries);
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


/*
let numbers = [10, 3, -1];

function solve() {
    numbers.push(8);
    numbers.push(2);
    return numbers;
};
console.log(solve());
*/