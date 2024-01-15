// for contact scroll
document.addEventListener("DOMContentLoaded", function () {
  var servicesLink = document.getElementById("contact-link");

  if (servicesLink) {
    servicesLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior
      var targetSection = document.getElementById("contact");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

// JavaScript code to scroll to the services section
document.addEventListener("DOMContentLoaded", function () {
  var targetSection = document.getElementById("services");

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
});

// JavaScript code to scroll to the gallery section
document.addEventListener("DOMContentLoaded", function () {
  var targetSection = document.getElementById("gallery");

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
});

// large screen menu list

let open = document.getElementById("open");
let close = document.getElementById("close");
let menu = document.getElementById("menu");

if (open.style.display === "none" && close.style.display === "none") {
  menu.style.display = "block";
}

// menu toggler

function toggleMenu() {
  if (window.innerWidth <= 999) {
    // Check if the window width is less than or equal to 999px (adjust this value as needed)
    if (menu.style.display === "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  } else {
    menu.style.display = "flex";
  }
}

// close menu

function closeMenu() {
  if (window.innerWidth <= 999) {
    // Check if the window width is less than or equal to 999px (adjust this value as needed)
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  } else {
    menu.style.display = "flex";
  }
}
