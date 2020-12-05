const navBtnTrigger = document.querySelector('#navbtn');
const isActiveNavBtn = document.querySelector('body');

navBtnTrigger.addEventListener('click', () => {
  isActiveNavBtn.classList.toggle('is-active');
});