// ==========================
// Select Elements
// ==========================

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const taskCount = document.getElementById("task-count");

const allBtn = document.getElementById("all-btn");
const activeBtn = document.getElementById("active-btn");
const completedBtn = document.getElementById("completed-btn");

// ==========================
// Variables
// ==========================

let todos = [];
let filter = "all";

// ==========================
// Add Task
// ==========================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const task = input.value.trim();

    if (task === "") {
        return;
    }

    const todo = {
        id: Date.now(),
        text: task,
        completed: false
    };

    todos.push(todo);

    renderTodos();

    input.value = "";

});

// ==========================
// Render Todos
// ==========================

function renderTodos() {

    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (filter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    } 
    else if (filter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(function (todo) {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = todo.text;
        span.style.cursor = "pointer";

        if (todo.completed) {
            span.style.textDecoration = "line-through";
            span.style.color = "#6b7280";
        }

        span.addEventListener("click", function () {
            toggleComplete(todo.id);
        });

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

    // ✅ correct counter
    const activeTasks = todos.filter(todo => !todo.completed).length;
    taskCount.textContent = `${activeTasks} Tasks Left`;
}