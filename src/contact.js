const contact = () => {
  const main = document.querySelector('.main')
  main.textContent = ''

  const div = document.createElement('div')
  div.classList.add('contact__content');

  const h3 = document.createElement('h3');
  h3.classList.add('contact__title');
  h3.textContent = 'How can we help you?'

  const textarea = document.createElement('textarea');
  textarea.classList.add('contact__message')
  textarea.setAttribute('placeholder', 'Hello, I wanted to tell you that...')

  const button = document.createElement('button')
  button.classList.add('contact__button')
  button.textContent = 'Send'

  div.appendChild(h3)
  div.appendChild(textarea)
  div.appendChild(button)

  main.appendChild(div)
}


export default contact