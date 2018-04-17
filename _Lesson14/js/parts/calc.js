function calc () {
	let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			tatal = 0,
			re = /^[0-9]$/;

	totalValue.innerHTML = 0;
	place.addEventListener("change", function() {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

	persons.addEventListener("change", function() {
		personsSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if (restDays.value == '' || isNaN(parseInt(this.value)) == true || personsSum % 1 != 0 || daysSum % 1 != 0 || personsSum <= 0 || daysSum <= 0) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	restDays.addEventListener("change", function() {
		daysSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if (restDays.value == '' || isNaN(parseInt(this.value)) == true || personsSum % 1 != 0 || daysSum % 1 != 0 || personsSum <= 0 || daysSum <= 0) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

}

module.exports = calc;