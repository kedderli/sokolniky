$( document ).ready(function () {
	//Прелоадер
	let preloader = document.querySelector('#preloader')
	preloader.style.opacity = '0'
	document.querySelector('html').classList.remove('overflowy')
	document.querySelector('body').classList.remove('overflowy')
	setTimeout(function () {
		preloader.style.display = 'none'
	}, 700)

	//Адаптивная высота слайдов истории и котекста
	const fotoCardAll2 = document.querySelectorAll('#context-section .section-card-item')
	let fotoCardMaxHeight2 = (Math.max.apply(null, (Array.from(fotoCardAll2).map(function(line) { return line.clientHeight }))))
	const fotoCardAll = document.querySelectorAll('#story-section .section-card-item')
	let fotoCardMaxHeight = (Math.max.apply(null, (Array.from(fotoCardAll).map(function (line) { return line.clientHeight }))))

	if (fotoCardMaxHeight < 266) {
		fotoCardMaxHeight = 266
	}
	if (fotoCardMaxHeight2 < 266) {
		fotoCardMaxHeight2 = 266
	}

	fotoCardAll2.forEach(function (item) {
		item.style.height = fotoCardMaxHeight2 + 'px'
	})
	fotoCardAll.forEach(function (item) {
		item.style.height = fotoCardMaxHeight + 'px'
	})

	$(window).resize(function () {
		fotoCardAll2.forEach(function (item) {
			item.style.height = 100 + '%'
		})
		fotoCardMaxHeight2 = (Math.max.apply(null, (Array.from(fotoCardAll2).map(function (line) { return line.clientHeight }))))
		fotoCardAll2.forEach(function (item) {
			item.style.height = fotoCardMaxHeight2 + 'px'
		})

		fotoCardAll.forEach(function (item) {
			item.style.height = 100 + '%'
		})
		fotoCardMaxHeight = (Math.max.apply(null, (Array.from(fotoCardAll).map(function (line) { return line.clientHeight }))))
		fotoCardAll.forEach(function (item) {
			item.style.height = fotoCardMaxHeight + 'px'
		})
	})

	// скролл по якорям
	$("a.scroll-to").on("click", function(e){
		const anchor = '#' + $(this).attr('href').split('#')[1];
		const currentPage = '/sokolniky/' // Заменить на / на релизе
		if (document.location.pathname === currentPage) {
			e.preventDefault();
	    	$('html, body').stop().animate({
	        	scrollTop: $(anchor).offset().top
	    	}, 400);	
		}
	});


	// //Подсветка пунктов меню
	$(function($) {
	    const section = $('.anchor'),
	          nav = $('.header-nav-list')
	          headerTop = document.querySelector('.header-top-flexbox')
	          headerNavList = document.querySelector('.header-nav-list')
	          headerTopLogo = document.querySelector('.header-top-logo')

	    $(window).on('scroll', function () {
	        const position = $(this).scrollTop();

	        if (position > 150) {
	    		headerTop.style.maxHeight = '50px'
	    		headerNavList.classList.add('header-nav-list-up')
	    		headerTopLogo.style.paddingBottom = '6px'
	    	} else {
	    		headerTop.style.maxHeight = '100px'
	    		headerNavList.classList.remove('header-nav-list-up')
	    		headerTopLogo.style.paddingBottom = '20px'
	    	}

	        section.each(function () {
	            const top = $(this).offset().top - 5,
	                  bottom = top + $(this).outerHeight();

	            if (position >= top && position <= bottom) {
	                nav.find('a').removeClass('active');
	                section.removeClass('active');
	                $(this).addClass('active');
	                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
	            }
	        });
	    });
	});
})

