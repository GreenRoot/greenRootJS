// тест задачи "Угадай число"
var num = prompt('Угадай число');

if (num < 18) {
	alert('Не, больше');
	}
	else if (num > 18) {
	alert('Не, меньше');
	}
	else if (num == 18)
	{
	alert('Красава!');
	}
	else {
		alert('Тебе надо угадать чило, обнови.');
	}