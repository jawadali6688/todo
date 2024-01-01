const addBtn = document.getElementsByClassName("addBtn")[0];
const itemName = document.getElementById("itemName");
const itemDescription = document.getElementById("itemDescription");
const tableRowOfTodo = document.getElementById("contentOfTodos");
const table = document.getElementsByTagName("table")[0];
let todoList = [];
let localStorageTodoItem = localStorage.getItem("Todos");

if (localStorageTodoItem != null) {
  todoList = JSON.parse(localStorageTodoItem);
}

addBtn.addEventListener("click", () => {
  const itemNameValue = itemName.value;
  const itemDescriptionValue = itemDescription.value;
  if (itemName == "" || itemDescriptionValue == "") {
    alert("Please Enter the Values");
  } else {
    todoList.push({ name: itemNameValue, desc: itemDescriptionValue });
    saveInfo(todoList);
    itemName.value = "";
    itemDescription.value = "";
  }
});

function saveInfo(todoList) {
  let todoListString = JSON.stringify(todoList);
  localStorage.setItem("Todos", todoListString);
  showDisplay();
}

function showDisplay() {
  let contentOfTodos = "";
  todoList.map((todo, i) => {
    contentOfTodos += `<tr> <td > ${i + 1} </td> <td> ${todo.name} </td> <td> ${
      todo.desc
    } </td> 
        <td class = "actionn"> <button class = "editBtn" onclick="editInfo(${i})" > Edit </button> 
        <button class = "deleteBtn" onclick="deleteInfo(${i})" > Delete </button> </td>
        </tr>`;
  });
  tableRowOfTodo.innerHTML = contentOfTodos;
}
function deleteInfo(i) {
  todoList.splice(i, 1);
  showDisplay();
}
function editInfo(i) {
  let editTodo = todoList[i];
  itemName.value = editTodo.name;
  itemDescription.value = editTodo.desc;
  todoList.splice(i, 1);
  showDisplay();
}
showDisplay();
