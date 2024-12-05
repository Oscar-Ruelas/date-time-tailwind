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
    "url('images/january.jpg')",  // January
    "url('images/february.jpg')", // February
    "url('images/march.jpg')",    // March
    "url('images/april.jpg')",    // April
    "url('images/may.jpg')",      // May
    "url('images/june.jpg')",     // June
    "url('images/july.jpg')",     // July
    "url('images/august.jpg')",   // August
    "url('images/september.jpg')",// September
    "url('images/october.jpg')",  // October
    "url(November.jpg)", // November
    "url(December.jpg)"  // December
];

/************
Set Background Based on Month
************/
document.body.style.backgroundImage = monthBackgrounds[gotMonth];
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

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
