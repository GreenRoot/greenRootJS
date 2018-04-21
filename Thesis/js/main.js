let mainPage = document.getElementsByClassName('main')[0];
let overlay = document.getElementsByClassName('overlay')[0];
let popupBtn = document.getElementById('popup-btn');
let custom = document.getElementsByClassName('custom')[0];
let customInfo = document.getElementsByClassName('custom-info')[0];
let customChar = document.getElementsByClassName('custom-char')[0];
let customStyle = document.getElementsByClassName('custom-style')[0];


popupBtn.addEventListener('click', function() {
	mainPage.style.display = 'none';
	overlay.style.display = 'none';
	custom.style.display ='flex';
	customInfo.style.display = 'block';
	customChar.style.display = 'block';
	customStyle.style.display = 'block';

});

console.log(popupBtn)