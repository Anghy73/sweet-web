import home from "./home";
import menu from "./menu";
import contact from "./contact";

const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add('header')

  const logo = document.createElement('h1');
  logo.classList.add('header__logo')
  logo.textContent = 'BUFFALO WAFFLES'

  header.appendChild(logo)
  header.appendChild(createNav())

  return header;
};

const createNav = () => {
  const nav = document.createElement('nav');
  nav.classList.add('header__nav');

  const homeButton = document.createElement('button')
  homeButton.classList.add('header__home')
  homeButton.classList.add('header__button')
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', () => {
    home()
  })

  const menuButton = document.createElement('button')
  menuButton.classList.add('header__menu')
  menuButton.classList.add('header__button')
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', () => {
    menu()
  })

  const contactButton = document.createElement('button')
  contactButton.classList.add('header__contact')
  contactButton.classList.add('header__button')
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', () => {
    contact()
  })

  nav.appendChild(homeButton)
  nav.appendChild(menuButton)
  nav.appendChild(contactButton)

  return nav;
}

const createMain = () => {
  const main = document.createElement('main');
  main.setAttribute('class', 'main')

  return main
}

const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer')
  footer.innerHTML = '<p class="footer__create" >Create by <a class="footer__link" href="" target="_blank">Andy</a></p>'
  return footer
}

const initializeWebsite = () => {
  const content = document.querySelector('#content');

  content.appendChild(createHeader())
  content.appendChild(createMain())
  content.appendChild(footer())

  home()
};

export default initializeWebsite;