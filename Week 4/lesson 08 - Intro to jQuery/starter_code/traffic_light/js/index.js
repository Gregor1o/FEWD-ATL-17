//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function() {
	// alert("Hello World");

$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton#').click(illuminateGreen);

	function illuminateRed() {
		clearlights();
		$("#stopLight").css('background',  'red');
}

}};