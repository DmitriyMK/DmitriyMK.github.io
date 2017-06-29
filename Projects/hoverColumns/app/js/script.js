$(document).ready(function(){

	$(".burger").on("tap click", function () { 
		$(this).toggleClass("menu-on");
		$(this).toggleClass('active');
		$('.nav__list').toggleClass("nav__listOn");		
	});
});
