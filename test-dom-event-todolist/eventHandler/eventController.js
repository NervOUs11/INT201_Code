import { todoManagement } from '../lib/todoManagement.js'
import { todoUserInterface } from '../UI/todoList.js'
const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoUserInterface()

const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone
} = todoManagement()

// const todoManagement = require('../lib/todoManagement.js')
// const todoList = require('../UI/todoList.js')

// const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
//   todoList()
// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemToDone,
//   loadTodos
// } = todoManagement()

const addTodoHandler = () => {
  const todoItem = document.querySelector('input').value
  if (todoItem.trim().length != 0){
    const todoId = addTodo(todoItem)
    showTodoItem(todoId, todoItem)
    addButtonHandler(todoId)
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
  }
}

const addButtonHandler = (todoId) => {
  document
  .getElementById(todoId)
  .children[1].addEventListener('click', notDoneButtonHandler)
  document
  .getElementById(todoId)
  .children[2].addEventListener('click', removeButtonHandler)
  document.querySelector('input').value = ''
}

const notDoneButtonHandler = (event) => {
  const doneButtonFire = event.target
  setdoneStyle(doneButtonFire)
  setItemToDone(doneButtonFire.parentElement.getAttribute('id'))
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

const setdoneStyle = (doneButtonFire) => {
  doneButtonFire.textContent = 'Done'
  doneButtonFire.style = 'background-color: green;color: white'
}

const removeButtonHandler = () => {
  const removeButtonFire = event.target
  const removeId = removeButtonFire.parentElement.getAttribute('id')
  removeTodoItem(removeId)
  removeTodo(Number(removeId))
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

export {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
}

// module.exports = {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler
// }