// Кнопка разворачивания меню
const navToggle = document.querySelector('#nav-toggle');
const navList = document.querySelector('#nav-list');

	navToggle.onclick = function (){
		navToggle.classList.toggle('header-nav-button-active');
		navList.classList.toggle('header-nav-show');
		document.querySelector('body').classList.toggle('overflowy')
		document.querySelector('html').classList.toggle('overflowy')
		setTimeout(() => {navList.classList.toggle('overflowy-auto')}, 500)
	}
	navList.onclick = function (){
		navToggle.classList.toggle('header-nav-button-active');
		navList.classList.toggle('header-nav-show');
		document.querySelector('body').classList.toggle('overflowy')
		document.querySelector('html').classList.toggle('overflowy')
	}


// Инициализация слайдера фото
$('.foto-slider-list').slick({
			dots: true,
			infinite: false,
			arrows: false,
			speed: 700,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			swipe: false,
			adaptiveHeight: true
		});

const fotoSlider = $('.foto-tab-list').slick({
			dots: false,
			infinite: false,
			speed: 500,
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
let tabChangeNow = false

for (let i = 0; i < dotsTrue.length; i++) {
	dotsFalse[i].addEventListener('click', () => {
		if (!tabChangeNow) {
			tabChangeNow = true
			dotsFalse[activeSlide].classList.toggle('tab-active')
			dotsFalse[i].classList.toggle('tab-active')
			activeSlide = i
			dotsTrue[i].dispatchEvent(event)
			setTimeout(() => {tabChangeNow = false}, 650)
		}
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

//Инициализация слайдера историй

$('#story .section-card-list').slick({
			dots: false,
			infinite: false,
			arrows: true,
			draggable: false,
			swipe: false,
			appendArrows: $('#story .section-head-wrapper'),
			prevArrow: '<button type = "button" class = "section-slider-prev"><img src="assets/image/icons/prev.png"></button>',
	 		nextArrow: '<button type = "button" class = "section-slider-next"><img src="assets/image/icons/next.png"></button>',
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,	
			responsive: [
				{
					breakpoint: 1200,
					arrows: true,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					arrows: true,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});

//Инициализация слайдера контекста

$('#context .section-card-list').slick({
			dots: false,
			infinite: false,
			arrows: true,
			draggable: false,
			swipe: false,
			appendArrows: $('#context .section-head-wrapper'),
			prevArrow: '<button type = "button" class = "section-slider-prev"><img src="assets/image/icons/prev.png"></button>',
	 		nextArrow: '<button type = "button" class = "section-slider-next"><img src="assets/image/icons/next.png"></button>',
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,	
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});

//Адаптивная высота слайдов истории и котекста
window.onload = function() {
	const fotoCardAll2 = document.querySelectorAll('#context .section-card-item')
	let fotoCardMaxHeight2 = (Math.max.apply(null, (Array.from(fotoCardAll2).map((line) => line.clientHeight))))
	const fotoCardAll = document.querySelectorAll('#story .section-card-item')
	let fotoCardMaxHeight = (Math.max.apply(null, (Array.from(fotoCardAll).map((line) => line.clientHeight))))

	fotoCardAll2.forEach((item) => {
		item.style.height = fotoCardMaxHeight2 + 'px'
	})
	fotoCardAll.forEach((item) => {
		item.style.height = fotoCardMaxHeight + 'px'
	})

	$(window).resize(() => {
		fotoCardAll2.forEach((item) => {
			item.style.height = 100 + '%'
		})
		fotoCardMaxHeight2 = (Math.max.apply(null, (Array.from(fotoCardAll2).map((line) => line.clientHeight))))
		fotoCardAll2.forEach((item) => {
			item.style.height = fotoCardMaxHeight2 + 'px'
		})

		fotoCardAll.forEach((item) => {
			item.style.height = 100 + '%'
		})
		fotoCardMaxHeight = (Math.max.apply(null, (Array.from(fotoCardAll).map((line) => line.clientHeight))))
		fotoCardAll.forEach((item) => {
			item.style.height = fotoCardMaxHeight + 'px'
		})
	}) 
}

//Интерактивная карта 
$('.map-card-list').slick({
			dots: true,
			infinite: false,
			arrows: false,
			draggable: false,
			swipe: false,
			adaptiveHeight: true,
			fade: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			appendArrows: $('.map-arrows-wrapper'),
			prevArrow: '<button type = "button" class = "map-prev"><img src="assets/image/icons/prev.png"></button>',
	 		nextArrow: '<button type = "button" class = "map-next"><img src="assets/image/icons/next.png"></button>',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						arrows: true,
					}
				}]
		});

const mapSliderDots = document.querySelectorAll('.map-card-list .slick-dots li')
circleActicve = 0
circleList = document.querySelectorAll('.circle')
const eventMap = new Event("click")

for (let i = 0; i < circleList.length; i++) {
	circleList[i].addEventListener('click', () => {
		circleList[circleActicve].childNodes[1].classList.toggle('circle-big-active')
		circleList[circleActicve].childNodes[3].classList.toggle('circle-small-active')
		circleList[circleActicve].childNodes[5].classList.toggle('circle-text-active')

		circleList[i].childNodes[1].classList.toggle('circle-big-active')
		circleList[i].childNodes[3].classList.toggle('circle-small-active')
		circleList[i].childNodes[5].classList.toggle('circle-text-active')

		mapSliderDots[i].dispatchEvent(eventMap)

		circleActicve = i
	})
}

//Инициализация слайдера партнёров
$('.partners-list').slick({
			dots: false,
			infinite: false,
			arrows: true,
			prevArrow: '<button type = "button" class = "partners-slider-prev"><img src="assets/image/icons/prev.png"></button>',
	 		nextArrow: '<button type = "button" class = "partners-slider-next"><img src="assets/image/icons/next.png"></button>',
			draggable: false,
			swipe: false,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 6,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});