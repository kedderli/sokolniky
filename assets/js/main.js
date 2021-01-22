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


// Инициализация слайдера фото
$('.foto-slider-list').slick({
			dots: true,
			infinite: false,
			arrows: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
		});

const dotsTrue = document.querySelectorAll('.slick-dots li')
const dotsFalse = document.querySelectorAll('.foto-tab-item')
let activeSlide = 0
let event = new Event("click")

for (let i = 0; i < dotsTrue.length; i++) {
	dotsFalse[i].addEventListener('click', () => {
		dotsFalse[activeSlide].classList.toggle('tab-active')
		dotsFalse[i].classList.toggle('tab-active')
		activeSlide = i
		dotsTrue[i].dispatchEvent(event)

	})
}
