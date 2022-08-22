 $(document).ready(function() {
		   $(".contact-form .btn-danger").on('click', function () {
           $(".output_message").removeClass('loading error sent');
           });
           $('.contact-form').on('submit',function(){
           $('.output_message .output_message_text').text('Loading...'); 
		   $(".output_message").addClass('loading');

           var form = $(this);
                $.ajax({
                url: "mailer/mailer.php",
                method: form.attr('method'),
                data: form.serialize(),
                success: function(result){
            if (result == 'success'){
			    $(".output_message").removeClass('loading');
				$(".output_message").removeClass('error');
				$(".output_message").addClass('sent');
				$(".contact-form .btn").addClass('btn-success');
				$(".contact-form .btn").removeClass('btn-success');
				$(".contact-form .btn").text('Done');
                $('.output_message .output_message_text').text('Hohaa!! Your Message is Sent to our team!');  
            } else {
			    $(".output_message").removeClass('loading');
				$(".output_message").removeClass('sent');
				$(".output_message").addClass('error');
                $('.output_message .output_message_text').text('There is an Error with Sending email :(');
            }
        }
    });
    return false;   
  });
  });