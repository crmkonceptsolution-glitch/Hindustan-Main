<?php
$success = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $education = $_POST['education'];
    $message = $_POST['message'];

    // YOUR EMAIL (change this)
    $to = "shubhamvarsh3@gmail.com";

    $subject = "New Inquiry - $name";

    $body = "
    New Inquiry Received:

    Name: $name
    Email: $email
    Education: $education
    Message:$message
    ";

    $headers = "From: noreply@axiscranes.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if(mail($to, $subject, $body, $headers)) {
        $success = "submitted successfully!";
    } else {
        $success = "Error sending While Submitting. Try again.";
    }
}
?>