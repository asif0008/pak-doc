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