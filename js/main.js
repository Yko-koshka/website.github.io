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

function app() {
  const navLists = document.querySelectorAll('.nav__list');
  const boxes = document.querySelectorAll('.box');

  function filter (category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === 'all'
      if (isItemFiltered && !isShowAll) {
        item.classList.add('anime')
      } else {
        item.classList.remove('hide')
        item.classList.remove('anime')
      }
    })
  }

  navLists.forEach((nav__list) => {
    nav__list.addEventListener('click', () => {
      const carrentCategory = nav__list.dataset.f
      filter(carrentCategory, boxes)
    })
  })

  boxes.forEach((box) => {
    box.ontransitionend = function () {
      if (box.classList.contains('anime')) {
        box.classList.add('hide')
      }
    }
  })
}

app()



