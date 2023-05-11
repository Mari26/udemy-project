const defaultResult = 0;

let currentResult = defaultResult;

function getUserNumberInput(){
return parseInt(userInput.value);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const calcDescreption =`${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult (currentResult,calcDescreption);    
}

/*
currentResult = add (2,4);
let description = `${currentResult} + "სრული სიგიჟე"`
outputResult (currentResult,'bbgb');*/

addBtn.addEventListener('click', add);



