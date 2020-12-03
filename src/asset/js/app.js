const isOpen = document.querySelector('#navbtn');

isOpen.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('is-active');
});