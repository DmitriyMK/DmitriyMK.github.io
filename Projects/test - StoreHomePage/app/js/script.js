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
})

$(function() {

	var filterList = {

		init: function() {

			// MixItUp plugin
			// http://mixitup.io
			$('#catalog__products').mixItUp({
				selectors: {
					target: '.product',
					filter: '.catalog__list-link'
				},
				load: {
					filter: '.shirts' // show app tab on first load
				}
			});

		}

	};

	// Run the show!
	filterList.init();

});