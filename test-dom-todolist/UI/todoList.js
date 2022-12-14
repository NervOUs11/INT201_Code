function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const listTodo = document.getElementById('listTodo')

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'todoItem')
    newDiv.setAttribute('id', newId) 

    const newP = document.createElement('P')
    newP.innerText = newDescription

    const notdoneButton = document.createElement('button')
    const removeButton = document.createElement('button')
    notdoneButton.innerText = "Not Done"
    removeButton.innerText = "remove"

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
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}
// module.exports = todoUserInterface
export {todoUserInterface}
