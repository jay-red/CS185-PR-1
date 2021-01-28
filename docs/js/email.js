function init_email() {
	var EMAIL_FORM = document.getElementById( "email-form" ),
		EMAIL_INPUT = document.getElementById( "email" ),
		MESSAGE_BOX = document.getElementById( "message-box" );

	function validate_email() {
		if( EMAIL_INPUT.value != undefined && EMAIL_INPUT.value != null && EMAIL_INPUT.value.trim != "" ) {
			var email = EMAIL_INPUT.value;
			if( email.length > 4 ) {
				var domain = email.substring( email.length - 4 ).toLowerCase();
				if( domain == ".com" || domain == ".edu" ) {
					return email.indexOf( '@' ) != -1;
				}
			}
		}
		return false;
	}

	function handle_submit( evt ) {
		evt.preventDefault( true );
		if( validate_email() ) {
			MESSAGE_BOX.innerHTML = "Email successfully recorded";
			MESSAGE_BOX.style.backgroundColor = "#00FF00";
			return;
		}
		MESSAGE_BOX.innerHTML = "Invalid email address.";
		MESSAGE_BOX.style.backgroundColor = "#FF0000";
		MESSAGE_BOX.setAttribute( "class", "show" );
	}

	EMAIL_FORM.addEventListener( "submit", handle_submit );
}

window.addEventListener( "load", init_email );