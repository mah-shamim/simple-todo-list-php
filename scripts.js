$(document).ready(function() {
       loadTasks();

    $('#addTask').on('click', function() {
        let task = $('#task').val();
        if (task) {
            $.ajax({
                url: 'add_task.php',
                method: 'POST',
                data: { task: task },
                success: function(response) {
                    $('#task').val('');
                    loadTasks();
                }
            });
        }
    });
        $(document).on('click', '.editTask', function() {
                let id = $(this).data('id');
                $.ajax({
                    url: 'edit_task.php',
                    method: 'POST',
                    data: { id: id },
                    success: function(response) {
                        loadTasks();
                    }
                });
        });

    $(document).on('click', '.deleteTask', function() {
        let id = $(this).data('id');
        $.ajax({
            url: 'delete_task.php',
            method: 'POST',
            data: { id: id },
            success: function(response) {
                loadTasks();
            }
        });
    });

    function loadTasks() {
        $.ajax({
            url: 'get_tasks.php',
            method: 'GET',
            success: function(response) {
                $('#taskList').html(response);
            }
        });
    }

        

        

    });
