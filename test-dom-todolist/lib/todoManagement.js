// const Todo = require('./todo.js')
import { Todo } from './todo.js'

function todoManagement() {
  let todos = []
  function addTodo(desc) {
    let newTodo = new Todo(desc)
    todos.push(newTodo)
    return newTodo.id
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    let count = 0
    for (let i = 0; i < todos.length; i++) {
      if(todos[i].done === true){
        count++
      }
    }
    return count
  }
  function getNumberOfNotDone() {
    let count = 0
    for (let i = 0; i < todos.length; i++) {
      if(todos[i].done === false){
        count++
      }
    }
    return count
  }

  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone
  }
}
// module.exports = todoManagement
export {todoManagement}