/* в этот файл добавляет скрипты*/
const navigation = document.querySelector('.navigation');
const mainHeaderButtons = document.querySelectorAll('.main-header__button');
const burger = document.querySelector('.main-header__item--burger');
const cross = document.querySelector('.main-header__item--cross');

const sliderToggle = document.querySelector('.slider__toggle');
const slider = document.querySelector('.slider');


if (slider) {
  let flag = false;
  sliderToggle.addEventListener('click', () => {
    if (flag) {
      slider.classList.toggle('slider--after');
      slider.classList.toggle('slider--before');
    } else {
      flag = true;
      slider.classList.add('slider--after');
    }
  });
}

navigation.classList.add('navigation__close');
burger.classList.add('main-header__item--show')

mainHeaderButtons.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    navigation.classList.toggle('navigation__open');
    navigation.classList.toggle('navigation__close');
    burger.classList.toggle('main-header__item--show');
    cross.classList.toggle('main-header__item--show');
  })
});


