
var button = document.querySelector('.navbar-header__toggle');
var menu = document.querySelector('.nav-header__menu--closed');


button.addEventListener("click", function (event) {
  event.preventDefault();
	if (button.classList.contains("navbar-header__toggle")) {
    button.classList.toggle("navbar-header-closed");
	}
});

button.addEventListener("click", function (event) {
  event.preventDefault();
	if (menu.classList.contains("nav-header__menu--closed")) {
    menu.classList.toggle("nav-header__menu");
	}
});
