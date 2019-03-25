const toC = (temp) => {
    let convertedTemp = ((temp - 32) / 1.8);
    let radioValue = document.querySelector('input[type = "radio"]:checked').value;
    domStringBuilder(convertedTemp, radioValue);
};

const toF = (temp) => {
    let convertedTemp = ((temp * 1.8) + 32);
    let radioValue = document.querySelector('input[type = "radio"]:checked').value;
    domStringBuilder(convertedTemp, radioValue);
};


//print function which selects an element on the HTML page by its id and sets that element's element to a designated variable
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//function which builds HTML string and prints it to the DOM by calling printToDom funcion

const domStringBuilder = (finalTemperature, unit) => {
    let domString = '';
    domString += `<h2>${finalTemperature}${unit}</h2>`;
    printToDom('tempOutput', domString);
};

const determineConverter = (event) => {
    let tempInputValue = document.getElementById('tempInput').value;
    if (document.querySelector('input[type = "radio"]:checked').value === 'C') {
        toC(tempInputValue);
    } else {
        toF(tempInputValue);
    }
};

const buttonListener = () => {
    document.getElementById('convertButton').addEventListener('click', determineConverter);
};

const init = () => {
    buttonListener();
};
init();