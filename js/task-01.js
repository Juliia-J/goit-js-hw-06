const categoriesEl = document.querySelectorAll(".item");
console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach(item => {
    const h2 = item.querySelector('h2');
    const items = item.querySelectorAll('li');
    
    console.log('Category:', h2.textContent);
    console.log('Elements:', items.length);
});

