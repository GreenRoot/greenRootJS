let mainPage = document.getElementsByClassName('main')[0];
let overlay = document.getElementsByClassName('overlay')[0];
let popupBtn = document.getElementById('popup-btn');
let custom = document.getElementsByClassName('custom')[0];
let customInfo = document.getElementsByClassName('custom-info')[0];
let customChar = document.getElementsByClassName('custom-char')[0];
let customStyle = document.getElementsByClassName('custom-style')[0];

function reloadPage() {
	mainPage.style.display = 'none';
	overlay.style.display = 'none';
	custom.style.display ='flex';
	customInfo.style.display = 'block';
	customChar.style.display = 'block';
	customStyle.style.display = 'block';
};

if (document.location.hash === '#update') {
	reloadPage();
	window.location.replace("#");
};

//closing the modal window
popupBtn.addEventListener('click', function() {
	mainPage.style.display = 'none';
	overlay.style.display = 'none';
	custom.style.display ='flex';
	customInfo.style.display = 'block';
	customChar.style.display = 'block';
	customStyle.style.display = 'block';
});

//creating a candidate
let nameCandidate = document.getElementById('name');
let ageCandidate = document.getElementById('age');
let opinion = document.getElementById('select');
let bioCandidate = document.getElementById('bio');
let ready = document.getElementById('ready');
let sex = document.getElementsByName('sex');

let sliderImg = document.getElementsByClassName('img-female');
let centerSliderImg = document.getElementsByClassName('center-img-female');

let slide_left = document.getElementById('prev'),
		slide_right = document.getElementById('next'),
		centerFemaleImg = document.getElementsByClassName('center-img-female'),
		femaleImg = document.getElementsByClassName('img-female'),
		centerMaleImg = document.getElementsByClassName('center-img-male'),
		maleImg = document.getElementsByClassName('img-male'),
		idx = 1;

let radios = document.querySelectorAll('input[type="radio"]');
Array.from(radios).forEach(function(el){
	el.addEventListener('change', function(){

		if (el.id == "male") {
			sliderImg = maleImg;
			centerSliderImg = centerMaleImg;
			for (let i = 0; i < femaleImg.length; i++) {
				femaleImg[i].style.display = "none";
			};
			for (let i = 0; i < centerFemaleImg.length; i++) {
				centerFemaleImg[i].style.display = "none";
			}
			maleImg[0].style.display = "block";
			centerMaleImg[0].style.display = "block";
			} else if (el.id == "female") {
			sliderImg = femaleImg;
			centerSliderImg = centerFemaleImg;
			for (let i = 0; i < maleImg.length; i++) {
				maleImg[i].style.display = "none";
			};
			for (let i = 0; i < centerMaleImg.length; i++) {
				centerMaleImg[i].style.display = "none";
			}

			femaleImg[1].style.display = "block";
			centerFemaleImg[1].style.display = "block";
		};
	});
});

showSlides(idx);

function showSlides(n) {
	if (n > sliderImg.length) {
		idx = 1;
	};
	if (n > centerSliderImg.length) {
		idx = 1;
	};
	if (n < 1) {
		idx = sliderImg.length;
	};
	if (n < 1) {
		idx = centerSliderImg.length;
	};
	for (let i = 0; i < sliderImg.length; i++) {
		sliderImg[i].style.display = "none";
	};
	for (let i = 0; i < centerSliderImg.length; i++) {
		centerSliderImg[i].style.display = "none";
	};
	sliderImg[idx - 1].style.display = "block";
	centerSliderImg[idx - 1].style.display = "block";
};
function plusSlides(n) {
	showSlides(idx += n)
};
function currentSlide(n) {
	showSlides(idx = n)
};
prev.addEventListener("click", function() {
	plusSlides(-1);
});
next.addEventListener("click", function() {
	plusSlides(1);
});

