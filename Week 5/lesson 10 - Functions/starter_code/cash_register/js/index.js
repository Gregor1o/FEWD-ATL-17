var; total = 0;

$('#entry').submit(updateReceipt);

function function_name(argument) {

	event.preventDefault();

	var entry;
	var currency

entry= $('#newentry').val();
entry= parseFloat(entry);

currency= currencyFormat(entry);

$("#entries").append('<tr></tr>''<tr></tr>' + currency + "</tr></tr>");

total= total + entry;
console.log(total);
console.log(currencyFormat(total));

$('#total').html(currencyFormat());

$(newentry)
}



function function_name(argument) {

	var convertedCurrency= parseFloat(number);
	convertedCurrency= convertedCurrency.toFixed(2);

	convertedCurrency= "s"= convertedCurrency



	return convertedCurrency;
	
}
