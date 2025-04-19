<?php
// Database connection
$host = "localhost";
$dbname = "campx";
$username = "root"; // default for XAMPP
$password = "";     // default for XAMPP

$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$user = $_POST['username'];
$email = $_POST['email'];
$location = $_POST['location'];
$pass = $_POST['password'];
$confirm = $_POST['confirm_password'];

// Validate passwords match
if ($pass !== $confirm) {
  die("Passwords do not match!");
}

// Hash password
$hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

// Insert into DB
$sql = "INSERT INTO user (username, email, location, password) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $user, $email, $location, $hashed_pass);

// Check if email already exists
$check = $conn->prepare("SELECT id FROM user WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo "⚠️ This email is already registered. Please try logging in or use a different email.";
    exit;
}

if ($stmt->execute()) {
  echo "Signup successful! <a href='login.html'>Click here to login</a>";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>

