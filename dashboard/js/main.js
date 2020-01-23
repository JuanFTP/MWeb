$(document).ready(function() {
	$(".dropdown").on('click', function() {
		$("#"+$(this).attr("key_data")).toggleClass("show");
 	});
});