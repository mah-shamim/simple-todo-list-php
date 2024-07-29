# Simple To-Do List
A basic to-do list application built with PHP and jQuery. Users can add, edit, and delete tasks seamlessly. Ideal for beginners looking to learn PHP and MySQL.

### Install Process

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/simple-todo-list-php.git
   ```

2. **Navigate to the Project Directory:**
   ```sh
   cd simple-todo-list-php
   ```

3. **Set Up the Database:**
   - Create a MySQL database called `todo_list`.
   - Import the provided SQL file to set up the necessary tables.
     ```sh
     mysql -u yourusername -p todo_list < database.sql
     ```

4. **Configure the Database Connection:**
   - Open the `config.php` file and update the database credentials.
     ```php
     <?php
     // config.php
     $servername = "localhost";
     $username = "yourusername";
     $password = "yourpassword";
     $dbname = "todo_list";

     // Create connection
     $conn = new mysqli($servername, $username, $password, $dbname);

     // Check connection
     if ($conn->connect_error) {
         die("Connection failed: " . $conn->connect_error);
     }
     ?>
     ```

5. **Start a Local PHP Server:**
   - Start the PHP built-in server.
     ```sh
     php -S localhost:8000
     ```

6. **Access the Application:**
   - Open your web browser and navigate to `http://localhost:8000`.
   
### File Structure

Here’s a basic file structure for your to-do list application:

```
simple-todo-list-php/
├── database.sql
├── config.php
├── index.php
├── get_task.php
├── add_task.php
├── edit_task.php
├── delete_task.php
├── styles.css
└── script.js
```

