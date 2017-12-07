/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
/*Add the JavaScript here for the function function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){

		if (same.checked)
		{
		var shipName=document.getElementById('shippingName').value;
		var shipZip=document.getElementById('shippingZip').value;

		document.getElementById('billingName').value = shipName;
		document.getElementById('billingZip').value = shipZip;

		}

		else
		{ 
			document.getElementById('billingName').value = "";
			document.getElementById('billingZip').value = "";
			document.getElementById('billingName').removeAttribute('required');
			document.getElementById('billingZip').removeAttribute('required');
		}
}
