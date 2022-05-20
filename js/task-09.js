const color = document.querySelector(".color");
const changeColorButton = document.querySelector('.change-color');
const body = document.querySelector('body');

changeColorButton.addEventListener('click', handleChangeColorBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleChangeColorBtn() {
  body.style.background = getRandomHexColor();
   color.textContent = body.style.background;    
  }

