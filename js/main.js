const burguerBtn = document.querySelector('.btn__burguer');
const navbarItems = document.querySelector('.navbar__items');
const htmlElement = document.querySelector('body');

burguerBtn.addEventListener('click', function () {
	navbarItems.classList.toggle('items--expanded');
	htmlElement.classList.toggle('no-scroll');
});
