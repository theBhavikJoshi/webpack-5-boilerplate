import './styles/main.scss';

console.log('Webpack 5!');

const elementToInsert = document.createElement('h3');
elementToInsert.textContent = 'Webpack 5 Boilerplate';

const rootDiv = document.querySelector('#root');

class Animal {
  type = 'Elephant'
}
const anAnimal = new Animal()
// Create paragraph node
const p = document.createElement('p')
p.textContent = `I am an ${anAnimal.type}.`

rootDiv.append(elementToInsert, p);
