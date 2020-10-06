$(document).ready(function () {
	//Radiobuttons
	$.each($('.license__radiobutton'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.license__radiobutton', function (event) {
		$(this).parents('.license__form')
		.find('.license__radiobutton').removeClass('active');
		$(this).parents('.license__form')
		.find('.license__radiobutton input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	});
	let numberOne, numberTwo, sum;
	numberOne = 34;
	numberTwo = 10;
	$('#select-amount').on('change', function(e){
		numberTwo = $(this).val();
		sum = numberOne * numberTwo;
		$('#result').text(sum);
	});
	
	$('#radio1').on('click', function(e){
		numberOne = 13;
		sum = numberOne * numberTwo;
		$('#result').text(sum);
		$('#plan-name').text('#1');
	});
	$('#radio2').on('click', function(e){
		numberOne = 22;
		sum = numberOne * numberTwo;
		$('#result').text(sum);
		$('#plan-name').text('#2');
	});
	$('#radio3').on('click', function(e){
		numberOne = 34;
		sum = numberOne * numberTwo;
		$('#result').text(sum);
		$('#plan-name').text('#3');
	});
});