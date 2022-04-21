const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const elements = ingredients
  .map((ingredient) => `<li class="list-item">${ingredient}</li>`)
  .join("");

console.log(elements);

list.innerHTML = elements;

