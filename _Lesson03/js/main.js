; //_lesson03
let budget,
		budgetForTheDay,
		shopName,
		open,
		time,
		price


function start() {
	budget 			= +prompt("Какой у Вас бюджет?");
	while (isNaN(budget) || budget == "" || budget == null || budget < 0) {
		budget 		= +prompt("Какой у Вас бюджет?");
	}

	shopName		= prompt("Введите название магазина").toUpperCase();
	open 				= confirm("Магазин ещё открыт?");
	time 				= 19;
};
start();


let mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: [],
	employers: {},
	open: open,
	discount: false
};

function hireAnEmployee() {
	let i = 1;
	while (i < 5) {
		let worker = prompt("Имя сотрудника")
		mainList.employers[i] = worker
		i++
		}
}
hireAnEmployee();

function chooseGoods() {
	for (let i = 0; i < 3; i++) {
		let a = prompt("Какой тип товара будем продавать?");	
		if ((typeof(a)) === "string" && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
			console.log("Товар добавлен!");
			mainList.shopGoods[i] = a;
		} else {
			i--;
		}
	}
};
chooseGoods();

function workTime() {
	if (time < 0) {
		console.log("Такого не может быть!");
		} else if (time > 8 && time < 20) {
				console.log("Время работать!")
			} else if (time < 24) {
					console.log("Уже слишком поздно!")
				} else {
						console.log("В сутках только 24 часа!")  // Проверяем время
					};	
}
workTime();

function discount() {
	if (mainList.discount == true) {
		price = price - (price / 100 * 20)
	}
}

function getBudgetForTheDay() {
	budgetForTheDay = budget/30;
	alert("Ваш бюджет на день $"+ budgetForTheDay);
}
getBudgetForTheDay();

console.log(mainList);