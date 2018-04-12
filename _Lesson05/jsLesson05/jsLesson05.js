let body = document.getElementsByTagName("body");
let title = document.querySelectorAll(".title")
let adv = document.querySelector(".adv");
let pr = document.querySelector(".prompt")

let newLi = document.createElement("li");
document.getElementsByClassName("menu")[0].appendChild(newLi);
newLi.classList.add("menu-item");
newLi.textContent = "Пятый Элемент"

let menuItem = document.querySelectorAll(".menu-item");

menuItem[0].style.order = "1";
menuItem[1].style.order = "3";
menuItem[2].style.order = "2";
menuItem[3].style.order = "4";
menuItem[4].style.order = "5";

body[0].style.background = "url(img/apple_true.jpg) center no-repeat";
title[0].textContent = "Мы продаем только подлинную технику Apple";
adv.remove();


let answer = prompt('Как Вы относитесь к технике Apple?', '');
pr.textContent = (answer);
