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

function renderTodos(){

    todoList.innerHTML="";

    todos.forEach(function(todo){

        // Create li

        const li=document.createElement("li");

        // Create span

        const span=document.createElement("span");

        span.textContent=todo.text;

        // Create button

        const deleteBtn=document.createElement("button");

        deleteBtn.textContent="Delete";

        deleteBtn.classList.add("delete-btn");

        // Add span inside li

        li.appendChild(span);

        // Add button inside li

        li.appendChild(deleteBtn);

        // Add li inside ul

        todoList.appendChild(li);

    });

}