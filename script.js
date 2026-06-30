// Select Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Store Todos
let todos = [];

// Add Task
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = input.value.trim();

    if (task === "") return;

    const todo = {
        id: Date.now(),
        text: task,
        completed: false
    };

    todos.push(todo);

    renderTodos();

    input.value = "";
});

// Render Todos
function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(function (todo) {

        const li = document.createElement("li");

        // Task Text
        const span = document.createElement("span");
        span.textContent = todo.text;
        span.style.cursor = "pointer";

        // ✅ Line Through
        if (todo.completed) {
            span.style.textDecoration = "line-through";
            span.style.color = "#6b7280";
        }

        // Complete Task
        span.addEventListener("click", function () {
            toggleComplete(todo.id);
        });

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function () {
            deleteTodo(todo.id);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);

    });

}

// Toggle Complete
function toggleComplete(id) {

    todos = todos.map(function (todo) {

        if (todo.id === id) {

            return {
                ...todo,
                completed: !todo.completed
            };

        }

        return todo;

    });

    renderTodos();

}

// Delete Todo
function deleteTodo(id) {

    todos = todos.filter(function (todo) {

        return todo.id !== id;

    });

    renderTodos();

}