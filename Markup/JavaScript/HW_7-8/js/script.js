// Tabs

$(document).ready(function () {

    $('.tab-menu li:first-child').addClass('active');
    $('.tab-content:not(:first)').hide();
    $('.tab-menu li a').click(function (e) {

        e.preventDefault();
        var content = $(this).attr('href');

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(content).slideToggle("slow");
        $(content).siblings('.tab-content').hide();
    });
});

// TOOLTIPS

$(document).ready(function(){
  
    $("form").hover(function() {
        $(this).find("span").animate({opacity: "show"}, "slow");
        var hoverText = $(this).attr("title");
        $(this).find("span").text(hoverText);
    }, function() {
        $(this).find("span").animate({opacity: "hide"}, "fast");
    });
 
});

