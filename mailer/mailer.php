 <?php
     if (isset($_POST['submit'])) {
        $name = $_REQUEST['name'];
        $email = $_REQUEST['email'];
		$why = $_REQUEST['why'];
        $message = $_REQUEST['message'];

      // Set your email address where you want to receive emails. 
       $to = 'helpdesk@little.cloud';
       $subject = 'LCC:';
       $headers = "From: ".$name." <".$email."> \r\n";
       $send_email = mail($to,$subject,$message,$headers,$why);

       echo ($send_email) ? 'success' : 'error';

  }?>
