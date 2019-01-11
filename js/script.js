var menuBlock = document.getElementById('moblieMenuBlock');

function openMenu() {
	menuBlock.style.display = 'block';
}

function closeMenu() {
	menuBlock.style.display = 'none';
}


$(document).ready(function() {
	$('.slider-wrapper .slider').slick({
		prevArrow: $('.slider-controls .arrow-left'),
		nextArrow: $('.slider-controls .arrow-right'),
		dots: false
	});
})