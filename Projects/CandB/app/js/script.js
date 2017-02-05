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


/*  FILTER */
document.addEventListener('click', function (e) {

  var button = e.target;
  if (button.getAttribute('data-reset') === 'true') {

    // Reset the filters
    var filter = button.getAttribute('data-filter');
    resetFilter(filter);
  } else {

    // Filter the tag
    var filter = button.getAttribute('data-filter');
    var tag    = button.getAttribute('data-filter-tag');
    resetFilter(filter);
    filterTag(filter, tag);
  }
});

// Filter tag
function filterTag (filter, tag) {

  var items = document.querySelectorAll('.' + filter + ' > figure');

  for (var i = 0; i < items.length; i++) {
    var itemTags = items[i].getAttribute('data-tags');

    // Catch case with no tags
    if (itemTags != null) {
      if (itemTags.indexOf(tag) < 0) {
        items[i].setAttribute('data-toggle', 'off');
      }
    }
  }
}

// Reset filters
function resetFilter (filter) {
  var items = document.querySelectorAll('.' + filter + ' > figure');

  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('data-toggle', 'on');
  }
}