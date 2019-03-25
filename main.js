const tempInputValue = document.getElementById('tempInput').value;
const radioValue = document.querySelector('input[type="radio"]:checked').value;

const toC = (temp) => {
return (temp - 32) / 1.8;
};

const toF = (temp) => {
return (temp * 1.8) + 32;
};


//print function which selects an element on the HTML page by its id and sets that element's element to a designated variable
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//function which builds HTML string and prints it to the DOM by calling printToDom funcion

const domStringBuilder = () => {
    let domString = '';
    domString += document.getElementById('tempInput').value;
    printToDom('tempOutput', domString);
};

const determineConverter = (event) => {
    domStringBuilder();
    if (radioValue === 'C') {
toC();
    }
    else {
        toF();
    }

    console.log(document.getElementById('tempInput').value);
};

const buttonListener = () => {
    document.getElementById('convertButton').addEventListener('click', determineConverter);
};

const init = () => {
    buttonListener();
};
init();