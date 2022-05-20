const textInput = document.querySelector("#validation-input");
textInput.className = "#validation-input"; 

const inputTextValid = () => {

    if (Number(textInput.value.trim().length) === Number(textInput.dataset.length)) {
        textInput.classList.toggle("valid");
    } else {
        textInput.classList.toggle("invalid");
    }
};

textInput.addEventListener("blur", inputTextValid);


