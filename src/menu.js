import Img1 from './assets/b1.webp';
import Img2 from './assets/b2.webp';
import Img3 from './assets/b3.webp';
import Img4 from './assets/b4.webp';
import Img5 from './assets/b5.webp';

const imgs = [Img1, Img2, Img3, Img4, Img5];
let index = 0;

const createMenu = () => {
  const main = document.querySelector('.main')
  main.innerHTML = ''
  index = 0

  const divFlex = document.createElement('div');
  divFlex.classList.add('menu__container');

  divFlex.appendChild(createItem('AMERICAN PIE', 'Cheesecake de limón, manzana caramelizada, galletas oreo de vainilla.'))
  divFlex.appendChild(createItem('CHEESECAKE', 'Cheesecake de limón, Nutella, frutillas, galletas oreo y crema chantilly.'))
  divFlex.appendChild(createItem('FRUTELLA', 'Doble Nutella, doble frutilla y crema chantilly.'))
  divFlex.appendChild(createItem('STRAWBERRY FIELDS', 'Nutella, manjar, frutillas, plátano y crema chantilly.'))
  divFlex.appendChild(createItem('VOLCANO', 'Sumérgete en este irresistible Waffle hecho con Kit Kat®, donde el delicioso.'))

  main.appendChild(divFlex)
}


const createItem = (name, description) => {

  const div = document.createElement('div')
  div.classList.add('menu__content')

  const img = document.createElement('img');
  img.src = imgs[index];
  img.alt = `${name}`;
  img.classList.add('menu__img')
  index++

  const h3 = document.createElement('h3');
  h3.textContent = `${name}`
  h3.classList.add('menu__title')

  const p = document.createElement('p');
  p.innerText = `${description}`
  p.classList.add('menu__info')

  const button = document.createElement('button')
  button.classList.add('menu__button')
  button.textContent = 'Agregar'

  div.appendChild(img)
  div.appendChild(h3)
  div.appendChild(p)
  div.appendChild(button)

  return div
}


export default createMenu