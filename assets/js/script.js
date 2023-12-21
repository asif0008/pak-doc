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
  handleAccordionEvents('collapseThree', 'viewText3', 'hideText3');  
  handleAccordionEvents('collapseFour', 'viewText4', 'hideText4');  
  handleAccordionEvents('collapseFive', 'viewText5', 'hideText5');  
  handleAccordionEvents('collapseSix', 'viewText6', 'hideText6');  
  handleAccordionEvents('collapseSeven', 'viewText7', 'hideText7');  

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
  


// Search buttons js
// Function to update button value based on selected checkboxes
function updateButtonValue(button, dropdownMenu) {
  const selectedValue = dropdownMenu.querySelector('input[type="checkbox"]:checked + label');
  if (selectedValue) {
    button.textContent = selectedValue.textContent.trim();
  }
}

// Add event listeners to "Apply Filters" buttons
document.querySelectorAll('.dropdown-menu button.global-btn').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Stop event propagation
    const dropdownMenu = e.target.closest('.dropdown-menu');
    if (dropdownMenu) {
      const dropdown = dropdownMenu.closest('.dropdown');
      const associatedButton = dropdown.querySelector('.searchSectionButtons');
      if (associatedButton) {
        updateButtonValue(associatedButton, dropdownMenu);
        dropdownMenu.style.display = 'none'; // Close the dropdown
      }
    }
  });
});

// Add event listeners to checkboxes to update button value on checkbox selection
document.querySelectorAll('.dropdown-menu input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    e.stopPropagation();
    const dropdownMenu = e.target.closest('.dropdown-menu');
    if (dropdownMenu) {
      const dropdown = dropdownMenu.closest('.dropdown');
      const associatedButton = dropdown.querySelector('.searchSectionButtons');
      if (associatedButton) {
        updateButtonValue(associatedButton, dropdownMenu);
      }
    }
  });
});

// Add event listeners to buttons to toggle dropdown visibility
document.querySelectorAll('.searchSectionButtons').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event propagation
    const nextElement = e.target.nextElementSibling;
    if (nextElement) {
      nextElement.style.display = nextElement.style.display === 'none' || nextElement.style.display === '' ? 'block' : 'none';
    } else {
      console.error('nextElement is null or not found');
    }    
  });
});




// Close dropdown when clicking outside of it
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach((menu) => {
      menu.style.display = 'none';
    });
  }
});

// Add logic to allow only one checkbox to be selected at a time
document.querySelectorAll('.dropdown-menu input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      const siblingCheckboxes = e.target.closest('.dropdown-menu').querySelectorAll('input[type="checkbox"]');
      siblingCheckboxes.forEach((siblingCheckbox) => {
        if (siblingCheckbox !== e.target) {
          siblingCheckbox.checked = false;
        }
      });
    }
  });
});

// Custom dropdown menujs
document.querySelector('.custom-dropdown').addEventListener('click', (e) => {
  e.stopPropagation(); 
  const dropdownMenu = document.querySelector('.custom-dropmenu');
  const svgIcon = document.querySelector('.dropdown-svg');

  if(dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
    dropdownMenu.style.display = 'block';
    svgIcon.style.transform = 'unset';
  }else {
    dropdownMenu.style.display = 'none';
    svgIcon.style.transform = 'rotateX(180deg)';
  }
});

document.querySelector('#availableDatesModal').addEventListener('click', () => {
  const dropdownMenu = document.querySelector('.custom-dropmenu');
  const svgIcon = document.querySelector('.dropdown-svg');
  if(dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
    svgIcon.style.transform = 'rotateX(180deg)';
  }
})