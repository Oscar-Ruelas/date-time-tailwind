/************
Static Data
************/
const allTheMonths = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const allTheDays = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

/************
Dynamic Data
************/
const dateNow = new Date();

const gotMonth = dateNow.getMonth();
let gotDayOfMonth = dateNow.getDate();
const gotYear = dateNow.getFullYear();
const gotDayOfWeek = dateNow.getDay();

/************
Background Images for Each Month
************/
const monthBackgrounds = [
    "url(images/January.jpg)",  // January
    "url(images/February.jpg)", // February
    "url(images/March.jpg)",    // March
    "url(images/April.jpg)",    // April
    "url(images/May.jpeg)",      // May
    "url(images/June.jpg)",     // June
    "url(images/July.jpeg)",     // July
    "url(images/August.jpeg)",   // August
    "url(images/September.jpeg)",// September
    "url(images/October.jpg)",  // October
    "url(images/November.jpeg)", // November
    "url(images/December.jpg)"  // December
];

/************
Preload Images
************/
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url.slice(4, -1); // Remove "url()" for direct src assignment
  });
};
preloadImages(monthBackgrounds);

/************
Set Background Based on User Preference or Default
************/
const backgroundSelector = document.getElementById('background');
const userBackground = localStorage.getItem('preferredBackground');

// Function to set background
const setBackground = (background) => {
  // Directly set background style
  document.body.style.backgroundImage = background;
};

// Use user preference or default monthly background
if (userBackground) {
  setBackground(userBackground);
} else {
  setBackground(monthBackgrounds[gotMonth]);
}

// Handle dropdown change
backgroundSelector.addEventListener('change', (event) => {
  const selectedValue = event.target.value;
  setBackground(selectedValue || monthBackgrounds[gotMonth]); // Immediate update
  localStorage.setItem('preferredBackground', selectedValue); // Persist choice
});

/************
Get DOM Elements
************/
const month = document.querySelector(".month");
const dayOfMonth = document.querySelector(".dayOfMonth");
const year = document.querySelector('.year');
const dayOfWeek = document.querySelector('.dayOfWeek');

/************
Set DOM Elements with Cube Animation
************/
const setCubeElement = (element, newValue) => {
  if (element.innerText !== newValue) {
      element.innerText = newValue;
      element.classList.add('animate-cube');
      setTimeout(() => element.classList.remove('animate-cube'), 1000);
  }
};

setCubeElement(month, allTheMonths[gotMonth]);
setCubeElement(dayOfMonth, gotDayOfMonth);
setCubeElement(year, gotYear);
setCubeElement(dayOfWeek, allTheDays[gotDayOfWeek]);
