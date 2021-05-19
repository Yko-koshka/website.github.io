//---------------slider

const sliderItems = [...document.querySelectorAll('.hover-slider__item')];
const navItems = [...document.querySelectorAll('.hover-slider-nav__link')];

sliderItems.forEach((item, index) => {
  item.dataset.index = index;

  if (index === 0) {
    item.classList.add('hover-slider__item--active');
  }
});

navItems.forEach((item, index) => {
  item.dataset.index = index;

  if (index === 0) {
    item.classList.add('hover-slider-nav__link--active');
  }
});

const toggleActivity = (index) => {
  for (let i = 0; i < sliderItems.length; i++) {
    if (i === Number(index)) {
      sliderItems[i].classList.add('hover-slider__item--active');
      navItems[i].classList.add('hover-slider-nav__link--active');
    } else {
      sliderItems[i].classList.remove('hover-slider__item--active');
      navItems[i].classList.remove('hover-slider-nav__link--active');
    }
  }
};

document. querySelector('.hover-slider-nav').addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('hover-slider-nav__link')) {
    toggleActivity(event.target.dataset.index);
  }
});

//-----------gallery

const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', (event) => {

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});

