 var x = +prompt("Введите число, которое будем возводить в степень","");
 var n = +prompt("Введите степень, в которую будем возводить", "");


 function pow(x, n) {
 	var result = 1;

 	for (var i = 0; i < n; i++) {
 		result = result * x;
 	}

 	return result;
 }

 var powResult = pow(x, n);

if (n < 0) {
	console.log( "Вай вай вай, степень не можеть быть меньше чем 0");
} else {
	console.log (powResult);
}

