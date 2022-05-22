const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
    const ingredElement = document.createElement('li');
    ingredElement.textContent = ingredient;
    ingredElement.classList.add('item');
  return ingredElement;
  });

list.append(...elements);

