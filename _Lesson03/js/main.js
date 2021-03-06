; //_lesson03
let budget,
		budgetForTheDay,
		shopName,
		open,
		time,
		price

function start() {
	budget = +prompt("Какой у Вас бюджет?", "");
	while (isNaN(budget) || budget == "" || budget == null || budget < 0) {
		budget = +prompt("Какой у Вас бюджет?");
	}

	shopName = prompt("Введите название магазина", "").toUpperCase();
	time = 19;
};
// start();

let mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 3; i++) {
			let a = prompt("Какой тип товара будем продавать?", "");
			if ((typeof(a)) === "string" && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
				console.log("Товар добавлен!");
				mainList.shopGoods[i] = a;
			} else {
				i--;
			}
		}
	},
	workTime: function workTime() {
		if (time < 0) {
		console.log("Такого не может быть!");
		} else if (time > 8 && time < 20) {
			console.log("Время работать!")
			mainList.open = true;
			} else if (time < 24) {
				console.log("Уже слишком поздно!")
				} else {
					console.log("В сутках только 24 часа!")
					};
	},
	getBudgetForTheDay: function getBudgetForTheDay() {
		budgetForTheDay = budget/30;
	},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = (price/100)*80;
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 1; i < 4; i++) {
			let name = prompt("Имя сотрудника", "");
			mainList.employers[i] = name
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую товары", "")
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите, ещё", ""));
		mainList.shopItems.sort();
	}
};
console.log(mainList);