$(function() {
	const $mnu = $('header > .area > nav > .mnu')
	const $bg_1 = $('header > .bg_1')
	const $lnb_1 = $('.lnb_1')
	const $bg_2 = $('header > .bg_2')
	const $lnb_2 = $('.lnb_2')
	const $myPage = $('header > .area > .sub > ol > li:nth-child(3)')
	const $mpBox = $('header > .area > .sub > .sub-container')

	$('html, body').stop().animate({ scrollTop: 0 })

	$mnu.find('li.goods').on({
		mouseenter: function() {
			$('header > .area > nav > .mnu > .goods > a > span').stop().show()
			$bg_1.stop().show()
			$lnb_1.stop().show()
		},
		mouseleave: function() {
			$('header > .area > nav > .mnu > .goods > a > span').stop().hide()
			$lnb_1.stop().hide()
			$bg_1.stop().hide()
		}
	})

	$mnu.find('li.brand').on({
		mouseenter: function() {
			$('header > .area > nav > .mnu > .brand > a > span').stop().show()
			$bg_2.stop().show()
			$lnb_2.stop().show()
		},
		mouseleave: function() {
			$('header > .area > nav > .mnu > .brand > a > span').stop().hide()
			$lnb_2.stop().hide()
			$bg_2.stop().hide()
		}
	})

	$bg_1.on({
		mouseenter: function() {
			$('header > .area > nav > .mnu > .goods > a > span').stop().show()
			$(this).stop().show()
			$lnb_1.stop().show()
		},
		mouseleave: function() {
			$('header > .area > nav > .mnu > .goods > a > span').stop().hide()
			$lnb_1.stop().hide()
			$(this).stop().hide()
		}
	})

	$bg_2.on({
		mouseenter: function() {
			$('header > .area > nav > .mnu > .brand > a > span').stop().show()
			$(this).stop().show()
			$lnb_2.stop().show()
		},
		mouseleave: function() {
			$('header > .area > nav > .mnu > .brand > a > span').stop().hide()
			$lnb_2.stop().hide()
			$(this).stop().hide()
		}
	})

	$myPage.on({
		mouseenter: function() {
			$mpBox.stop().show()
		},
		mouseleave: function() {
			$mpBox.stop().hide()
		}
	})

	$mpBox.on({
		mouseenter: function() {
			$(this).stop().show()
		},
		mouseleave: function() {
			$(this).stop().hide()
		}
	})
})

$(function() {
	// 비주얼영역
	const $slides = $('#slides > .slides-container > li')
	const $indicator = $('#slides > .indicator > li > a ')
	let nowIdx = 0

	// 초기화 작업
	$indicator.eq(nowIdx).parent().addClass('on')
	$slides.eq(nowIdx).addClass('on').show()

	// 자동재생
	setInterval(function() {
		if (nowIdx < 7) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		$slides.filter('.on').stop().fadeOut(1000).removeClass('on')
		$slides.eq(nowIdx).stop().fadeIn(1000).addClass('on')
	}, 4000)

	// 인디케이터 클릭이벤트
	$indicator.on('click', function(evt) {
		nowIdx = $indicator.index(this)
		$(this).parent().addClass('on').siblings().removeClass('on')
		// 이전 슬라이드 지우기
		$slides.filter('.on').stop().fadeOut(1000).removeClass('on')
		// 이번에 나올 슬라이드
		$slides.eq(nowIdx).stop().fadeIn(1000).addClass('on')

		evt.preventDefault()
	})
})

$(function() {
	// 상품 슬라이드
	const $pdSlides = $('#product > .prdt-cont')
	const $pdIndi = $('#product > .prdt-indicator > li > a')

	$pdIndi.on('click', function(evt) {
		nowIdx = $pdIndi.index(this)
		$(this).parent().addClass('on').siblings().removeClass('on')
		$pdSlides.stop().animate({ left: -900 * nowIdx })
		evt.preventDefault()
	})
})

$(function() {
	// 리뷰 슬라이드
	const $rvSlides = $('#review > .revw-cont')
	const $prev = $('#review > .page > .prev')
	const $next = $('#review > .page > .next')
	let nowIdx = 0

	setInterval(function() {
		if (nowIdx < 7) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$rvSlides.stop().animate({ left: -280 * nowIdx })
		$('#review > .page > strong > span').text(nowIdx + 1)
	}, 5000)

	// 이전
	$prev.on('click', function(evt) {
		evt.preventDefault()
		if (nowIdx > 0) {
			nowIdx--
		} else {
			nowIdx = 7
		}
		$rvSlides.stop().animate({ left: -280 * nowIdx })
		$('#review > .page > strong > span').text(nowIdx + 1)
	})

	// 다음
	$next.on('click', function(evt) {
		evt.preventDefault()
		if (nowIdx < 7) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$rvSlides.stop().animate({ left: -280 * nowIdx })
		$('#review > .page > strong > span').text(nowIdx + 1)
	})
})

// spa영역 fade
$(function() {
	const $spaSlide = $('#spa > .spa-slides > .spa-container > li')
	const $spaIndi = $('#spa > .spa-slides > .spa-indicator > li > a')
	let nowIdx = 0

	// 초기화 작업
	$spaIndi.eq(nowIdx).parent().addClass('on')
	$spaSlide.eq(nowIdx).addClass('on').show()

	// 자동재생
	setInterval(function() {
		if (nowIdx < 1) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$spaIndi.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		$spaSlide.filter('.on').stop().fadeOut(1000).removeClass('on')
		$spaSlide.eq(nowIdx).stop().fadeIn(1000).addClass('on')
	}, 4000)

	$spaIndi.on('click', function(evt) {
		nowIdx = $spaIndi.index(this)
		$spaIndi.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		// 이전 슬라이드 사라지게
		$spaSlide.filter('.on').stop().fadeOut(1000).removeClass('on')
		// 이번에 나타날 슬라이드
		$spaSlide.eq(nowIdx).stop().fadeIn(1000).addClass('on')

		evt.preventDefault()
	})
})

// 팝업
$(function() {
	$('aside.pop > .on').on('click', function(evt) {
		$('.popup').stop().slideDown(1000)
		evt.preventDefault()
	})

	$('aside.pop > .off').on('click', function(evt) {
		$('aside.pop').stop().hide()
		evt.preventDefault()
	})

	$('aside.popup > .pop_clse').on('click', function(evt) {
		$('.popup').stop().slideUp(1000)
		evt.preventDefault()
	})
})
