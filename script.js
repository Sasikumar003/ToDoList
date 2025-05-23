function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const actions = document.createElement("div");
    actions.className = "actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.title = "Mark as Complete";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = () => {
        li.classList.toggle("completed");
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.title = "Edit Task";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => {
        const newText = prompt("Edit your task:", taskSpan.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskSpan.textContent = newText.trim();
        }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.title = "Delete Task";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}