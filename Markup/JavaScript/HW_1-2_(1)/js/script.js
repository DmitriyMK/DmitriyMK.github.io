 var x = +prompt("Введите число, которое будем возводить в степень");
 var n = +prompt("Введите степень, в которую будем возводить");


 function pow(x,n){
 	if (n < 0) {
 		return alert ('Введите число большее нуля');
 	} else {

 	var result = 1;

 	for (var i = 0; i < n; i++) {
 		result = result * x;
 	}

 	return result;
 }
 }

 var powResult = pow(x, n);

 console.log (pow(x, n));




