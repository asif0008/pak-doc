// Navbar js
let hamburger_menu = document.getElementById('hamburger_menu');
let responsive_header = document.getElementById('side-nav');
let closeside_nav = document.getElementById('close-side-nav');
hamburger_menu.addEventListener("click", () => {
    responsive_header.classList.add('active');
    document.body.style.backgroundColor = 'rgba(42, 42, 42, 0.90)';

})
closeside_nav.addEventListener('click', () => {
    responsive_header.classList.remove('active');
    document.body.style.backgroundColor = 'unset';
});

//   Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    spaceBetween: 2,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4.2,
        slidesPerGroup: 4.2,
        slidesPerGroupSkip: 2,
      },
      991: {
        slidesPerView: 3.7,
        slidesPerGroup: 4.2,
        slidesPerGroupSkip: 2,
      },
      769: {
        slidesPerView: 3.2,
        slidesPerGroup: 4.2,
        slidesPerGroupSkip: 2,
      },
      576: {
        slidesPerView: 1.8,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   Swiper js Top research
var swiper = new Swiper(".topSearchedSwiper", {
    slidesPerView: 3.7,
    centeredSlides: false,
    slidesPerGroupSkip: 0,
    grabCursor: true,
    spaceBetween: 10,
    keyboard: {
      enabled: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
//   Swiper buttonSwiper
var swiper = new Swiper(".buttonSwiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   }, 
slidesPerView: 'auto',
freeMode: false,
slidesPerGroup: 1,
centerInsufficientSlides:true,
loop: false,
grabCursor: true,
  });
//   Swiper js TEstimonials
var swiper = new Swiper(".testimonialsSwiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   }, 
slidesPerView: 'auto',
freeMode: false,
slidesPerGroup: 1,
centerInsufficientSlides:true,
loop: false,
grabCursor: true,
  });

  // Search Page Accordion item js
  function handleAccordionEvents(collapseId, viewTextId, hideTextId) {
    document.getElementById(collapseId).addEventListener('show.bs.collapse', function() {
      document.getElementById(viewTextId).style.display = 'none';
      document.getElementById(hideTextId).style.display = 'inline';
    });
    document.getElementById(collapseId).addEventListener('hide.bs.collapse', function() {
      document.getElementById(viewTextId).style.display = 'inline';
      document.getElementById(hideTextId).style.display = 'none';
    });
  }
  handleAccordionEvents('collapseOne', 'viewText1', 'hideText1');
  handleAccordionEvents('collapseTwo', 'viewText2', 'hideText2');

  // Range slider js
  var slider = document.getElementById('range-slider');
  var startInput = document.getElementById('start-input');
  var endInput = document.getElementById('end-input');

  noUiSlider.create(slider, {
    start: [0, 50000],
    connect: true,
    range: {
      'min': 0,
      'max': 50000
    }
  });

  slider.noUiSlider.on('update', function (values, handle) {
    // Update input values when slider values change
    if (handle === 0) {
      startInput.value = values[0];
    }
    if (handle === 1) {
      endInput.value = values[1];
    }
  });

  // Handle input changes
  startInput.addEventListener('change', function () {
    slider.noUiSlider.set([this.value, null]);
  });

  endInput.addEventListener('change', function () {
    slider.noUiSlider.set([null, this.value]);
  });
  

  // Search page buttons js
  document.querySelectorAll('.searchSectionButtons').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const nextElement = e.target.nextElementSibling;
      if (nextElement.style.display === 'none' || nextElement.style.display === '') {
        nextElement.style.display = 'block';
      }else {
        nextElement.style.display = 'none';
      }
    })
  })