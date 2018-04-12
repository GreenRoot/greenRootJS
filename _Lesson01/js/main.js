; //lesson01
var budget = +prompt("Какой у Вас бюджет?");
var shopName = prompt("Введите название магазина");
var open = confirm("Магазин ещё открыт?");
var employers = {
	Director: "Наталья",
	Seller: "Олег",
	Cashier: "Михаил"
};
var mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: [prompt("Введите название первого продукта"), prompt("Введите название второго продукта"), prompt("Введите название третьего продукта")],
	employers: employers,
	open: open,
};
var budgetForTheDay = budget/30;
console.log(mainList);
alert("Ваш бюджет на день $"+ budgetForTheDay);