// Кнопка разворачивания меню
const navToggle = document.querySelector('#nav-toggle');
const navList = document.querySelector('#nav-list');

	navToggle.onclick = function (){
		navToggle.classList.toggle('header-nav-button-active');
		navList.classList.toggle('header-nav-show');
		document.querySelector('body').classList.toggle('overflowy')
	}
	navList.onclick = function (){
		navToggle.classList.toggle('header-nav-button-active');
		navList.classList.toggle('header-nav-show');
		document.querySelector('body').classList.toggle('overflowy')
	}