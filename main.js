//print function which selects an element on the HTML page by its id and sets that element's element to a designated variable
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = () => {
    let domString = '';
    domString += document.getElementById('tempInput').value;
    printToDom('tempOutput', domString);
};

const determineConverter = (event) => {
    domStringBuilder();
    console.log(document.querySelector('input[type="radio"]:checked').value);
    console.log(document.getElementById('tempInput').value);
};

const buttonListener = () => {
    document.getElementById('convertButton').addEventListener('click', determineConverter);
};
const init = () => {
    buttonListener();
};
init();