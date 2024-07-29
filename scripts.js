$(document).ready(function() {
        function loadTasks() {
            $.ajax({
                url: 'tasks.php',
                method: 'GET',
                success: function(data) {
                    $('#taskList').html(data);
                }
            });
        }

        loadTasks();

        $('#taskForm').on('submit', function(e) {
            e.preventDefault();
            var task = $('#taskInput').val();
            $.ajax({
                url: 'tasks.php',
                method: 'POST',
                data: { action: 'add', task: task },
                success: function(response) {
                    $('#taskInput').val('');
                    loadTasks();
                }
            });
        });

        $(document).on('click', '.edit-btn', function() {
            var id = $(this).data('id');
            var newTask = prompt('Edit your task:');
            if (newTask) {
                $.ajax({
                    url: 'tasks.php',
                    method: 'POST',
                    data: { action: 'edit', id: id, task: newTask },
                    success: function(response) {
                        loadTasks();
                    }
                });
            }
        });

        $(document).on('click', '.delete-btn', function() {
            var id = $(this).data('id');
            $.ajax({
                url: 'tasks.php',
                method: 'POST',
                data: { action: 'delete', id: id },
                success: function(response) {
                    loadTasks();
                }
            });
        });
    });
