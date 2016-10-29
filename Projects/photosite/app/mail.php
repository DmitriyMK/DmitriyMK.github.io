<?php

$frm_name  = "callback"
$recepient = "alchimic@ua.fm";
$sitename  = "Elena Moskvi4eva Photography";
$subject   = "A message from  \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$message = "E-mail: $email \nИмя: $name \nСообщение: $message";
mail($recepient, $subject, $message, "From: $frm_name <$recepient>" . "\r\n" . "Reply-To: $recepient" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
