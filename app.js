let taskList = [];
let selectedID;

function loadApp() {
  const btn = document.getElementById("submitBtn");
  btn.addEventListener("click", submit);
}

function deleteTask() {
  taskList = taskList.filter((task) => task.id !== selectedID);
  makeTDoneList();
  maketodoList();
}

function completeTask() {
  taskList = taskList.map((task) => {
    if (task.id === selectedID) {
      task.done = true;
    }

    return task;
  });

  makeTDoneList();
  maketodoList();
}

function submit() {
  if (!validateForm()) {
    return;
  }

  const formData = getFormData();
  taskList.push(formData);
  maketodoList(taskList);
}

function getFormData() {
  const descriptionElement = document.getElementById("task");
  const dueDateElement = document.getElementById("dueDate");

  return {
    description: descriptionElement.value,
    dueDate: dueDateElement.value,
    done: false,
    id: Math.random(),
  };
}

function validateForm() {
  const descriptionElement = document.getElementById("task");
  const dueDateElement = document.getElementById("dueDate");

  const validDescription = descriptionElement.value.trim();
  const validDueDate = dueDateElement.value;

  if (!validDescription) {
    writeErrorMessage("taskErrorMessage", "Task");
  }

  if (!validDueDate) {
    writeErrorMessage("dueDateErrorMessage", "Due Date");
  }

  return validDescription || validDueDate;
}

function writeErrorMessage(elementId, valueName) {
  const el = document.getElementById(elementId);

  el.innerHTML = `Field ${valueName} is required`;
}

function maketodoList() {
  const todoList = taskList.filter((task) => task.done === false);
  const todoListContainer = document.getElementById("toDoListContainer");
  todoListContainer.innerHTML = "";

  for (let index = 0; index < todoList.length; index++) {
    todoListContainer.innerHTML += makeTaskCard(todoList[index]);
  }
}

function makeTDoneList() {
  const doneList = taskList.filter((task) => task.done === true);
  const doneListContainer = document.getElementById("doneListContainer");
  doneListContainer.innerHTML = "";

  for (let index = 0; index < doneList.length; index++) {
    doneListContainer.innerHTML += makeTaskCard(doneList[index]);
  }
}

function makeTaskCard(data) {
  return `
       <div class="ticket" onclick="selectID(${data.id}); toggleModal()">
         <div class="ticketDescription">${data.description}</div>
         <div class="ticketDueDate">${data.dueDate}</div>
       </div>
    `;
}

function selectID(id) {
  selectedID = id;
}

function toggleModal() {
  console.log({ selectedID });
  const modalDlt = document.getElementById("modal-dlt");
  document.getElementById("update-modal");
  if (modalDlt.style.display === "" || modalDlt.style.display === "none") {
    modalDlt.style.display = "flex";
  } else {
    modalDlt.style.display = "none";
  }
}

loadApp();
