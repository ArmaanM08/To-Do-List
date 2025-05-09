function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const list = document.getElementById('taskList');

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => list.removeChild(listItem);

    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    taskInput.value = "";
    taskInput.focus();
  }