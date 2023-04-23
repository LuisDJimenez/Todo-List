import "./style.css";

const taskList = document.querySelector(".taskList");
const overlayNew = document.querySelector(".overlay-new");

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
      overlayNew.style.display = "flex";
    } else if (target.classList.contains("close-new-todo")) {
      overlayNew.style.display = "none";
    } else if (target.classList.contains("submit-todo")) {
      check();
    }
  });
}

function check() {
  const title = document.getElementById("todo-title");
  const descrip = document.getElementById("todo-description");

  if (title.value != "" && descrip.value != "") {
    addTodoToList(title.value);
    overlayNew.style.display = "none";
    title.value = "";
    descrip.value = "";
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
