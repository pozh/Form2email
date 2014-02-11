var bg_x = 0;
jQuery(document).ready( function($){

	$("input, textarea", ".msg-form").keydown( function(){
		$(this).removeClass('error');
	});

	// validate and process form here
	$(".btn-send", ".msg-form").click(function() {
		var f_name = $("#f_name").val();
		var f_url = $("#f_url").val();
		var f_email = $("#f_email").val();
		var f_msg = $("#f_msg").val();
		var f_subscribe = $("#f_subscribe").is(':checked') ? 'yes' : 'no';
		
		if (f_name == "") {
			$("#f_name").focus().addClass( 'error' );
			return false;
		}
		if (f_email == "") {
			$("#f_email").focus().addClass( 'error' );
			return false;
		}
		if (f_msg == "") {
			$("#f_msg").focus().addClass( 'error' );
			return false;
		}
		var theData = { name: f_name, addr: f_url, email: f_email, subscribe: f_subscribe, msg: f_msg };  
		$.ajax({ type: "POST",  url:  "sendthedata.php", data: theData, success: function( result ) { 
			if( result == 'success' )
				$(".msg-form").fadeOut( 200, function(){ $("#msg").fadeIn(500); } ); 
			else {  
				$(".str-received", "#error_msg").html( result );
				$(".msg-form").fadeOut( 200, function(){ $("#error_msg").fadeIn(500); } ); 
			}
		}});
	});
});