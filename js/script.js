$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.cards__fav').click(function (e) {
		e.target.classList.toggle('active');
		if (e.target.classList.contains('active')) {
			$('.favourites-popup').addClass('active');
			setTimeout(function () {
				$('.favourites-popup').removeClass('active');
			}, 2000);
		}
	});

	$('.favourites-popup__close').click(function () {
		$('.favourites-popup').removeClass('active');
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() >= 50) {
			$(".scroll-up").css({ 'bottom': '0', 'right': $(".main__body").offset().left });
		} else {
			$(".scroll-up").css({ 'bottom': '-60px', 'right': $(".main__body").offset().left });
		}
	});

	if (window.pageYOffset > 50) {
		$(".scroll-up").css({ 'bottom': '0', 'right': $(".main__body").offset().left });
	};

	$(".scroll-up").click(function () {
		$('html, body').animate({ scrollTop: 0 }, 250);
	});

	$("#subscribe-button").click(function(event){
		event.preventDefault();

		if (emailTest()){
			$('#email').addClass('error');
		} else{
			$('#email').removeClass('error');
		}
	});

	function emailTest(){
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test($('#email').val());
		//проверка на несоответствие значения input валидной форме email
	}
});