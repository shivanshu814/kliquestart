<?php

#Receive user input
$name = $_POST['name'];
$phone = $_POST['phone'];
$college = $_POST['college'];
$email_address = $_POST['email_address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip_code = $_POST['zip_code'];
$idea = $_POST['idea'];

#Filter user input
function filter_email_header($form_field) {  
return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
}

$email_address  = filter_email_header($email_address);

#Send email
$headers = "From: $email_address\n";
$sent = mail('adityamali2003@icloud.com', 'Name: $name', $name, 'Phone: ' , $phone , 'Email: ', $email_address,'College/Institution: ', $college , 'Address', $city ,",", $state ,",", 'Zip Code: ', $zip_code ,'Feedback Form Submission', $idea, $headers);

#Thank user or notify them of a problem
if ($sent) {

?><html>
<head>
<title>Thank You</title>
</head>
<body>
<h1>Thank You</h1>
<p>Thank you for your feedback.</p>
</body>
</html>
<?php 
} else { ?><html>
<head>
<title>Something went wrong</title>
</head>
<body>
<h1>Something went wrong</h1>
<p>We could not send your feedback. Please try again.</p>
</body>
</html>
<?php
}
?>