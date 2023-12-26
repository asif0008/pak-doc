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
  const checkedCheckbox = dropdownMenu.querySelector('input[type="checkbox"]:checked');
  if (checkedCheckbox) {
    const checkboxId = checkedCheckbox.id;
    console.log('Checkbox ID:', checkboxId); // Debugging log
    
    const labelElement = dropdownMenu.querySelector(`label[for="${checkboxId}"]`);
    if (labelElement) {
      const selectedValue = labelElement.textContent.trim();
      console.log('Selected Value:', selectedValue); // Debugging log
      button.textContent = selectedValue;
    } else {
      console.error('Label element not found for checkbox with ID:', checkboxId); // Debugging log
    }
  } else {
    console.error('No checkbox is checked'); // Debugging log
  }
}



// Add event listeners to "Apply Filters" buttons
document.querySelectorAll('.dropdown-menu button.global-btn').forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log('Apply Filters Button Clicked'); // Debugging log
    const dropdownMenu = e.target.closest('.dropdown-menu');
    if (dropdownMenu) {
      const dropdown = dropdownMenu.closest('.dropdown');
      const associatedButton = dropdown.querySelector('.searchSectionButtons');
      if (associatedButton) {
        updateButtonValue(associatedButton, dropdownMenu);
        dropdownMenu.style.display = 'none'; // Close the dropdown
        console.log('Dropdown Menu Hidden'); // Debugging log
      }
    }
  });
});

// Add event listeners to checkboxes to update button value on checkbox selection
document.querySelectorAll('.dropdown-menu input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    console.log('Checkbox Changed'); // Debugging log
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
    console.log('Search Section Button Clicked'); // Debugging log
    e.preventDefault();
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
  const targetDropdown = e.target.closest('.dropdown');
  if (!targetDropdown) {
    // Hide all dropdown menus if clicked outside any dropdown
    document.querySelectorAll('.dropdown-menu').forEach((menu) => {
      menu.style.display = 'none';
    });
  } else {
    // Hide other dropdown menus if a different dropdown button is clicked
    const allDropdownMenus = document.querySelectorAll('.dropdown-menu');
    allDropdownMenus.forEach((menu) => {
      if (!menu.parentElement.contains(targetDropdown)) {
        menu.style.display = 'none';
      }
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


// doctors list fetching js
let currentIndex = 0;
let displayedDoctors = []; // Array to keep track of currently displayed doctors
let noMoreDoctorsDisplayed = false; // Flag to check if the "No more doctors available" message is displayed

function showNextDoctors() {
  const allDoctors = document.querySelectorAll('.doctors-list-results > div.doctor');
  const totalDoctors = allDoctors.length;

  // Initially, show only 5 doctors
  const endIndex = Math.min(currentIndex + 5, totalDoctors);

  allDoctors.forEach((doctor, index) => {
    if (index >= currentIndex && index < endIndex) {
      doctor.style.display = 'block';
      displayedDoctors.push(doctor); // Add the doctor to the displayedDoctors array
    } else if (!displayedDoctors.includes(doctor)) {
      doctor.style.display = 'none';
    }
  });

  currentIndex = endIndex;
  console.log(`Current Index: ${currentIndex}`);

  // Show message if no more doctors available
  if (currentIndex >= totalDoctors && !noMoreDoctorsDisplayed) {
    const noMoreDoctorsMessage = document.createElement('div');
    noMoreDoctorsMessage.textContent = 'No more doctors available';
    noMoreDoctorsMessage.style.textAlign = 'center';
    noMoreDoctorsMessage.style.padding = '0 0 20px 0';
    document.querySelector('.doctors-list-results').appendChild(noMoreDoctorsMessage);
    noMoreDoctorsDisplayed = true; // Set the flag to true
  }
}

const doctorsListResults = document.querySelector('.doctors-list-results');

doctorsListResults.addEventListener('scroll', () => {
  console.log('Scroll event triggered');
  if (!noMoreDoctorsDisplayed && doctorsListResults.scrollTop + doctorsListResults.clientHeight >= doctorsListResults.scrollHeight) {
    console.log('Reached bottom of .doctors-list-results');
    showLoader();
  }
});

// Initial load
showNextDoctors();

function showLoader() {
  const loader = document.querySelector('.loader');
  console.log('Loader element:', loader);

  loader.style.display = 'block';
  setTimeout(() => {
    loader.style.display = 'none';
    console.log('Loader deactivated');
    showNextDoctors();
  }, 2000);
}

// Sign in page checkbox js
function toggleDoctorCheckbox() {
  const doctorCheckbox = document.getElementById('accountDoctorCheckbox');
  const patientCheckbox = document.getElementById('accountPatientCheckbox');
  
  doctorCheckbox.checked = !doctorCheckbox.checked;
  
  if (doctorCheckbox.checked) {
    patientCheckbox.checked = false;
  }
}

function togglePatientCheckbox() {
  const patientCheckbox = document.getElementById('accountPatientCheckbox');
  const doctorCheckbox = document.getElementById('accountDoctorCheckbox');
  
  patientCheckbox.checked = !patientCheckbox.checked;
  
  if (patientCheckbox.checked) {
    doctorCheckbox.checked = false;
  }
}






















