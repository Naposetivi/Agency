$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
});

const swiper = new Swiper('.swiper-slider-team', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-slider-team-button-next',
		prevEl: '.swiper-slider-team-button-prev ',
	},
});