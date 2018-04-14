window.addEventListener("DOMContentLoaded", function() {
	let tab = document.getElementsByClassName("info-header-tab"),
		tabContent = document.getElementsByClassName("info-tabcontent"),
		info = document.getElementsByClassName("info-header")[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide")
		}
	}
	hideTabContent(1)


	function showTabContent(b) {
		if (tabContent[b].classList.contains("hide")) {
			hideTabContent(0);
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show")
		}
	}
	info.addEventListener("click", function(event) {
		let target = event.target;
		if (target.className == "info-header-tab") {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break
				}
			}
		}
	})

//timer

	let deadline = "2018-04-18";
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor( (t/1000) % 60 ),
				minutes = Math.floor( (t/1000/60) % 60 ),
				hours = Math.floor( t/(1000*60*60) );

				return {
					"total": t,
					"hours": hours,
					"minutes": minutes,
					"seconds": seconds
				};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
				hours = timer.querySelector(".hours"),
				minutes = timer.querySelector(".minutes"),
				seconds = timer.querySelector(".seconds");

				function updateClock() {
					let t = getTimeRemaining(endtime);
					hours.innerHTML = t.hours;
					minutes.innerHTML = t.minutes;
					seconds.innerHTML = t.seconds;

					if (t.total <= 0) {
						clearInterval(timeInterval);
					}
				};

				updateClock();
				let timeInterval = setInterval(updateClock, 1000);

	};

	setClock("timer", deadline);

	// Modal
	function getMoreBtn(g) {
		console.log("hi")
	}

	info.addEventListener("click", function(e) {
		let target = e.target;
		if (target.className == "description-btn") {
			for (let i = 0; i < moreBtn.length; i++) {
				if (traget == moreBtn[i]) {
					getMoreBtn(i);
					break
				}
			}
		}
	});

	/* Кнопки "Узнат подробнее"*/
	let descriptionBtn = document.getElementsByClassName("description-btn");
	let overlay = document.querySelector(".overlay");
	let close = document.querySelector(".popup-close");

	for ( let i = 0; i < descriptionBtn.length; i++) {
		descriptionBtn[i].addEventListener("click", function() {
			this.classList.add("more-splash");
			overlay.style.display = "block";
			document.body.style.overflow = "hidden";
		});

		close.addEventListener("click", function() {
			overlay.style.display = "none";
			for ( let j = 0; j < descriptionBtn.length; j++) {
				descriptionBtn[j].classList.remove('more-splash');
			}
			document.body.style.overflow = "";
		});
	}

	/*Кнопка "Узнать больше"*/
	let more = document.querySelector(".more");

	more.addEventListener("click", function() {
		this.classList.add("more-splash");
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	});

	close.addEventListener("click", function() {
		overlay.style.display = "none";
		more.classList.remove("more-splash");
		document.body.style.overflow = "";
	});

	/*Создание класса options*/
	class options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		newDiv() {
			let enyDiv = document.createElement('div');
			enyDiv.textContent("Некий текст");
			enyDiv.style.cssText = `\
			height: ${this.height}; \
			width: ${this.width}; \
			background: ${this.bg}; \
			font-size: ${this.fontSize}; \
			text-align: ${this.textAlign};`;
			document.appendChild(anyDiv);
		}
	}
	let anyDivAndStyles = new options;

	/*Form*/
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с Вами свяжемся.";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementById("form");
	let formInput = form.getElementsByTagName("input");

		form.addEventListener("submit", function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);

			/*AJAX*/
			let request = new XMLHttpRequest();
			request.open("POST", "server.php");
			let boundary = String(Math.random()).slice(2);
			request.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
			// request.setRequestHeader("Content-Type", "application/x-wwww-form-urlencoded");
			let formData = new FormData(form);
			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							statusMessage.innerHTML = message.success;
							//добовляем контент на страницу
						} else {
							statusMessage.innerHTML = message.failure;
						}
				}
			}
			for (let i = 0; i < formInput.length; i++) {
				formInput[i].value = "";
				// очищаем поля ввода
			}
		});

	let mainForm = document.getElementsByClassName("main-form")[0];
	let mainFormInput = mainForm.getElementsByTagName("input");
	let statusMessage = document.createElement("div");
			statusMessage.classList.add("status");

			mainForm.addEventListener("submit", function(event) {
				event.preventDefault();
				mainForm.appendChild(statusMessage);

				/*AJAX*/
				let request = new XMLHttpRequest();
				request.open("POST", "server.php");
				let boundary = String(Math.random()).slice(2);
				request.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
				// request.setRequestHeader("Content-Type", "application/x-wwww-form-urlencoded");
				let formData = new FormData(mainForm);
				request.send(formData);

				request.onreadystatechange = function() {
					if (request.readyState < 4) {
						statusMessage.innerHTML = message.loading;
					} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								statusMessage.innerHTML = message.success;
								//добовляем контент на страницу
							} else {
								statusMessage.innerHTML = message.failure;
							}
					}
				}
				for (let i = 0; i < mainFormInput.length; i++) {
					mainFormInput[i].value = "";
					// очищаем поля ввода
				}
			});
});