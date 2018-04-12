//Получить кнопку "Открыть магазин" через id
//Получить все поля в левом меню через классы
//Получить поля категории товаров через класс
//Получить все 3 кнопки через Tag
//Получить поля ввода товаров, времени и расчета бюджета через querySelector
//Получить поля имен сотрудников через querySelectorAll

let openBtn = document.querySelector("#open-btn");

let nameValue = document.getElementsByClassName("name-value")[0];
let budgetValue = document.getElementsByClassName("budget-value")[0];
let goodsValue = document.getElementsByClassName("goods-value")[0];
let itemsValue = document.getElementsByClassName("items-value")[0];
let employersValue = document.getElementsByClassName("employers-value")[0];
let discountValue = document.getElementsByClassName("discount-value")[0];
let isopenValue = document.getElementsByClassName("isopen-value")[0];

let goodsItem0 = document.getElementsByClassName("goods-item")[0];
let goodsItem1 = document.getElementsByClassName("goods-item")[1];
let goodsItem2 = document.getElementsByClassName("goods-item")[2];
let goodsItem3 = document.getElementsByClassName("goods-item")[3];

let mainFunctions = document.getElementsByClassName("main-functions")[0];
let btn0 = mainFunctions.getElementsByTagName("button")[0];
let btn1 = mainFunctions.getElementsByTagName("button")[1];
let btn2 = mainFunctions.getElementsByTagName("button")[2];

let chooseItem = document.querySelector(".choose-item");
let timeValue = document.querySelector(".time-value");
let countBudgetValue = document.querySelector(".count-budget-value");

let hireEmployersItem0 = document.querySelectorAll(".hire-employers-item")[0];
let hireEmployersItem1 = document.querySelectorAll(".hire-employers-item")[1];
let hireEmployersItem2 = document.querySelectorAll(".hire-employers-item")[2];

// 
console.log(openBtn);

console.log(nameValue);
console.log(budgetValue);
console.log(goodsValue);
console.log(itemsValue);
console.log(employersValue);
console.log(discountValue);
console.log(isopenValue);

console.log(goodsItem0);
console.log(goodsItem1);
console.log(goodsItem2);
console.log(goodsItem3);

console.log(btn0);
console.log(btn1);
console.log(btn2);

console.log(chooseItem);
console.log(timeValue);
console.log(countBudgetValue);

console.log(hireEmployersItem0);
console.log(hireEmployersItem1);
console.log(hireEmployersItem2);



