// 1. Mobile menu: show or hide the links when the Menu button is clicked
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close the menu after a link is clicked (useful on phones)
nav.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// 2. Put the current year in the footer automatically
document.getElementById("year").textContent = new Date().getFullYear();
