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
			draggable: false,
			swipe: false
		});

const fotoSlider = $('.foto-tab-list').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 11,
			slidesToScroll: 11,
			prevArrow: '<button type = "button" class = "slick-prev-a"><img src="assets/image/icons/prev.png"></button>',
	 		nextArrow: '<button type = "button" class = "slick-next-a"><img src="assets/image/icons/next.png"></button>',
	 		arrows: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 7,
						slidesToScroll: 7,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 6,
						slidesToScroll: 6,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 390,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}

			]
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

fotoSlider.on('afterChange', () => {
	if (document.documentElement.clientWidth <= 390) {
		let currentSlide = fotoSlider.slick('slickCurrentSlide')
		dotsFalse[activeSlide].classList.toggle('tab-active')
		dotsFalse[currentSlide].classList.toggle('tab-active')
		activeSlide = currentSlide
		dotsTrue[currentSlide].dispatchEvent(event)
	}
})


// document.querySelector('.slick-next-a').addEventListener('click', () => {
// 	console.log(document.documentElement.clientWidth)
// 	if (document.documentElement.clientWidth <= 390) {
// 		let currentSlide = fotoSlider.slick('slickCurrentSlide')
// 		console.log(currentSlide)
// 		dotsFalse[activeSlide].classList.toggle('tab-active')
// 		dotsFalse[currentSlide].classList.toggle('tab-active')
// 		activeSlide = currentSlide
// 		dotsTrue[currentSlide].dispatchEvent(event)
// 	}
// })

// document.querySelector('.slick-prev-a').addEventListener('click', () => {
// 	if (document.documentElement.clientWidth <= 390) {
// 		let currentSlide = fotoSlider.slick('slickCurrentSlide')
// 		console.log(currentSlide)
// 		dotsFalse[activeSlide].classList.toggle('tab-active')
// 		dotsFalse[currentSlide].classList.toggle('tab-active')
// 		activeSlide = currentSlide
// 		dotsTrue[currentSlide].dispatchEvent(event)
// 	}
// })


