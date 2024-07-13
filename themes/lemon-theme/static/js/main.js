$(document).ready(function () {
	$(window).scroll(function () {
		if ($(document).scrollTop() > 250) {
			$('#logo').addClass('reveal');
		} else {
			$('#logo').removeClass('reveal');
		}
	});
});

$(document).ready(function () {
	$(window).scroll(function () {
		if (
			$(window).scrollTop() + $(window).height() >
			$(document).height() - $('footer').height() + 550
		) {
			$('.nav-element').addClass('hide');
		} else {
			$('.nav-element').removeClass('hide');
		}
	});
});

var srDown = {
	distance: '10%',
	origin: 'top',
	easing: 'ease-in-out',
	duration: 500,
	interval: 150,
};

var srFade = {
	distance: '0',
	// opacity: null,
	duration: 500,
	interval: 150,
};

var nodeList = document.querySelectorAll('.sr-down');
var otherNodeList = document.querySelectorAll('.work-section img');