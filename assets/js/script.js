"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// GET price services

const moreInfoBtn = document.querySelectorAll(".show-more");
const closeServiseBtn = document.querySelector("#close-service-popup");
const moreInfoContent = document.querySelector("#service-popup-overlay");

moreInfoBtn.forEach((el) => {
  el.addEventListener("click", (eo) => {
    eo.preventDefault();

    if (!moreInfoContent.classList.contains("active")) {
      moreInfoContent.classList.add("active");
    } else {
      moreInfoContent.classList.remove("active");
    }
  });
});

if (closeServiseBtn) {
  closeServiseBtn.addEventListener("click", (eo) => {
    moreInfoContent.classList.remove("active");
  });
}

let titles = document.querySelectorAll("[title-animated-about]");

setInterval(() => {
  titles.forEach((el) => {
    if (el.classList.contains("isHidden")) {
      el.classList.remove("isHidden");
      el.classList.add("isVisible");
    } else {
      el.classList.remove("isVisible");
      el.classList.add("isHidden");
    }
  });
}, 1000);

// set up text to print, each item in array is new line
let descriptionText = document.querySelector("#getDescription");
var aText = new Array();
aText.push(descriptionText.innerHTML);

var iSpeed = 20; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array

var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();

// progress barr animation

window.addEventListener("scroll", function () {
  const progressBars = document.querySelectorAll(".skill-progress-fill");
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  progressBars.forEach(function (progressBar) {
    const progressValue = progressBar.dataset.progress;
    const progress = (window.pageYOffset / totalHeight) * progressValue;
    progressBar.style.width = progress + "%";
  });
});

// popup certificate

let images = document.querySelectorAll(".certificate-item img");
images.forEach((el) => {
  el.addEventListener("click", (eo) => {
    document.querySelector(".popup-image").classList.add("show");
    document.querySelector(".popup-image img").src = el.getAttribute("src");
  });
});

document.querySelector(".popup-image").addEventListener("click", (eo) => {
  if (eo.target != document.querySelector(".popup-image img")) {
    document.querySelector(".popup-image").classList.remove("show");
  }
});
