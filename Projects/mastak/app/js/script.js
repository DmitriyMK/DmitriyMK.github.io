$(document).ready(function() {

	/*MENU SCROLLING*/
/*	$('.scroll__link').on('click', function(e) {
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(d).offset().top
		}, t);
	});*/

	/*RESPONSIVER BURGER MENU*/
		
	$(".burger").click(function() {
		$('.overlay').fadeToggle(300);
		$(this).toggleClass('active');
	})
	
	$(window).resize(function() {
		if ($(window).width() > 992) {
			$('.header__nav-list').removeAttr('style');
		}
	})


	$('.review__slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		speed: 500,
	});

	$('.example__slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 2,
		speed: 500,
	});


	/*FORM POP-UP*/
	$('.open-popup-link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		callbacks: {
			beforeOpen: function() {
				if ($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.phone-mask').mask('+38(000)000-00-00');



	/*	new WOW().init();*/

});





//E-mail Ajax Send
$("form.open-popup-link").submit(function() {
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "../js/mail.php",
		data: th.serialize()
	}).done(function() {
		$(th).find('.success').addClass('active').css("display", "flex").hide().fadeIn();
		setTimeout(function() {
			$(th).find('.success').removeClass('active').fadeOut();
			th.trigger("reset");
		}, 3000);
	});
	return false;
});


var GM = {
	init: function () {
		this.initCache();
		this.initMap();
		this.initBannerTopParallax();
	},

	initCache: function() {
		this.$body         = $('body');
		/*this.$popupContent = $('.js-marker-content');*/
		this.parallaxImg   = '.js-parallax-img:visible'
	},

	initBannerTopParallax: function () {
		var $parallaxImg  = null;

		this.$body.mousemove(function(e) {
			if($parallaxImg) {
				var $el    = $(e.currentTarget),
				xPos   = e.pageX - (window.innerWidth / 2),
				mXPcnt = Math.round(xPos / $el.width() * 100),
				diffX  = $parallaxImg.width() - $el.width(),
				myX    = diffX * (mXPcnt / 1500);

				$parallaxImg.animate({left: myX}, 0);
			} else if($(this.parallaxImg).length) {
				$parallaxImg = $(this.parallaxImg);
			}
		}.bind(this));
	},

	initMap: function () {
		var coordinates = {lat: 47.212325, lng: 38.933663},
		popupContent = this.$popupContent.html(),
		markerImage = '../img/pointer.png',
		zoom = 15,

		map = new google.maps.Map(document.getElementById('map'), {
			center: coordinates,
			zoom: zoom,
			disableDefaultUI: true,
			scrollwheel: false
		}),

		infowindow = new google.maps.InfoWindow({
			content: popupContent
		}),

		marker = new google.maps.Marker({
			position: coordinates,
			map: map,
			icon: markerImage
		});

		/*$.getJSON("../json/map-style/map-style_colored.json", function (data) {
			map.setOptions({styles: data});
		});*/

		google.maps.event.addListener(infowindow,'closeclick',function(){
			marker.setAnimation(google.maps.Animation.BOUNCE);
		});

		marker.addListener('click', function () {
			marker.setAnimation(null);
		});

		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});

		infowindow.open(map, marker);
	}
};


/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');

});