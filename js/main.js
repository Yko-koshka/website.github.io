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

document.querySelector('.hover-slider-nav').addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('hover-slider-nav__link')) {
    toggleActivity(event.target.dataset.index);
  }
});

//-----------gallery

const filterItem = document.querySelector(".nav");
const filterImg = document.querySelectorAll(".gallery__image");
window.onload = ()=>{
  filterItem.onclick = (selectedItem)=>{
    if(selectedItem.target.classList.contains("nav__item")){
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide");
          image.classList.add("show");
        }else{
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
}

// Hamburger

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("nav"),
    menuItems = document.querySelectorAll(".nav__item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("nav_active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("nav_active");
    });
  });
});

//video

function videoUrl(item) {
  document.getElementById("slider-video").src = item;
}

//tabs
const tabsBtn   = document.querySelectorAll(".tabs__inner-nav__btn");
const tabsItems = document.querySelectorAll(".tabs__inner-content__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__inner-nav__btn').click();

// WOW
new WOW().init();