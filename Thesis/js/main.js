let mainPage = document.getElementsByClassName('main')[0];
let overlay = document.getElementsByClassName('overlay')[0];
let popupBtn = document.getElementById('popup-btn');
let custom = document.getElementsByClassName('custom')[0];
let customInfo = document.getElementsByClassName('custom-info')[0];
let customChar = document.getElementsByClassName('custom-char')[0];
let customStyle = document.getElementsByClassName('custom-style')[0];

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


ready.addEventListener('click', function() {
	for (let i = 0; i < sex.length; i++) {
		if (sex[i].type == 'radio' && sex[i].checked){
			checkedSex = sex[i].value
		}
	}
	let candidate = {
		name: nameCandidate.value,
		age: ageCandidate.value,
		sex: checkedSex,
		opinion: opinion.value, 
		bio: bioCandidate.value
	};
	custom.style.display ='none';
	mainPage.style.display = 'block';

	function addNewCandidate() {
		//Новая карточка кандидата
		let mainCards = document.getElementsByClassName('main-cards')[0]
		let mainCardsItem = document.createElement('div');
		mainCardsItem.className = "main-cards-item main-cards-item-active";
		mainCards.insertBefore(mainCardsItem, mainCards.children[1]);

		//Фото кандидата
		let candidateBlock = document.createElement('div');
		candidateBlock.className = "candidate-block";
		mainCardsItem.insertBefore(candidateBlock, mainCardsItem.firstChild);

		let candidatePhoto = document.createElement('div');
		candidatePhoto.className = "photo photo-3";
		candidateBlock.insertBefore(candidatePhoto, candidateBlock.firstChild);

		//Результат
		let candidateResult = document.createElement('div');
		candidateResult.className = "result";
		candidateBlock.appendChild(candidateResult);

		let resultСountDiv = document.createElement('div');
		resultСountDiv.className = "result-count";
		candidateResult.insertBefore(resultСountDiv, candidateResult.firstChild);
		resultСountDiv.textContent = "0%";

		let progressDiv = document.createElement('div');
		progressDiv.className = "progress";
		candidateResult.appendChild(progressDiv);

		let progressBarDiv = document.createElement('div');
		progressBarDiv.className = "progress-bar progress-bar-1";
		progressDiv.insertBefore(progressBarDiv, progressDiv.firstChild);

		//Имя кандидата
		let nameDiv = document.createElement('div');
		nameDiv.className = ('name');
		mainCardsItem.appendChild(nameDiv);
		nameDiv.textContent = candidate.name;

		//Возраст кандидата
		let ageDiv = document.createElement('div');
		ageDiv.className = "age";
		mainCardsItem.appendChild(ageDiv);
		ageDiv.textContent = candidate.age + " лет";

		//Пол кандидата
		let sexLabel = document.createElement('div');
		sexLabel.className = "label";
		mainCardsItem.appendChild(sexLabel);
		sexLabel.textContent = "Пол:"

		let sexDiv = document.createElement('div');
		sexDiv.className = "sex";
		mainCardsItem.appendChild(sexDiv);
		sexDiv.textContent = candidate.sex;

		//Полит. взгляды кандидата
		let opinionLabel = document.createElement('div');
		opinionLabel.className = "label";
		mainCardsItem.appendChild(opinionLabel);
		opinionLabel.textContent = "Полит. взгляды:"

		let opinionDiv = document.createElement('div');
		opinionDiv.className = "views";
		mainCardsItem.appendChild(opinionDiv);
		opinionDiv.textContent = candidate.opinion;

		//Биография кандидата
		let bioLabel = document.createElement('div');
		bioLabel.className = "label";
		mainCardsItem.appendChild(bioLabel);
		bioLabel.textContent = "Биография:";

		let bioDiv = document.createElement('div');
		bioDiv.className = "bio";
		mainCardsItem.appendChild(bioDiv);
		bioDiv.textContent = candidate.bio;

	};
	addNewCandidate();
	console.log(candidate);
})