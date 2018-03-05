$(document).ready(function() {
	$("body").niceScroll({
		scrollspeed: 60,
		mousescrollstep: 60,
		smoothscroll: true,
		cursorwidth: 8,
		cursorborder: 0,
		cursorcolor: '#1a46a8',
		cursorborderradius: 2,
		autohidemode: true,
		horizrailenabled: false,
		cursoropacitymin: 1,
		background: false,
		zindex: "9999"
	});

	/*	$('html').addClass('no-overflow-y');*/

});


$(document).ready(function() {

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	$(".box__elements1, .box__elements2, .box__elements3, .box__elements4, .box__elements5, .box__elements6,.box__elements7, .box__elements8, .box__elements9, .box__elements10,.box__elements11,.box__elements12, .box__elements13, .box__elements14, .box__elements15, .box__elements16, .box__elements17, .box__elements18, .box__elements19, .box__elements20, .box__elements21, .box__elements22, .box__elements23").fancybox({
		hideOnOverlayClick: true,
		speedOut: 300,
		speedIn: 300,
		changeSpeed: 300,
		effect: 'fade',
		prevEffect: 'none',
		nextEffect: 'none',
		'scrolling': 'yes',
		'titleShow': 'true',
		'titlePosition': 'outside',
		'showNavArrows': true,
		arrows: true,
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});



	$('.slider, .crane__selectSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
	});


/*SPECIAL STYLE FOR INITIAL SLIDE*/

	$('.sliderGross').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
		initialSlide: 1,
	});

	$('.sliderEris').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
		initialSlide: 2,
	});

	$('.sliderAurora').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
		initialSlide: 4,
	});

	$('.sliderFortuna').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
		initialSlide: 5,
	});

	$('.sliderJuventas').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
		initialSlide: 6,
	});

	$('.sliderVenus').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
		initialSlide: 1,
	});

	$('.sliderVictory').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
		initialSlide: 1,
	});

	$('.sliderSelene').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
		initialSlide: 6
	});





	$('.crane__slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		arrows: true,
		responsive: [

			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			}
		]
	});

	$('.review__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
	});



	$('.scrolling__link').on('click', function(e) {
		e.preventDefault();
		var t = 1500;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(d).offset().top
		}, t);
	});
});


//E-mail Ajax Send

/*#form-present
#form-consult*/

$('.phone-mask').mask('+38(999)999-99-99');

$("#modal-recieve-form-1").validate({

	submitHandler: function() {
		var th = $(".form-validate");
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			var inst = $('[data-remodal-id=modal-thanks]').remodal();
			inst.open();

			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	}
});



$(window).on('resize orientationchange', function() {
	$('.crane__slider').slick('resize');
});

function initMap() {

	var latlng = new google.maps.LatLng(49.9959508, 36.28826);
	var settings = {
		zoom: 18,
		center: latlng,
		center: {
			lat: 49.9959508,
			lng: 36.28827
		},
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		scrollwheel: false,
		disableDoubleClickZoom: true,
		navigationControlOptions: {
			style: google.maps.NavigationControlStyle.SMALL
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles:


			[{
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": -25
			}, {
				"weight": 5
			}]
		}, {
			"elementType": "labels.text",
			"stylers": [{
				"color": "#b0b0b0"
			}, {
				"weight": 1
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry.fill",
			"stylers": [{
				"lightness": -20
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#707070"
			}, {
				"weight": 1
			}]
		}, {
			"featureType": "landscape",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#909090"
			}, {
				"lightness": -30
			}, {
				"weight": 1.5
			}]
		}, {
			"featureType": "landscape",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#909090"
			}, {
				"weight": 1
			}]
		}, {
			"featureType": "road",
			"stylers": [{
				"color": "#535353"
			}, {
				"visibility": "on"
			}, {
				"weight": 8
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{
				"color": "#535353"
			}, {
				"weight": 3.5
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [{
				"weight": 8
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [{
				"weight": 5
			}]
		}, {
			"featureType": "road",
			"elementType": "labels",
			"stylers": [{
				"weight": 1.5
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.text",
			"stylers": [{
				"weight": 2
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#ffffff"
			}, {
				"weight": 7.5
			}]
		}]

	};
	var map = new google.maps.Map(document.getElementById("google-map"), settings);
	var myLatlng = new google.maps.LatLng(49.9959508, 36.288216);

	var myOptions = {
		zoom: 10,
		center: myLatlng,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var image = 'img/icons/marker.png';
	var beachMarker = new google.maps.Marker({
		position: {
			lat: 49.9959509,
			lng: 36.288216
		},
		map: map,
		icon: image
			// title: 'Push-k Solutions'
	});

};