<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "vansonhovent@gmail.com";
    $subject = "New Message from $name";
    $body = "You have received a new message from $name ($email):\n\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "There was an error sending your message.";
    }
}
?>
