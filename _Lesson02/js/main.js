	; //_lesson02
var budget 			= +prompt("Какой у Вас бюджет?");
var shopName		= prompt("Введите название магазина");
var open 				= confirm("Магазин ещё открыт?");
var time 				= 19;

var employers = {
	Director: "Наталья",
	Seller: "Олег",
	Cashier: "Михаил"
};

var mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: [],
	employers: employers,
	open: open,
};

// *******Первый способ*******
// var i = 0;
// while (i < 3) {
// 	let a = prompt('Какой тип товара будем продавать?');
// 		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
// 		console.log('Товар добавлен');
// 		mainList.shopGoods[i] = a;
// 	i++;
// 	} else  
// 		i--; //Если поля ввода не соответствуют правилам то повторяем запрос
// };

// *******Второй способ*******
// var i = 0;
// do {
// 	let a = prompt('Какой тип товара будем продавать?');
// 		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
// 		console.log('Товар добавлен');
// 		mainList.shopGoods[i] = a;
// 		i++;
// 		} else  
// 		i--; //Если поля ввода не соответствуют правилам то повторяем запрос
// 	}
// while (i < 3);

// *******Третий способ*******
for (let i = 0; i < 3; i++) {
	let a = prompt('Какой тип товара будем продавать?');	
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
		console.log('Всё хорошо!');
		mainList.shopGoods[i] = a;
	} else {
		i--;
	}
};

if (time < 0) {
	console.log('Такого не может быть!');
	} else if (time > 8 && time < 20) {
			console.log('Время работать!')
		} else if (time < 24) {
				console.log('Уже слишком поздно!')
			} else {
					console.log('В сутках только 24 часа!')  // Проверяем время
				};

var budgetForTheDay = budget/30;
console.log(mainList);
alert("Ваш бюджет на день $"+ budgetForTheDay);