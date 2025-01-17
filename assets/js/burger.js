const burgerMenu = document.querySelector('.burger');
const burgerOverlay = document.querySelector('.burger__overlay');
const burgerOpenBtn = document.querySelector('.burger__open-btn');
const burgerCloseBtn = document.querySelector('.burger__close-btn');
const burgerNav = document.querySelector('.burger__content-nav');


function open() {
  window.scrollTo(0, 0);
  burgerMenu.classList.add('burger_active');
  document.body.style.overflow = 'hidden';
}

function close() {
  burgerMenu.classList.remove('burger_active');
  document.body.style.overflow = 'visible';
}

burgerOpenBtn.addEventListener('click', open);
burgerOverlay.addEventListener('click', close);
burgerCloseBtn.addEventListener('click', close);

burgerNav.addEventListener('click', (event) => {
  if (event.target.classList.contains('burger__nav-link')) {
    close();
  }
});

