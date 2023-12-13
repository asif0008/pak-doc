// Navbar js
let hamburger_menu = document.getElementById('hamburger_menu');
let responsive_header = document.getElementById('side-nav');
let closeside_nav = document.getElementById('close-side-nav');
hamburger_menu.addEventListener("click", () => {
    responsive_header.classList.add('active');

})
closeside_nav.addEventListener('click', () => {
    responsive_header.classList.remove('active');
});

//   Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4.2,
        slidesPerGroup: 4.2,
      },
      991: {
        slidesPerView: 3.7,
        slidesPerGroup: 4.2,
      },
      769: {
        slidesPerView: 3.2,
        slidesPerGroup: 4.2,
      },
      576: {
        slidesPerView: 2.2,
        slidesPerGroup: 4.2,
      },
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

//   Swiper js Top research
var swiper = new Swiper(".topSearchedSwiper", {
    slidesPerView: 3.7,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
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
//   Swiper js TEstimonials
var swiper = new Swiper(".testimonialsSwiper", {
    slidesPerView: 1.2,
    centeredSlides: false,
    slidesPerGroupSkip: 0,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });