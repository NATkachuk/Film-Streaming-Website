const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const burger = document.querySelector('.header-burger__img');
const reges = document.querySelector('.reges');

burger.addEventListener('click', function () {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');
    this.classList.toggle('krest');

if (nav.classList.contains('open')) {
    main.style.display = 'none';
    footer.style.display = 'none';
    reges.classList.toggle('reges-active');
  } else {
    main.style.display = 'block';
    footer.style.display = 'block';
  }
});