var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
//outputDiv.innerText = "Dheeraj"



function clickHandler() {
    outputDiv.innerText = "dheeraj " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler) 

