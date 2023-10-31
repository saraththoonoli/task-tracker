// Initialize tasks as an array
let tasks = [];

//  elements
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Function to add a task to the array and update the details
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.unshift(taskText);
        details();
        taskInput.value = '';
    }
}

// Function to remove a task from the array and update the details
function removeTask(index) {
    tasks.splice(index, 1);
    details();
    alert('Are you sure you want to delete this TASK?')
}

// Function to edit a task in the array and update the details
function editTask(index, newText) {
    tasks[index] = newText;
    details();
}

// Function to update the details with the current tasks
function details() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
           <div>
                <button class="edit-button" onclick="editTask(${index}, prompt('Edit task:', '${task}'))">Edit</button>
                <button class="delete-button" onclick="removeTask(${index})">Delete</button>
           </div>
        `;
        taskList.appendChild(listItem);
    });
}

// Event listener for adding a task
addTaskButton.addEventListener('click', addTask);

// Initial details update
details();
