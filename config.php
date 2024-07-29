<?php

// Database configuration
$host = 'localhost';
$dbname = 'todolist';
$user = 'root'; // Change if necessary
$pass = ''; // Change if necessary

// Create a new PDO instance
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
?>
