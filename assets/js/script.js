$('#card').validateCreditCard(function(result) {
	// alert('CC type: ' + result.card_type.name);
	$('label[for='+ result.card_type.name +'] input').prop("checked", true);

// When AMEX is checked or true - 
	if (result.card_type.name === 'amex') {
		$('.cvv').css('background-position','0 -82px');
	}
	else {
		$('.cvv').css('background-position','0 -124px');
	}
});

Modernizr.load({
	test : Modernizr.input.required,
	nope : {
		'parsley': 'assets/js/parsley.min.js'	
	},
	callback: {	
		'parsley': function (url, result, key) {
			$('#form').parsley();
		}
  	}
});