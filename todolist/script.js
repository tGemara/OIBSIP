const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');

    // Add Task
    addTaskBtn.addEventListener('click', () => {
      const taskDescription = taskInput.value.trim();
      if (taskDescription === '') {
        alert('Please enter a task description.');
        return;
      }

      const task = {
        id: Date.now(),
        description: taskDescription,
        isCompleted: false,
        addedAt: new Date().toLocaleString(),
        completedAt: null
      };

      addTaskToList(task, pendingTasksList);
      taskInput.value = '';
    });

    // Add Task to List
    function addTaskToList(task, list) {
      const li = document.createElement('li');
      li.dataset.id = task.id;

      const taskDetails = document.createElement('div');
      taskDetails.className = 'task-details';
      taskDetails.innerHTML = `
        <strong>${task.description}</strong><br>
        <small>Added: ${task.addedAt}</small>
      `;

      const actions = document.createElement('div');
      actions.className = 'actions';

      // Complete Icon
      if (!task.isCompleted) {
        const completeIcon = document.createElement('img');
        completeIcon.src = './images/completed-task.png'; // Path to the complete icon
        completeIcon.alt = 'Complete Task';
        completeIcon.addEventListener('click', () => markTaskAsComplete(task, li));
        actions.appendChild(completeIcon);
      }

      // Edit Icon
      const editIcon = document.createElement('img');
      editIcon.src = './images/revision.png'; // Path to the edit icon
      editIcon.alt = 'Edit Task';
      editIcon.addEventListener('click', () => editTask(task, li));
      actions.appendChild(editIcon);

      // Delete Icon
      const deleteIcon = document.createElement('img');
      deleteIcon.src = './images/remove.png'; // Path to the delete icon
      deleteIcon.alt = 'Delete Task';
      deleteIcon.addEventListener('click', () => deleteTask(li, list));
      actions.appendChild(deleteIcon);

      li.appendChild(taskDetails);
      li.appendChild(actions);

      list.appendChild(li);
    }

    // Mark Task as Complete
    function markTaskAsComplete(task, li) {
      task.isCompleted = true;
      task.completedAt = new Date().toLocaleString();
      li.remove();

      // Add to Completed List
      const completedTaskDetails = li.querySelector('.task-details');
      completedTaskDetails.innerHTML += `<br><small>Completed: ${task.completedAt}</small>`;
      li.className = 'complete';
      li.querySelector('.actions img:first-child').remove(); // Remove Complete Icon
      completedTasksList.appendChild(li);
    }

    // Edit Task
    function editTask(task, li) {
      const newDescription = prompt('Edit your task:', task.description);
      if (newDescription && newDescription.trim() !== '') {
        task.description = newDescription.trim();
        li.querySelector('.task-details strong').textContent = task.description;
      }
    }

    // Delete Task
    function deleteTask(li, list) {
      list.removeChild(li);
    }