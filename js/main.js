const burguerBtn = document.querySelector('.btn__burguer');
const navbarItems = document.querySelector('.navbar__items');

burguerBtn.addEventListener('click', function () {
	navbarItems.classList.toggle('items--expanded');
});
