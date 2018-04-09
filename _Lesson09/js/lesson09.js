let age = document.getElementById('age');

	function showUser(surname, name) {
		this.surname = surname;
		this.name = name;
		this.value = age.value
		alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
	}
let user001 = new showUser("Neil deGrasse", "Tyson", age)