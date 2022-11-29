// const todoUserInterface = require('./UI/todoList.js')
// const todoManagement = require('./lib/todoManagement.js')
import {todoManagement} from './lib/todoManagement.js'
import {todoUserInterface} from './UI/todoList.js'

let todo = todoManagement()
let addtoUI = todoUserInterface()
addtoUI.showTodoItem(todo.addTodo("Read book"),"Read book")
addtoUI.showTodoItem(todo.addTodo("Coding"),"Coding")
addtoUI.showTodoItem(todo.addTodo("Play game"),"Play game")
addtoUI.showTodoItem(todo.addTodo("Sleep"),"Sleep")

addtoUI.showNumberOfDone(todo.getNumberOfDone())
addtoUI.showNumberOfNotDone(todo.getNumberOfNotDone())