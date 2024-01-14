import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const copyPasswordEl = document.querySelector('.copybtn');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

copyPasswordEl.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});
