
const addListenerDecrementBtn = document.querySelector('[data-action="decrement"]');
const addListenerIncrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;
function decrementClick() {
    counterValue -= 1;
    value.textContent = counterValue; 
};

function incrementClick() {
    counterValue += 1 ;
    value.textContent = counterValue;
};

addListenerDecrementBtn.addEventListener("click", decrementClick);

addListenerIncrementBtn.addEventListener("click", incrementClick);