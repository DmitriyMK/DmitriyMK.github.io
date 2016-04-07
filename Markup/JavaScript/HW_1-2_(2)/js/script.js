
(function() {
	var arr = [];
	var n = prompt('number of names');
	var i;

	for ( i = 1; i <= n; i++) {
		arr.push(prompt('enter the name number '+i));
	}


	var name = prompt('enter your name');


	for (i = 0; i < arr.length; i++) {
		if (arr[i] == name) { 
			alert(name+', you are welcome');
			return;
		}
	}
	alert('eror');
	
}) ();