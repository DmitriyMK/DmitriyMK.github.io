(function() {

	var arr = [i];

	for (var i = 0; i < 5; i++) {
		arr[i] = prompt('Введите имя пользователя','Mickey');
	} 	

	var userName = prompt('Введите свое имя','Mickey');
	var flag = false;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === userName){
			flag = true;
			break;
		}
			if (arr[i] == null||undefined){
			flag = false;
			break;
		}
	}

	if (flag){
		alert(userName + ' Таки вы успешно вошли!');
	} else {
		alert('Такого пользователя не существует!');
	}
}) ();