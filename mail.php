<?php

$name = $_POST['name'];
$subject = "Message from my Website";
$email = $_POST['email'];
$message = $_POST['message'];


$recipient = "m.khairee99@gmail.com";


$mailheader = "From: " .$name."<" .$email.">\r\n";

mail($recipient, $subject, $message, $mailheader)
or die("Couldn't send")

?>