// Import stylesheets
import container from './container';
import './style.css';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Awilix Typescript</h1>`;

const User = container.resolve('user');
const DateP = container.resolve('dateP');

const getTodos = async (appDiv) => {
  const resultado = await DateP.todos();
  const HTML = resultado.data.map((el) => {
    return (appDiv.innerHTML += `<li>${el.title}</li>`);
  });
};
appDiv.innerHTML += `<p>${User.getFecha()}<p>`;

getTodos(appDiv);
