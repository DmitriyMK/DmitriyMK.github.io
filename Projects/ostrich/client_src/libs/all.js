$(document).ready(function() {

  $(function() {
    $('.accordion__header').click(function(e) {

      e.preventDefault();

      $(this).siblings('.accordion__body').slideToggle()
      .parent().toggleClass('active')
      .parent().removeClass('active')
      .children('.accordion__body').slideUp();
    });
  });


  
  $(".btn__minus").click(function() {
    var $this = $(this);
    var quantity = parseInt($this.siblings(".accordion__num").val());
    if (quantity > 0) 
        quantity--; 
    
    $(this).siblings(".accordion__num").val(quantity);
    calcPrice();
    calcPriceTotal();
  });


  $(".btn__plus").click(function() {
    var $this = $(this);
    var quantity = parseInt($this.siblings(".accordion__num").val()) + 1;
    $(this).siblings(".accordion__num").val(quantity);
    calcPrice();
    calcPriceTotal();
  });



  var calcPrice = function() {
    var sumPrice = $(".sumPrice");

    var priceAdult = parseInt($('.priceAdult').html());
    var quantityAdult = parseInt($(".amountTicketsAdults").val());
    var priceChildren = parseInt($(".priceChildren").html());
    var quantityChildren = parseInt($(".amountTicketsChildren").val());

    var totalPrice = priceAdult * quantityAdult + priceChildren * quantityChildren;
    sumPrice.html(totalPrice);
  };


  var calcPriceTotal = function() {
    var sumPriceTotal = $(".sumPriceTotal");
    var sumPrice = parseInt($('.sumPrice').html());

    var priceBanket = parseInt($('.priceBanket').html());
    var amountBanket = parseInt($(".amountBanket").val());
    var priceTerrace = parseInt($(".priceTerrace").html());
    var amountTerrace = parseInt($(".amountTerrace").val());
    var priceGrill = parseInt($('.priceGrill').html());
    var amountGrill = parseInt($(".amountGrill").val());
    var priceBesedka = parseInt($(".priceBesedka").html());
    var amountBesedka = parseInt($(".amountBesedka").val());
    var priceTable = parseInt($(".priceTable").html());
    var amountTable = parseInt($(".amountTable").val());

    var totalPriceAll = sumPrice + ((priceBanket*amountBanket) + (priceTerrace*amountTerrace) + (priceGrill*amountGrill) + (priceBesedka*amountBesedka) + (priceTable*amountTable));
    
    sumPriceTotal.html(totalPriceAll);

  };


  $('.phone-mask').mask('+38(999)999-99-99');


});


$("#formOrder").validate({

  rules: {
   name: "required",
   email: {
     required: true,
     email: true,
   },
   phone: {
     required: true,
   }

 },
 messages: {
   name: "Проверьте правильность ввода",
   email: "Проверьте правильность ввода",
   phone: "Проверьте правильность ввода"
 },

 submitHandler: function() {
  var th = $("#formOrder");

  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function() {

      // window.location = 'thank.html';

      setTimeout(function() {
        th.trigger("reset");
      }, 1000);
    });

  return false;
}
});