// Кнопка разворачивания меню
const navToggle = document.querySelector('#nav-toggle');
const navList = document.querySelector('#nav-list');

	navToggle.onclick = function (){
		navToggle.classList.toggle('header-nav-button-active');
		navList.classList.toggle('header-nav-show');
		document.querySelector('body').classList.toggle('overflowy')
		document.querySelector('html').classList.toggle('overflowy')
		setTimeout(function () {
			navList.classList.toggle('overflowy-auto')
		}, 500)
	}
	navList.onclick = function (){
		if (window.innerWidth < 1201) {
			navToggle.classList.toggle('header-nav-button-active');
			navList.classList.toggle('header-nav-show');
			document.querySelector('body').classList.toggle('overflowy')
			document.querySelector('html').classList.toggle('overflowy')
		}
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
let tabChangeNow = false

const changeSlideFoto = function () {
	if (!tabChangeNow) {
		tabChangeNow = true
		dotsFalse[activeSlide].classList.toggle('tab-active')
		dotsFalse[this].classList.toggle('tab-active')
		activeSlide = this
		dotsTrue[this].click()
		setTimeout(function () {
			tabChangeNow = false
		}, 650)
	}
}

for (let i = 0; i < dotsTrue.length; i++) {
	dotsFalse[i].addEventListener('click', changeSlideFoto.bind(i))
}

fotoSlider.on('afterChange', function () {
	if (document.documentElement.clientWidth <= 390) {
		let currentSlide = fotoSlider.slick('slickCurrentSlide')
		dotsFalse[activeSlide].classList.toggle('tab-active')
		dotsFalse[currentSlide].classList.toggle('tab-active')
		activeSlide = currentSlide
		dotsTrue[currentSlide].click()
	}
})

//Инициализация слайдера историй

$('#story-section .section-card-list').slick({
			dots: false,
			infinite: false,
			arrows: true,
			draggable: false,
			swipe: false,
			appendArrows: $('#story-section .section-head-wrapper'),
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

$('#context-section .section-card-list').slick({
			dots: false,
			infinite: false,
			arrows: true,
			draggable: false,
			swipe: false,
			appendArrows: $('#context-section .section-head-wrapper'),
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

//Интерактивная карта 
const mapSlider = $('.map-card-list').slick({
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

const mapDotsChange = function (ind) {
	if (circleList[1].childNodes[1].classList) {
		circleList[circleActicve].childNodes[1].classList.toggle('circle-big-active')
		circleList[circleActicve].childNodes[3].classList.toggle('circle-small-active')
		circleList[circleActicve].childNodes[5].classList.toggle('circle-text-active')

		circleList[ind].childNodes[1].classList.toggle('circle-big-active')
		circleList[ind].childNodes[3].classList.toggle('circle-small-active')
		circleList[ind].childNodes[5].classList.toggle('circle-text-active')

		mapSlider.slick('slickGoTo', ind)

		circleActicve = ind
	} else {
		circleList[circleActicve].childNodes[1].setAttribute("r", "0")
		circleList[circleActicve].childNodes[3].setAttribute("r", "10")
		circleList[circleActicve].childNodes[5].setAttribute("class", "circle-text")

		circleList[ind].childNodes[1].setAttribute("r", "27.5")
		circleList[ind].childNodes[3].setAttribute("r", "22.5")
		circleList[ind].childNodes[5].setAttribute("class", "circle-text circle-text-active")

		mapSlider.slick('slickGoTo', ind)

		circleActicve = ind
	}	
} 

if (!(circleList[1].childNodes[1].classList)) {
	circleList[0].childNodes[1].setAttribute("r", "27.3")
	circleList[0].childNodes[3].setAttribute("r", "22.5")
}

for (let i = 0; i < circleList.length; i++) {
	circleList[i].addEventListener('click', mapDotsChange.bind(null, i))
}		

mapSlider.on('afterChange', function () {
	let currentMapSlide = mapSlider.slick('slickCurrentSlide')
	if (circleList[1].childNodes[1].classList) {
		circleList[circleActicve].childNodes[1].classList.toggle('circle-big-active')
		circleList[circleActicve].childNodes[3].classList.toggle('circle-small-active')
		circleList[circleActicve].childNodes[5].classList.toggle('circle-text-active')
		circleList[currentMapSlide].childNodes[1].classList.toggle('circle-big-active')
		circleList[currentMapSlide].childNodes[3].classList.toggle('circle-small-active')
		circleList[currentMapSlide].childNodes[5].classList.toggle('circle-text-active')
		circleActicve = currentMapSlide
	} else {
		circleList[circleActicve].childNodes[1].setAttribute("r", "0")
		circleList[circleActicve].childNodes[3].setAttribute("r", "10")
		circleList[circleActicve].childNodes[5].setAttribute("class", "circle-text")
		circleList[currentMapSlide].childNodes[1].setAttribute("r", "27.5")
		circleList[currentMapSlide].childNodes[3].setAttribute("r", "22.5")
		circleList[currentMapSlide].childNodes[5].setAttribute("class", "circle-text circle-text-active")
		circleActicve = currentMapSlide
	}
	
})


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