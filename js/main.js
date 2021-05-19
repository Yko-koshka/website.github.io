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


// const sliderInner = document.querySelector('.slider__inner');
// const imgs = document.querySelectorAll('.slider__img');
// let index = 0;

// function showSlides(n) {
//   if (n >= imgs.length) {
//     index = 0;
//   }
//   imgs.forEach((item) => (item.style.display = "none"));
//   imgs[index].style.display = "block";
//   index++;
// }
// showSlides(index);

// setInterval(() => {
//   showSlides(index);
// }, 2000);

