var login 		= prompt('Ваш логин', 'kek');
 
	if (login == 'admin') {
		var password 	= prompt('Введите пароль', '********');
		if (password == '123') {
			alert('Добро пожаловать, ' + login)
		} else if ( password == null) {
			alert('Вход отменён!')
		} else {
			alert('Неверный пароль!')
		}

	} 
	else if (login == null) {
		alert('Вход отменён')
	} 
	else {
		alert('Вас нет в базе данных')
	}
