let openBtn = document.querySelector("#open-btn");

let nameValue = document.getElementsByClassName("name-value")[0];
let budgetValue = document.getElementsByClassName("budget-value")[0];
let goodsValue = document.getElementsByClassName("goods-value")[0];
let itemsValue = document.getElementsByClassName("items-value")[0];
let employersValue = document.getElementsByClassName("employers-value")[0];
let discountValue = document.getElementsByClassName("discount-value")[0];
let isopenValue = document.getElementsByClassName("isopen-value")[0];

let goodsItem = document.getElementsByClassName("goods-item");

let mainFunctions = document.getElementsByClassName("main-functions")[0];
let goodsItemBtn = mainFunctions.getElementsByTagName("button")[0];
let countBudgetBtn = mainFunctions.getElementsByTagName("button")[1];
let hireEmployersBtn = mainFunctions.getElementsByTagName("button")[2];

let chooseItem = document.querySelector(".choose-item");
let timeValue = document.querySelector(".time-value");
let countBudgetValue = document.querySelector(".count-budget-value");

let hireEmployersItem = document.querySelectorAll(".hire-employers-item");


let budget,
		budgetForTheDay,
		// open,
		price

openBtn.addEventListener("click", () => {
		nameValue.textContent	= prompt("Введите название магазина", "").toUpperCase();
		budget		= +prompt("Какой у Вас бюджет?", "");
		while (isNaN(budget) || budget == "" || budget == null || budget < 0) {
			budget = +prompt("Какой у Вас бюджет?" , "");
		}
		budgetValue.textContent = budget;
});

goodsItemBtn.addEventListener("click", () => {
	for (let i = 0; i < goodsItem.length; i++) {
		let a = goodsItem[i].value;
		if ((typeof(a)) === "string" && (typeof(a)) !== null && a !== "" && a.length < 50 ) {
			console.log("Товар добавлен!");
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		} else {
			i--;
		}
	}
});

chooseItem.addEventListener("change", () => {
	let items = chooseItem.value;
	if (isNaN(items) && items != "") {
	mainList.shopItems = items.split(", ");
	mainList.shopItems.sort();
	itemsValue.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener("change", () => {
	let time = timeValue.value;
	if (time < 0) {
	console.log("Такого не может быть!");
	mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log("Время работать!")
		mainList.open = true;		
		} else if (time < 24) {
			console.log("Уже слишком поздно!");
			mainList.open = false;
			} else {
				console.log("В сутках только 24 часа!");
				mainList.open = false;
			}
	if (mainList.open == true) {
		isopenValue.style.backgroundColor = "green"
	} else {
		isopenValue.style.backgroundColor = "red"
	}
});

countBudgetBtn.addEventListener("click", () => {
	countBudgetValue.value = budget / 30;
});

hireEmployersBtn.addEventListener("click", () => {
	for (let i = 0; i < hireEmployersItem.length; i++) {
		let name = hireEmployersItem[i].value;
		mainList.employers[i] = name
		employersValue.textContent += mainList.employers[i] + ", ";
	}
});

let mainList = {
	budget: budget,
	shopName: nameValue,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = (price/100)*80;
		}
	},
};