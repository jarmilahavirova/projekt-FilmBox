// Úkol 3 (včetně bonusu)
// definice proměnných
const menuButton = document.getElementById("menu-tlacitko");
const menuPolozky = document.getElementById("menu-polozky");
const menuTlacitko = document.querySelector(".fas");

// hamburger menu
menuButton.addEventListener("click", function () {
  document.getElementById("menu-polozky").classList.toggle("show");
  // bonus
  if (menuPolozky.classList.contains("show")) {
    menuTlacitko.classList.add("fa-xmark");
    menuTlacitko.classList.remove("fa-bars");
  } else {
    menuTlacitko.classList.add("fa-bars");
    menuTlacitko.classList.remove("fa-xmark");
  }
});
