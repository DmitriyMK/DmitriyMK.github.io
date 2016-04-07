(function() {

var arr = [];

for (var i = 0; i < 5; i++) {
	arr[i] = prompt('Введите имя пользователя','Mickey');
    if (arr[i] == null);{
		break;
    }
} 	
console.log(i);

var userName = prompt('Введите свое имя','Mickey');
var flag = false;

for (var j = 0; j < arr.length; j++) {
	if (arr[i] === userName){
		flag = true;
    }
	if (userName == null){
		return false;
    }
}

if (flag){
	alert(userName + ' вы успешно вошли!');
} else {
	alert('Такого пользователя не существует!');
}

}) ();