import Img from './assets/perfilBuffalo.jpg';

const home = () => {
  const main = document.querySelector('.main');
  main.innerHTML = ''

  const logoImg = new Image();
  logoImg.src = Img
  logoImg.classList.add('home__img')

  const pIntro = document.createElement('p');
  pIntro.textContent = 'We make the richest, sexiest and most filling waffles in all of Chile. Come to our spots and live the Buffalo Waffles experience.';
  pIntro.classList.add('home__intro')

  const pVisit = document.createElement('p');
  pVisit.textContent = 'Order online or visit us!'
  pVisit.classList.add('home__visit')

  main.appendChild(pIntro)
  main.appendChild(logoImg)
  main.appendChild(pVisit)

}

export default home