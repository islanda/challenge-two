$('#card').validateCreditCard(function(result) {
	// alert('CC type: ' + result.card_type.name);
	$('label[for='+ result.card_type.name +'] input').prop("checked", true);
});

// When AMEX is checked or true the - 
// $('#card').validateCreditCard(function(result) {
// 	$('.security div' +  result.card_type.name).css('background-position','no-repeat 0 -81px');
// });

Modernizr.load({
	test : Modernizr.input.required,
	nope : ['assets/js/parsley.min.js']
		$('#form').parsley();
});