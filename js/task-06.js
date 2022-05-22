const textInput = document.querySelector("#validation-input");
textInput.className = "#validation-input"; 

const inputTextValid = () => {

    if (Number(textInput.value.trim().length) === Number(textInput.dataset.length)) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
};

textInput.addEventListener("blur", inputTextValid);


