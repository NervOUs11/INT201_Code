// const { addTodoHandler } = require('./eventHandler/eventController.js')
// const todoUserInterface = require('./UI/todoList.js')
// const todoManagement = require('./lib/todoManagement.js')
import { addTodoHandler } from './eventHandler/eventController.js'

const addButton = document.getElementById('addBtn')
addButton.addEventListener('click', () => addTodoHandler())

const inputTodo = document.querySelector('input')
inputTodo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addTodoHandler()
})

// let todo = todoManagement()
// let addtoUI = todoUserInterface()
// addtoUI.showTodoItem(todo.addTodo('Watch Movies'),'Watch Movies')
// addtoUI.showTodoItem(todo.addTodo('Listen Musics'),'Listen Musics')
// addtoUI.showTodoItem(todo.addTodo('Jogging'),'Jogging')

// addtoUI.showNumberOfDone(todo.getNumberOfDone())
// addtoUI.showNumberOfNotDone(todo.getNumberOfNotDone())