var $ = jQuery;

jQuery(document).ready(function($) {  

    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

});

// Setting up Video

var $ = jQuery;
var vidWidth = $(window).width(), vidHeight = $(window).height();

$("#video-wrap").css({
    
    'height': vidHeight
});

$('#video').videoBG({
    mp4:'assets/bg.mp4',
    ogv:'assets/bg.ogv',
    webm:'assets/bg.webm',
    poster:'assets/poster.jpg',
    scale:true,
    zIndex:0,
    height: 750
});

// Navbar fixing

$("#nav-menu").stick_in_parent()


// Calling Wow

new WOW().init();


// Count Down Timer

$('.countdown').final_countdown({
    start : 0, //Here use Milisecond. To convert your time you can go to this(https://currentmillis.com/) website. 
    end   : 1900200,
    now : 0,
seconds: {
borderColor: '#5677fc',
borderWidth: '3'
},
minutes: {
    borderColor: '#7e57c2',
    borderWidth: '3'
},
hours: {
    borderColor: '#4db6ac',
    borderWidth: '3'
},
days: {
    borderColor: '#d81b60',
    borderWidth: '3'
}}, function() {
});


// rotating text

(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(1000)
            .fadeOut(1000, showNextQuote);
    }
    
    showNextQuote();
    
})();

//E-mail Ajax Send
$("form.callback").submit(function() {
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