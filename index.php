<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple To-Do List</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scripts.js"></script>
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <div class="task-form">
            <input type="text" id="task" placeholder="New task">
            <button id="addTask">Add Task</button>
        </div>
        <div class="task-list">
            <ul id="taskList"></ul>
        </div>
    </div>
</body>
</html>
