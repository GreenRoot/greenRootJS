function modal () {

	/* Кнопки "Узнать подробнее"*/
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
}

module.exports = modal;