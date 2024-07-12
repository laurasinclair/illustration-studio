// var scroll = new SmoothScroll('a[href*="#"]');

$(document).on("scroll", function(){
	if
		($(document).scrollTop() > 100){
			$("nav").addClass("shrink");
	}
	else
	{
		$("nav").removeClass("shrink");
	}
});

var srSlideUp = {
	distance: '10px',
	origin: 'bottom',
	opacity: 0,
	easing: 'ease-in-out',
	duration: 500
};

var srScale = {
	easing: 'ease-in-out',
	scale: 0.95,
	duration: 500
};

ScrollReveal().reveal('.flip-1', {
	rotate: {
		z: -150,
	},
	easing: 'ease-in-out',
	scale: 0.95,
	duration: 500
});

ScrollReveal().reveal('.flip-2', {
	rotate: {
		x: 20,
		z: 500
	},
	easing: 'ease-in-out',
	scale: 0.95,
	duration: 500,
});

ScrollReveal().reveal('.flip-3', {
	easing: 'ease-in-out',
	scale: 0.95,
	duration: 500,
});

ScrollReveal().reveal('.flip-4', {
	rotate: {
		z: -150,
	},
	easing: 'ease-in-out',
	scale: 0.95,
	duration: 500,
});

ScrollReveal().reveal('.flip-5', {
	rotate: {
		x: 20,
		z: 500
	},
	easing: 'ease-in-out',
	scale: 0.95,
	duration: 500,
});

ScrollReveal().reveal('.flip-6', {
	easing: 'ease-in-out',
	scale: 0.95,
	duration: 500,
});

ScrollReveal().reveal('.flip-7', {
	rotate: {
		x: 20,
		z: 500
	},
	easing: 'ease-in-out',
	scale: 0.95,
	duration: 500,
});

ScrollReveal().reveal('.flip-8', {
	easing: 'ease-in-out',
	scale: 0.95,
	duration: 500,
});

ScrollReveal().reveal('.delay-1', {
	delay: 200
});

ScrollReveal().reveal('.delay-2', {
	delay: 400
});

ScrollReveal().reveal('.delay-3', {
	delay: 800
});

ScrollReveal().reveal('.delay-4', {
	delay: 1000
});

ScrollReveal().reveal('.delay-5', {
	delay: 1200
});

ScrollReveal().reveal('.delay-6', {
	delay: 1400
});

ScrollReveal().reveal('.delay-7', {
	delay: 1800
});

ScrollReveal().reveal('.delay-8', {
	delay: 2000
});

ScrollReveal().reveal('.srScale', srScale);
ScrollReveal().reveal('.srSlideUp', srSlideUp);
ScrollReveal().reveal('.project imsg', srScale);
