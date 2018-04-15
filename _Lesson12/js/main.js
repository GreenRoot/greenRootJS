$(function() {
	//Нажание на кнопку "Выбрать тур"
	$(".main_btna").on("click", function() {
		$(".overlay").fadeIn("slow");
		$(".modal").slideToggle("slow");
	});
	//Нажание на кнопку "Получить консультацию"
	$(".main_btn").on("click", function() {
		$(".overlay").fadeIn("slow");
		$(".modal").slideToggle("slow");
	});
	//Нажание на кнопку "Расписание туров"
	$('a[href="#sheldure"]').on("click", function() {
		$(".overlay").fadeIn("slow");
		$(".modal").slideToggle("slow");
	});
	//Нажание на простраство вне модального окна
	$(".overlay").on("click", function() {
		$(".overlay").fadeOut("slow");
		$(".modal").slideToggle("slow");
	})
	//Нажание на кнопку закрытия модального окна
	$(".close").on("click", function() {
		$(".overlay").fadeOut("slow");
		$(".modal").slideToggle("slow");
	})
});

