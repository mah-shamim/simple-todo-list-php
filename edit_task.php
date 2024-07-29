<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $task = $_POST['task'];

    if (!empty($id)) {
        $stmt = $conn->prepare("UPDATE tasks SET task= ? WHERE id = ?");
        $stmt->bind_param("s", $task);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->close();
    }
}
?>
