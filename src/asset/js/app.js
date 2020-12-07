const navBtnTrigger = document.querySelector('#navbtn');
const bodyElement = document.querySelector('body');

navBtnTrigger.addEventListener('click', () => {
  bodyElement.classList.toggle('is-active');
});