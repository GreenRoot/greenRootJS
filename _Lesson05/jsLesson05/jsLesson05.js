let body = document.getElementsByTagName("body");
let menuItem = document.querySelectorAll(".menu-item");
let title = document.querySelectorAll(".title")
let adv = document.querySelector(".adv");


menuItem[0].style.order = "1";
menuItem[1].style.order = "3";
menuItem[2].style.order = "2";
menuItem[3].style.order = "4";
body[0].style.background = "url(img/apple_true.jpg) center no-repeat";
title[0].textContent = "Мы продаем только подлинную технику Apple";
adv.remove();

let answer = setTimeout("prompt('Как Вы относитесь к технике Apple?')", 2000);
console.log(answer);