ready.addEventListener('click', function() {
	for (let i = 0; i < sex.length; i++) {
		if (sex[i].type == 'radio' && sex[i].checked){
			checkedSex = sex[i].value
		}
	};

	let candidate = {
		name: nameCandidate.value,
		age: ageCandidate.value,
		sex: checkedSex,
		opinion: opinion.value, 
		bio: bioCandidate.value
	};
	custom.style.display ='none';
	mainPage.style.display = 'block';

	let candidatePhoto = centerSliderImg[idx - 1].cloneNode(true);
	function addNewCandidate() {


		//Новая карточка кандидата
		let mainCardsItem = document.getElementsByClassName('main-cards-item')[1]
		mainCardsItem.style.display = "block";

		// Фото кандидата
		let candidateBlock = document.getElementsByClassName('candidate-block')[1];

		candidateBlock.insertBefore(candidatePhoto, candidateBlock.firstChild);

		// //Имя кандидата
		let nameDiv = document.getElementsByClassName('name')[1];
		nameDiv.textContent = candidate.name;

		// //Возраст кандидата
		let ageDiv = document.getElementsByClassName('age')[1];
		ageDiv.textContent = candidate.age + " лет";

		// //Пол кандидата
		let sexDiv = document.getElementsByClassName('sex')[1];
		sexDiv.textContent = candidate.sex;

		// //Полит. взгляды кандидата
		let opinionDiv = document.getElementsByClassName('views')[1];
		opinionDiv.textContent = candidate.opinion;

		// //Биография кандидата
		let bioDiv = document.getElementsByClassName('bio')[1];
		bioDiv.textContent = candidate.bio;

		//к (
		document.getElementsByClassName('center-img-male')[0].style.display = 'block';

		document.getElementsByClassName("center-preview-female-1")[0].style.cssText = "height: 195px; margin-right: 30px;";
		document.getElementsByClassName("center-preview-female-2")[0].style.cssText = "height: 195px; margin-right: 30px;";
		document.getElementsByClassName("center-preview-female-3")[0].style.cssText = "height: 195px; margin-right: 30px;";
		document.getElementsByClassName("center-preview-female-4")[0].style.cssText = "height: 195px; margin-right: 30px;";
		document.getElementsByClassName("center-preview-male-1")[0].style.cssText = "height: 195px; margin-right: 30px;";
		document.getElementsByClassName("center-preview-male-2")[0].style.cssText = "height: 195px; margin-right: 30px;";
		document.getElementsByClassName("center-preview-male-3")[0].style.cssText = "height: 195px; margin-right: 30px;";
		document.getElementsByClassName("center-preview-male-4")[0].style.cssText = "height: 195px; margin-right: 30px;";
	};
	addNewCandidate();
})

let voting = document.getElementById('voting');
let crime = document.getElementById('crime');
let candidate1 = document.getElementById('candidate1');
let candidate1count = document.getElementsByClassName('result-count')[0];
let candidate2 = document.getElementById('candidate2');
let candidate2count = document.getElementsByClassName('result-count')[1];
let candidate3 = document.getElementById('candidate3');
let candidate3count = document.getElementsByClassName('result-count')[2];

voting.addEventListener('click', function() {
	candidate1.classList.remove('progress-bar-4');
	candidate1.classList.add('progress-bar-1');
	candidate1count.textContent = "49%"
	candidate2.classList.remove('progress-bar-5');
	candidate2.classList.add('progress-bar-2');
	candidate2count.textContent = "31%"
	candidate3.classList.remove('progress-bar-6');
	candidate3.classList.add('progress-bar-3');
	candidate3count.textContent = "20%"

});

crime.addEventListener('click', function() {
	candidate1.classList.remove('progress-bar-1');
	candidate1.classList.add('progress-bar-4');
	candidate1count.textContent = "34%"
	candidate2.classList.remove('progress-bar-2');
	candidate2.classList.add('progress-bar-5');
	candidate2count.textContent = "21%"
	candidate3.classList.remove('progress-bar-3');
	candidate3.classList.add('progress-bar-6');
	candidate3count.textContent = "45%"
})




let reset = document.getElementById('reset');
reset.addEventListener('click', function() {
	function reloadWindow() {
		document.location.reload(true);
	};
	reloadWindow();
});