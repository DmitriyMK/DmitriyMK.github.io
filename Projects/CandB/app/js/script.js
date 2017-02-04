/*CLICK TO SELECT LANGUAGE OR CURRENCY*/

document.addEventListener('click', function(event) {

	var open = document.querySelector('.dropdown-menu.open');
	var target = elem = event.target;
	while (target != this) {
		if (target.classList && target.classList.contains('dropdown-menu')) {
			if (elem.tagName == 'A') {
				var titleElem = target.querySelector('.dropdown-menu__title');
				titleElem.innerHTML = elem.textContent;
			}
			open && open != target && open.classList.remove('open');
			target.classList.toggle('open')
			return;
		}
		target = target.parentNode;
	}
	open && open.classList.remove('open');
});


// external js: isotope.pkgd.js

// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: 'figure',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
