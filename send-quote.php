<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "bookings@airportluggagevan.com";
    $subject = "New Free Quote Request - Airport Luggage Vans";

    $pickup    = isset($_POST["pickup_location"]) ? htmlspecialchars($_POST["pickup_location"]) : "N/A";
    $dropoff   = isset($_POST["dropoff_location"]) ? htmlspecialchars($_POST["dropoff_location"]) : "N/A";
    $date      = isset($_POST["pickup_date"]) ? htmlspecialchars($_POST["pickup_date"]) : "N/A";
    $time      = isset($_POST["pickup_time"]) ? htmlspecialchars($_POST["pickup_time"]) : "N/A";
    $custEmail = isset($_POST["customer_email"]) ? htmlspecialchars($_POST["customer_email"]) : "N/A";
    $custPhone = isset($_POST["customer_phone"]) ? htmlspecialchars($_POST["customer_phone"]) : "N/A";

    $message = "You have received a new Instant Quote Request:\n\n";
    $message .= "----------------------------------------\n";
    $message .= "Customer Email : " . $custEmail . "\n";
    $message .= "Customer Phone : " . $custPhone . "\n";
    $message .= "Pickup Location: " . $pickup . "\n";
    $message .= "Drop-off Location: " . $dropoff . "\n";
    $message .= "Pickup Date    : " . $date . "\n";
    $message .= "Pickup Time    : " . $time . "\n";
    $message .= "----------------------------------------\n";

    $headers = "From: bookings@airportluggagevan.com\r\n";
    $headers .= "Reply-To: " . $custEmail . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>
                alert(\"Thank you! Your quote request has been sent. We will get back to you shortly.\");
                window.location.href = \"index.html\";
              </script>";
    } else {
        echo "<script>
                alert(\"Failed to send request. Please try again later.\");
                window.location.href = \"index.html\";
              </script>";
    }
} else {
    header("Location: index.html");
    exit();
}
?>
