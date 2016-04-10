
(function() {

var arr = [];

for (var i = 0; i < 5; i++) {
	arr[i] = prompt('Введите имя пользователя','Mickey');
    if (arr[i] == null){
		return false;
    }
} 	
console.log(i);

var userName = prompt('Введите свое имя','Mickey');
var flag = false;

for (var i = 0; i < arr.length; i++) {
	if (arr[i] === userName){
		flag = true;
  break;
}

if (flag){
	alert(userName + ' вы успешно вошли!');
} else {
	alert('Такого пользователя не существует!');
}
}
}) ();