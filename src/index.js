import "./style.css";

const taskList = document.querySelector(".taskList");
const overlayNew = document.querySelector(".overlay-new");
const taskForm = document.querySelector(".taskForm");
const newTaskBTN = document.querySelector(".newTDbtn");

const todosList = [];

class ToDo {
  constructor(name) {
    this.Name = name;
  }
}

function listenClicks() {
  document.addEventListener("click", (event) => {
    const { target } = event;

    if (target.classList.contains("newTDbtn")) {
      taskForm.style.display = "flex";
      newTaskBTN.style.display = "none";
    } else if (target.classList.contains("close-new-todo")) {
      overlayNew.style.display = "none";
    } else if (target.classList.contains("todoSubmit")) {
      check();
    } else if (target.classList.contains("newProjBTN")) {
      overlayNew.style.display = "flex";
    }
  });
}

function check() {
  const title = document.getElementById("todoTitle");

  if (title.value != "") {
    addTodoToList(title.value);
    taskForm.style.display = "none";
    title.value = "";
    newTaskBTN.style.display = "flex";
  }
}

function addTodoToList(name) {
  const newToDo = new ToDo(name);
  todosList.push(newToDo);
  renderToDo(name);
}

function renderToDo() {
  taskList.textContent = "";
  for (let i = 0; i < todosList.length; i++) {
    const newTodo = document.createElement("div");
    newTodo.innerHTML = todosList[i].Name;
    newTodo.classList.add("TODO");
    taskList.appendChild(newTodo);
  }

  console.log(todosList);
}

listenClicks();
