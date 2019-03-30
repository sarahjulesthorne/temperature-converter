/*This project is a temperature converter application.
The application takes the value of the inputted temperature and passes it into one of two convert functions.
If the Fahrenheit radio button is selected, the Convert button calls toF, which converts the temperature from Celsius to Fahrenheit
If the Celsius radio button is selected, the toC function is called by the Convert button, and the temperature is converted to Celsius
The temperature is then passed into a dom string builder function, along with the value of the radio button that is selected, and the function prints a level 2 heading to the dom with the final temperature
The dom string builder uses conditionals to change the class of the final temperature output, and the CSS changes the color of that output, depending on the range of the temperature's numeric value and scale
When the Clear button ispressed, the input's value and the output's string are both reset to empty strings
Event listeners call the appropriate button click function when either the Convert or the Clear button are pressed*/
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
//function which sets the value of the tempInput and tempOutput to empty strings
const clear = () => {
    document.getElementById('tempInput').value = '';
    document.getElementById('tempOutput').innerHTML = '';
};
//function which adds event listeners to the Convert and Clear buttons, and which adds an event listener to the "enter" keyup event in the tempInput div
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