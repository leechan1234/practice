const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const body = document.querySelector('body');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purle'];

setInterval(() => {
    const num1 = Math.floor(Math.random() * colors.length);
    const num2 = Math.floor(Math.random() * colors.length);
    const num3 = Math.floor(Math.random() * colors.length);

    h1.style.color = colors[num1];
    h2.style.color = colors[num2];
}, 100);