// script.js
let count = 0;

const btn = document.getElementById('btn');
const out = document.getElementById('out');

btn.addEventListener('click', () => {
  count++;
  out.textContent = `Нажатий: ${count}`;
});
