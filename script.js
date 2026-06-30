// Select Elements

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Store Todos

let todos = [];

// Form Submit Event

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const task = input.value.trim();

    if (task === "") {
        return;
    }

    // Create Todo Object

    const todo = {

        id: Date.now(),
        text: task

    };

    // Store in Array

    todos.push(todo);

    // Show on Screen

    renderTodos();

    // Clear Input

    input.value = "";

});

// Display Todos

function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(function(todo){

        const li = document.createElement("li");

        li.textContent = todo.text;

        todoList.appendChild(li);

    });

}