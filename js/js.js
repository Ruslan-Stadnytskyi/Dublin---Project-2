window.onload = function(){
function menu(){
	document.querySelector('.body').classList.toggle('menu-opened');
}
let arr = document.querySelectorAll('.menu-toggle');
for(const value of arr){
	value.addEventListener('click', menu);
}


}

	$('.gallery').slick({
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
	});

	// slideshow slide-text
	$('.slide-text').slick({
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	});




	$('.down-menu .opener').click(function () {
		if ($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
			$(this).siblings('.slide').slideUp(300);
			$(this).siblings('.hor-vertic').find(".vertical").fadeIn(300);
		} else {
			$(this).parent().addClass('active').siblings('.active').removeClass('active').children('.slide').slideUp(300).siblings('.vertical').fadeIn(300);
			$(this).siblings('.slide').slideDown(300);
			$(this).siblings('.hor-vertic').find(".vertical").fadeOut(300);
		};
		return false;
	});

 