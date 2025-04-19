<?php
session_start();

// Connect to the database
$conn = new mysqli("localhost", "root", "", "campx");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get input data from form
$email = $_POST['email'];
$password = $_POST['password'];

// Check if email exists
$stmt = $conn->prepare("SELECT id, password FROM user WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 1) {
    $stmt->bind_result($id, $hashedPassword);
    $stmt->fetch();

    // You can use password_hash() and password_verify() in real use
    if (password_verify($password, $hashedPassword)) {

        $_SESSION['user_id'] = $id;
        header("Location: index.html"); // redirect to a logged-in area
        exit();
    } else {
        echo "❌ Incorrect password.";
    }
} else {
    echo "❌ Email not found.";
}

$stmt->close();
$conn->close();
?>
