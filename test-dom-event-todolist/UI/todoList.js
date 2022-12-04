function todoUserInterface() {

  function showTodoItem(newId, newDescription) {
    const listTodo = document.getElementById('listTodo')

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'todoItem')
    newDiv.setAttribute('id', newId) 

    const newP = document.createElement('P')
    newP.textContent = newDescription

    const notdoneButton = document.createElement('button')
    const removeButton = document.createElement('button')
    notdoneButton.textContent = "Not Done"
    removeButton.textContent = "remove"

    newDiv.appendChild(newP)
    newDiv.appendChild(notdoneButton)
    newDiv.appendChild(removeButton)
    listTodo.appendChild(newDiv)
  }
  function showNumberOfDone(numberOfDone) {
    const div = document.getElementById('summaryTodo')
    const done = document.getElementById('done')
    // done.innerText = `Number of Done:${numberOfDone}`
    done.textContent = `Number of Done:${numberOfDone}`
    div.appendChild(done)
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const div = document.getElementById('summaryTodo')
    const notdone = document.getElementById('notDone')
    // notdone.innerText = `Number of Not Done:${numberOfNotDone}`
    notdone.textContent = `Number of Not Done:${numberOfNotDone}`
    div.appendChild(notdone)
  }
  function removeTodoItem(removeId) {
    const removeTodoNode = document.getElementById(removeId)
    removeTodoNode.parentElement.removeChild(removeTodoNode)
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
}
export { todoUserInterface }
// module.exports = todoUserInterface
