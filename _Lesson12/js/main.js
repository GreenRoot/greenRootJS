$(document).ready(function() {

	$(".main_btna").on("click", function() {
		$(".overlay").fadeIn("slow");
		$(".modal").slideToggle("slow");
	});

	$(".main_btn").on("click", function() {
		$(".overlay").fadeIn("slow");
		$(".modal").slideToggle("slow");
	});

	$('a[href="#sheldure"]').on("click", function() {
		$(".overlay").fadeIn("slow");
		$(".modal").slideToggle("slow");
	});

	$(".overlay").on("click", function() {
		$(".overlay").fadeOut("slow");
		$(".modal").slideToggle("slow");
	})

	$(".close").on("click", function() {
		$(".overlay").fadeOut("slow");
		$(".modal").slideToggle("slow");
	})
});

