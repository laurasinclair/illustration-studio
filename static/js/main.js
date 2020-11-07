// ScrollReveal().reveal('.sr-down', {
// 	distance: '5%',
// 	origin: 'top',
// 	// opacity: 0,
// 	easing: 'ease-in-out',
// 	duration: 500,
// 	interval: 100	
// });

$(document).ready(function() {
  $(window).scroll(function() {
	if ($(document).scrollTop() > 100) {
	  $("#logo").addClass("reveal");
	} else {
	  $("#logo").removeClass("reveal");
	}
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
	if ($(document).scrollTop() > 200) {
	  $(".contact").addClass("reveal");
	} else {
	  $(".contact").removeClass("reveal");
	}
  });
});

var srDown = {
	distance: '10%',
	origin: 'top',
	easing: 'ease-in-out',
	duration: 500,
	interval: 150
};

var srFade = {
	distance: '0',
	// opacity: null,
	duration: 500,
	interval: 150
};

var nodeList = document.querySelectorAll('.sr-down');
var otherNodeList = document.querySelectorAll('.work-section img');
console.log(otherNodeList)

ScrollReveal().reveal(nodeList, srDown);
ScrollReveal().reveal(otherNodeList, srFade);

// $('body').addClass('js');