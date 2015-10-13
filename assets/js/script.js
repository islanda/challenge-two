/* 

When the user enters a number in the #card input field
Call jQuery Credit Card Validator plugin
.validateCreditCard([ callback ] [,options])

	if result.card_type.amex
		make the opacity of the american express div background 100%

	else if result.card_type.visa
		make the opacity of the visa div background 100%

	else if result.card_type.discover
		make the opacity of the discover background div 100%

	else if result.card_type.mastercard
		make the opacity of the mastercard background div 100%
*/

$('#card').validateCreditCard(function(result) {
	// alert('CC type: ' + result.card_type.name);
	$('label[for='+ result.card_type.name +'] div').addClass('cc-opacity');
});

