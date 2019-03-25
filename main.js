//function which converts the temperature input's value from Fahrenheit to Celsius, finds the value of the checked radio button, and passes the converted temperature and the radio button's value to the domStringBuilder function, which toC calls
const toC = (temp) => {
    let convertedTemp = ((temp - 32) / 1.8).toFixed(1);
    let radioValue = document.querySelector('input[type = "radio"]:checked').value;
    domStringBuilder(convertedTemp, radioValue);
};

//function which converts the temperature input's value from Celsius to Fahrenheit, finds the value of the checked radio button, and passes the converted temperature and the radio button's value to the domStringBuilder function, which toF calls
const toF = (temp) => {
    let convertedTemp = ((temp * 1.8) + 32).toFixed(1);
    let radioValue = document.querySelector('input[type = "radio"]:checked').value;
    domStringBuilder(convertedTemp, radioValue);
};


//print function which selects an element on the HTML page by its id and sets that element's element to a designated variable
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//function which passes in two values and uses them to build an HTML string and prints it to the DOM by calling printToDom funcion
const domStringBuilder = (finalTemperature, unit) => {
    let domString = '';
    let answerColorClass
    if (unit === 'C' && finalTemperature >= 32) {
        answerColorClass = 'red';
    } else if (unit === 'F' && finalTemperature >= 90) {
        answerColorClass = 'red';
    } else if (unit === 'C' && finalTemperature <= 0) {
        answerColorClass = 'blue';
    } else if (unit === 'F' && finalTemperature <= 32) {
        answerColorClass = 'blue';
    } else if (unit === 'C' && finalTemperature > 0 && finalTemperature < 32) {
        answerColorClass = 'green';
    } else if (unit === 'F' && finalTemperature > 32 && finalTemperature < 90) {
        answerColorClass = 'green';
    }

    domString += `<h2 class='${answerColorClass}'>${finalTemperature}${unit}</h2>`;
    printToDom('tempOutput', domString);
};

//function finds the value of the selected input and passes it into the called function
//function calls either toC or toF, depending on which radio button is selected
const determineConverter = (event) => {
    let tempInputValue = document.getElementById('tempInput').value;
    if (document.querySelector('input[type = "radio"]:checked').value === 'C') {
        toC(tempInputValue);
    } else {
        toF(tempInputValue);
    }
};

const clear = () => {
    document.getElementById('tempInput').value = '';
    document.getElementById('tempOutput').innerHTML = '';
};

const buttonListener = () => {
    document.getElementById('convertButton').addEventListener('click', determineConverter);
    document.getElementById('clearButton').addEventListener('click', clear);
    document.getElementById('tempInput').addEventListener('keyup', (event) => {
        if (event.code === 'Enter') {
            determineConverter();
        }
    })
};

const init = () => {
    buttonListener();
};
init();