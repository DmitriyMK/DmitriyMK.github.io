 var x = +prompt("Введите число, которое будем возводить в степень");
 var n = +prompt("Введите степень, в которую будем возводить");


 function pow(x, n) {

 	var result = 1;
    
    if (n > 0) {
    	for (var i = 0; i < n; i++) {
    		result = result * x;
    	}
       	return result;
    }

    if (n < 0) {
    	for (var j = n; j < -1; j++) {
    		result = result * x;
    	}
        return 1 / result;
    }

    if (n === 0) {
    	return result;
    }
   else {
     console.log ('Введите пожалуйста целое число');
   }
  }

 console.log (pow(x, n));

