/* в этот файл добавляет скрипты*/
const sliderToggle = document.querySelector('.slider__toggle');
const slider = document.querySelector('.slider');

let flag = false;
sliderToggle.addEventListener('click', () => {
  if(flag) {
    slider.classList.toggle('slider--after');
    slider.classList.toggle('slider--before');
  } else {
    flag = true;
    slider.classList.add('slider--after');
}
});

const navigation = document.querySelector('.navigation');
const mainHeaderButton = document.querySelector('.main-header__button');
const burger = document.querySelector('.main-header__item--open');
const cross = document.querySelector('.main-header__item--close');

mainHeaderButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  navigation.classList.add('navigation__open');
});

mainHeaderButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  burger.classList.add('navigation__close');
});

mainHeaderButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  cross.classList.add('navigation__open');
});



