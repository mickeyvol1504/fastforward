<?php

$recepient = "nb@mbastrategy.ru";
$sitename = "http://devjs.esy.es/";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$company = trim($_POST["company"]);

if ( !empty($phone)) {
	$message = "Имя: $name \nТелефон: $phone \nE-mail: $email \nКомпания: $company";
	$pagetitle = "Новая заявка на тур с сайта \"$sitename\"";
}
else {
	$message = "Имя: $name \nE-mail: $email";
	$pagetitle = "Новая заявка на подписку новостей с сайта \"$sitename\"";
}

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

$file = "clientbase.txt";
$string = $pagetitle.$message."\r\n";
$Saved_File = fopen($file, 'a+');
fwrite($Saved_File, $string);
fclose($Saved_File);

?>