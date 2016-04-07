(function() {

var arr = [];

for (var i = 0; i < 5; i++) {
	arr[i] = prompt('Введите имя пользователя','Mickey');
    if (arr[i] === null || undefined);{
		return false;
    }
} 	
console.log(arr);

var userName = prompt('Введите свое имя');
var flag = false;

for (var j = 0; j < arr.length; j++) {
	if (arr[j] === userName){
		flag = true;
    }
	if (arr[j] === null){
		break;
    }

  	console.log(j);
  		break;
}

if (flag){
	alert(userName + ' вы успешно вошли!');
} else {
	alert('Такого пользователя не существует!');
}

}) ();