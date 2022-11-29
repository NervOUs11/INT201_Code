import { students } from './data/students.js'
import { lecturers } from './data/lecturers.js'

const divButtonPanel = document.getElementById("buttonPanel")
const studentButton = divButtonPanel.children[0]
const lecturerButton = divButtonPanel.children[1]

studentButton.addEventListener('click', studentButtonHandler)
lecturerButton.addEventListener('click', lecturerButtonHandler)

function studentButtonHandler(){
    dataButtonHandler(students)
}
function lecturerButtonHandler(){
    dataButtonHandler(lecturers)
}

function dataButtonHandler(items){
    const ulParentElement = document.querySelector('ul')
    ulParentElement.textContent = ''

    for (let i = 0; i < items.length; i++) {
        const liElement = document.createElement('li')
        liElement.textContent = `ID: ${items[i].id}, Name: ${items[i].name}`
        ulParentElement.appendChild(liElement)
    }
}

// // add event handler function by using anonymouse function
// studentButton.addEventListener('click', () => {alert('Hello, student')}, false)
// // lecturerButton.addEventListener('click', () => {alert('Hello, lecturer')}, false)
// function studentButtonHandler(){
//     alert('2nd function handler for student button')
// }

// studentButton.addEventListener('click', studentButtonHandler, false)

// //function expression (arrow function)
// const divButtonHandler = () => {alert('Hi, Div Button Panel')}

// // add event handler function by using function name
// divButtonPanel.addEventListener('mouseup', divButtonHandler, false)

