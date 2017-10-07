$(document).ready(function() {

	/*MENU SCROLLING*/
	$('a[href^="#callback"], *[data-href^="#callback"]').on('click', function(e) {
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(d).offset().top
		}, t);
	});


	/*GMAP POP-UP*/
	$('.popup-gmaps').magnificPopup({
		disableOn: 319,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	/*VIDEO POP-UP*/
	$('.video1').magnificPopup({
		items: {
			src: 'https://www.youtube.com/watch?v=XVFzBQTJTTM',
		},
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
			'<div class="mfp-close"></div>' +
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
			'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				}
			},
			srcAction: 'iframe_src',
		}
	});

	$('.video2').magnificPopup({
		items: {
			src: 'https://www.youtube.com/watch?v=r3m8cV74EJY',
		},
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
			'<div class="mfp-close"></div>' +
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
			'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				}
			},
			srcAction: 'iframe_src',
		}
	});

	$('.video3').magnificPopup({
		items: {
			src: 'https://www.youtube.com/watch?v=lsMek8AOlK0',
		},
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
			'<div class="mfp-close"></div>' +
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
			'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				}
			},
			srcAction: 'iframe_src',
		}
	});

	$('.video4').magnificPopup({
		items: {
			src: 'https://www.youtube.com/watch?v=Fpw5T46NoDE',
		},
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
			'<div class="mfp-close"></div>' +
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
			'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				}
			},
			srcAction: 'iframe_src',
		}
	});

	$('.video5').magnificPopup({
		items: {
			src: 'https://www.youtube.com/watch?v=AEbuuKZ6SlA',
		},
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
			'<div class="mfp-close"></div>' +
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
			'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				}
			},
			srcAction: 'iframe_src',
		}
	});

	$('.video6').magnificPopup({
		items: {
			src: 'https://www.youtube.com/watch?v=bZFoBnpZ6pI',
		},
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
			'<div class="mfp-close"></div>' +
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
			'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				}
			},
			srcAction: 'iframe_src',
		}
	});

	/*PHOTOGALLERY*/
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Shoping Tour</small>';
			}
		}
	});

	$('.politics__link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
	});

	$(document).on('click', '.popup-modal-dismiss', function(e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

});

/*ANIMATION LET GO*/
new WOW().init();


jQuery('.tipso').tipso({
	background: '#de3ebe',
	color: '#fff',
	width: '300px',
	position: "left",
});



/*BACKGROUND VIDEO*/

/*Thanks to 
A PEN BY Vaughn D. Taylor*/

// Grab data attributes from video-wrapper

var videoID = $(".video-wrapper").data("video-id");
var videoYouTubeLink = $(".video-wrapper").data("video-youtube-link");
var videoStart = $(".video-wrapper").data("video-start");
var videoEnd = $(".video-wrapper").data("video-end");
var videoWidthAdd = $(".video-wrapper").data("video-width-add");
var videoHeightAdd = $(".video-wrapper").data("video-height-add");

// Prepend link to Youtube video if data attr is yes

if (videoYouTubeLink === 'y') {
	$(".video-wrapper").prepend('<a href="https://www.youtube.com/watch?v=' + videoID + '" class="video-expand" target="_blank">View on Youtube</a>');
}

// 2. This code loads the IFrame Player API code asynchronously.

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player) after the API code downloads.

var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		videoId: videoID,
		playerVars: {
			'autoplay': 0,
			'autohide': 1,
			'end': videoEnd,
			'loop': 1,
			'modestbranding': 1,
			'rel': 0,
			'showinfo': 0,
			'controls': 0,
			'disablekb': 1,
			'enablejsapi': 0,
			'iv_load_policy': 3
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

// 4. The API will call this function when the video player is ready.

function onPlayerReady(event) {
	vidRescale();
	event.target.mute();
	event.target.seekTo(videoStart);
}

// 5. The API calls this function when the player's state changes.

function onPlayerStateChange(e) {
	if (e.data === 1) {
		$('#player').addClass('active');
	} else if (e.data === 0) {
		player.seekTo(videoStart);
	}
}

// This function scales the video to window size and uses additional values to push video beyong window size

function vidRescale() {
	console.log('video reloaded');
	var w = $(window).width() + videoWidthAdd,
	h = $(window).height() + videoHeightAdd;
	if (w / h > 16 / 9) {
		player.setSize(w, w / 16 * 9);
		$('.tv .screen').css({
			'left': '0px'
		});
	} else {
		player.setSize(h / 9 * 16, h);
		$('.tv .screen').css({
			'left': -($('.tv .screen').outerWidth() - w) / 2
		});
	}
}

// Reloads the video on load and resize

$(window).on('resize', function() {
	vidRescale();
});


/*EQUAL HEIGHT IN SELECT*/
$(document).ready(function() {

	var highestBox = 0;
	$('.list').each(function() {
		if ($(this).height() > highestBox) {
			highestBox = $(this).height();
		}
	});
	$('.list, .form__attention, .form-ask').height(highestBox);

});

/*CHANGE COLUMN`S COLOR*/

$(document).ready(function() {
	$('.form__item').click(function() {
		$('.form__item').removeClass('active');
		$(this).addClass('active');
	});
});


/*LAZY LOAD*/
$(function() {
	$('.lazy').Lazy({
		// your configuration goes here
		scrollDirection: 'vertical',
		effect: 'fadeIn',
		visibleOnly: true,
		onError: function(element) {
			console.log('error loading ' + element.data('src'));
		}
	});
});

/*MENU SCROLLING*/
$('a[href^="#"], *[data-href^="#"]').on('click', function(e) {
	e.preventDefault();
	var t = 1000;
	var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
	$('html,body').stop().animate({
		scrollTop: $(d).offset().top
	}, t);
});

$(function() {
	$(".partners__item").slice(0, 6).show();
	$("#loadMore").on('click', function(e) {
		e.preventDefault();
		$(".partners__item:hidden").slice(0, 6).slideDown();
		if ($("partners__item:hidden").length == 0) {
			$("#load").fadeOut('slow');
		}
		$('html,body').animate({
			scrollTop: $(this).offset().top
		}, 1500);
		if ($("partners__item:last").css('display') == 'block') {
			$('#loadMore').hide();
			/*			$('.totop').show()*/
		}
	});
});


/*CAROUSEL*/
$(".owl-carousel").owlCarousel({
	loop: true,
	items: 2,
	smartSpeed: 400,
	margin: 10,
	responsive:{
        320:{
            items:1,
            center: true,
        },
        481:{
            items:2,
        },
    }
});

/*CAROUSEL #1 PRESS*/
var owl = $('.owl-carousel');
owl.owlCarousel();

$('.owl-next').click(function() {
	owl.trigger('next.owl.carousel');
})

$('.owl-prev').click(function() {
	owl.trigger('prev.owl.carousel');
});

//E-mail Ajax Send
/*$("form.callback").submit(function() {
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "../js/mail.php",
		data: th.serialize()
	});
});*/


/*PRELOADER*/
$(window).load(function() {
	$('#preloader').delay(100).fadeOut('slow');
});