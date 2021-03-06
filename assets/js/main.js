$( document ).ready(function () {
	//Прелоадер
	let preloader = document.querySelector('#preloader')
	preloader.style.opacity = '0'
	document.querySelector('html').classList.remove('overflowy')
	document.querySelector('body').classList.remove('overflowy')
	setTimeout(function () {
		preloader.style.display = 'none'
	}, 700)

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

	//запускается только на главной 
	if (document.location.pathname === '/' || document.location.pathname === '/index.php' || document.location.pathname === '/index.html') {

		//Подсветка пунктов меню
		$(function($) {
			if ($(this).scrollTop() > 0) {
				window.scrollBy(0, -100)
			}
			const section = $('.anchor'),
				  nav = $('.header-nav-list')

			$(window).on('scroll', function () {
				const position = $(this).scrollTop();
				section.each(function () {
					const top = $(this).offset().top - 5,
						  bottom = top + $(this).outerHeight()
					if (position >= top && position <= bottom) {
						nav.find('a').removeClass('active')
						section.removeClass('active')
						$(this).addClass('active')
						nav.find('a[href="/#' + $(this).attr('id') + '"]').addClass('active')
					}
				})
			})
		})

		//Адаптивная высота слайдов истории и котекста
		const fotoCardAll2 = Array.prototype.slice.call(document.querySelectorAll('#context-section .section-card-item'))
		let fotoCardMaxHeight2 = (Math.max.apply(null, (Array.prototype.slice.call(fotoCardAll2).map(function(line) { return line.clientHeight }))))
		const fotoCardAll = Array.prototype.slice.call(document.querySelectorAll('#story-section .section-card-item'))
		let fotoCardMaxHeight = (Math.max.apply(null, (Array.prototype.slice.call(fotoCardAll).map(function (line) { return line.clientHeight }))))

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
			fotoCardMaxHeight2 = (Math.max.apply(null, (Array.prototype.slice.call(fotoCardAll2).map(function (line) { return line.clientHeight }))))
			if (fotoCardMaxHeight2 < 266) {
				fotoCardMaxHeight2 = 266
			}
			fotoCardAll2.forEach(function (item) {
				item.style.height = fotoCardMaxHeight2 + 'px'
			})

			fotoCardAll.forEach(function (item) {
				item.style.height = 100 + '%'
			})
			fotoCardMaxHeight = (Math.max.apply(null, (Array.prototype.slice.call(fotoCardAll).map(function (line) { return line.clientHeight }))))
			if (fotoCardMaxHeight < 266) {
				fotoCardMaxHeight = 266
			}
			fotoCardAll.forEach(function (item) {
				item.style.height = fotoCardMaxHeight + 'px'
			})
		})

		// скролл по якорям
		$("a.scroll-to").on("click", function(e){
			const anchor = '#' + $(this).attr('href').split('#')[1];
			e.preventDefault()
			$('html, body').stop().animate({
				scrollTop: $(anchor).offset().top
			}, 400)	
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
	}

	// Вкладки фотогалереи 
	if (document.location.pathname === '/' || document.location.pathname === '/index.php' document.location.pathname === '/index.html' || document.location.pathname === '/photogallery.html') {
		// Инициализация слайдера фото
		const fotoPostSlider = $('.foto-slider-list').slick({
			dots: true,
			infinite: false,
			arrows: false,
			speed: 700,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: false,
			swipe: false,
			adaptiveHeight: true,
		});

		const fotoSlider = $('.foto-tab-list').slick({
			dots: false,
			infinite: false,
			speed: 700,
			slidesToShow: 11,
			slidesToScroll: 11,
			prevArrow: '<button type = "button" class = "slick-prev-a" id="foto-tab-prev"><img src="assets/image/icons/prev.png"></button>',
			nextArrow: '<button type = "button" class = "slick-next-a" id="foto-tab-next"><img src="assets/image/icons/next.png"></button>',
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
				}, 700)
			}
		}

		for (let i = 0; i < dotsFalse.length; i++) {
			dotsFalse[i].addEventListener('click', changeSlideFoto.bind(i))
		}

		const fotoTabPrev = document.querySelector('#foto-tab-prev')
		const fotoTabNext = document.querySelector('#foto-tab-next')

		fotoSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			if (document.documentElement.clientWidth <= 390) {
				if (!tabChangeNow) {
					tabChangeNow = true
					dotsFalse[currentSlide].classList.toggle('tab-active')
					dotsFalse[nextSlide].classList.toggle('tab-active')
					dotsTrue[nextSlide].click()
					setTimeout(function () {
						tabChangeNow = false
					}, 700)
				}
			}
		})
	}

	// Фотогалерея 
	if (document.location.pathname === '/photogallery.html') {
		const photogallerySlide = document.querySelector('#photogallery-slide')
		const photogallerySlideContent = document.querySelector('#photogallery-slide-content')
		const photogalleryClose = document.querySelector('#photogallery-slide-close')
		const photogalleryBG = document.querySelector('#photogallery-slide-bg')
		const photogalleryTabList = document.querySelectorAll('.foto-slider-item-wrapper')
		const fotoSlidePrev = document.querySelector('#foto-slide-prev')
		const fotoSlideNext = document.querySelector('#foto-slide-next')
		let activeFoto = 0
		let activeFotoTab = 0
		let photogalleryList = []
		for (let i=0; i<photogalleryTabList.length; i++) {
			photogalleryList.push(photogalleryTabList[i].querySelectorAll('.photogallery-item-image'))
		}

		const openPhotogallerySlide = function () {
			activeFoto = this[0]
			activeFotoTab = this[1]
			photogallerySlide.style.display = 'block'
			document.querySelector('html').classList.add('overflowy')
			document.querySelector('body').classList.add('overflowy')
			photogallerySlideContent.innerHTML = photogalleryList[this[1]][this[0]].innerHTML
			photogallerySlideContent.querySelector('img').setAttribute('src', photogallerySlideContent.querySelector('img').getAttribute('data-src'))
			setTimeout(function() {
				photogallerySlide.classList.add('active')
			}, 1)
		}

		const switchPhotogallerySlide = function () {
			if (photogalleryList[activeFotoTab].length === activeFoto + this) {
				activeFoto = 0
			} else if (activeFoto + this === -1) {
				activeFoto = photogalleryList[activeFotoTab].length - 1
			} else {
				activeFoto = activeFoto + this
			}
			photogallerySlideContent.innerHTML = photogalleryList[activeFotoTab][activeFoto].innerHTML
			photogallerySlideContent.querySelector('img').setAttribute('src', photogallerySlideContent.querySelector('img').getAttribute('data-src'))
		}

		const closePhotogallerySlide = function () {
			photogallerySlide.classList.remove('active')
			setTimeout(function() {
				document.querySelector('html').classList.remove('overflowy')
				document.querySelector('body').classList.remove('overflowy')
				photogallerySlide.style.display = 'none'
			}, 400)
		}

		for (let j = 0; j < photogalleryTabList.length; j++) {
			if (photogalleryList.length > 0) {
				for (let i = 0; i < photogalleryList[j].length; i++) {
					photogalleryList[j][i].addEventListener('click', openPhotogallerySlide.bind([i, j]))
				}
			}
		}
		fotoSlidePrev.addEventListener('click', switchPhotogallerySlide.bind(-1))
		fotoSlideNext.addEventListener('click', switchPhotogallerySlide.bind(1))

		photogalleryClose.addEventListener('click', closePhotogallerySlide)
		photogalleryBG.addEventListener('click', closePhotogallerySlide)
	}
})

