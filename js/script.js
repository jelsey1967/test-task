$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.cards__fav').click(function(e){
		e.target.classList.toggle('active');
		if (e.target.classList.contains('active')) {
			$('.favourites-popup').addClass('active');
			setTimeout(function(){
				$('.favourites-popup').removeClass('active');
			}, 2000);
		}
	});

	$('.favourites-popup__close').click(function(){
		$('.favourites-popup').removeClass('active');
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() >= 50) {
			$(".scroll-up").addClass("active");
		} else {
			$(".scroll-up").removeClass("active");
		}
	});

	if (window.pageYOffset > 50) {
		$(".scroll-up").addClass("active");
	};

	$(".scroll-up").click(function(){
		$('html, body').animate({scrollTop: 0}, 250);
	});
});