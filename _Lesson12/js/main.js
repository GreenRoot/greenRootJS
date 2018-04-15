$(function() {

	function openModal() {
		$(".overlay").fadeIn("slow");
		$(".modal").slideToggle("slow");
	};

	function closeModal() {
		$(".overlay").fadeOut("slow");
		$(".modal").slideToggle("slow");
	};

	//Нажание на кнопку "Выбрать тур"
	$(".main_btna").on("click", function() {
		openModal();
	});
	//Нажание на кнопку "Получить консультацию"
	$(".main_btn").on("click", function() {
		openModal();
	});
	//Нажание на кнопку "Расписание туров"
	$('a[href="#sheldure"]').on("click", function() {
		openModal();
	});
	//Нажание на простраство вне модального окна
	$(".overlay").on("click", function() {
		closeModal();
	})
	//Нажание на кнопку закрытия модального окна
	$(".close").on("click", function() {
		closeModal();
	})
});