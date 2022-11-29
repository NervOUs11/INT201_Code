
// // 1. Create <li> node
// const liElementNode = document.createElement("li") //<li></li>
// liElementNode.setAttribute('class', 'dev') //<li class="dev"></li>
// liElementNode.textContent = 'INT101- Java Programming I' //<li class="dev">INT101- Java Programming I</li>

// // 2. selecting <ul> node
// const bodyChildrenNode = document.body.children //array-like object
// const divChildNode = bodyChildrenNode[1]
// const ulNode = divChildNode.firstElementChild // divChildNode[0]
// console.log(ulNode)

// // 3. append <li> to <ul> parent node
// ulNode.appendChild(liElementNode)

// // -------------------------------

// const liNode = document.createElement("li") 
// liNode.setAttribute('class', 'dev')
// liNode.textContent = 'INT202-Server Side I'
// ulNode.appendChild(liNode)

// // -------------------------------

// query by attribute ID
// const divByID = document.getElementById('summary')
// console.log(divByID)

// // query by tagname (HTMLCollection)
// const ulByTagName = document.getElementsByTagName('ul')
// console.log(ulByTagName)
// console.log(ulByTagName.length)
// console.log(ulByTagName[0])

// // query by classname (HTMLCollection)
// const nodeByClassName = document.getElementsByClassName('database')
// console.log(nodeByClassName)
// Array.from(nodeByClassName).forEach(element => {
//     console.log(element)
// })

// // query by name attribute
// const nodeByName = document.getElementsByName('abc')
// console.log(nodeByName)

// // query by querySelector (return first descendant)
// const queryByClass = document.querySelector(".devops")
// console.log(queryByClass)

// //query by querySelectorAll (return all result nodes)
// const queryallByClass = document.querySelectorAll(".database")
// console.log(queryallByClass)

// const queryAllByTagClass = document.querySelectorAll('li[class=devops]')
// console.log(queryAllByTagClass)
// const queryAllByTagClass2 = document.querySelectorAll('li.devops')
// console.log(queryAllByTagClass2)

// -------------------------------------

// insertBefore

// // 1. create <p> node
// const pNewNode = document.createElement('p')
// pNewNode.setAttribute('class', 'devops')
// pNewNode.textContent = '3'

// // 2. select parent node
// const divParentNode = document.getElementById('summary')

// // 3. select reference node <p class="dev">2</p>
// const divChildrenNode = divParentNode.children
// const referNode = divChildrenNode[1]
// console.log(referNode)

// // 4. insert before 3.
// divParentNode.insertBefore(pNewNode, referNode)

// ----------------------------------------

// replace

// // 1. create a new <li> node
// const liNewNode = document.createElement('li')
// liNewNode.textContent='Ajarn Saichon Jaiyen'

// // 2. selecting a parent node <ul class="lectures">
// const ulParent = document.querySelector(".lecturers")

// // 3. selecting an old node <li>Ajarn Saichon Jaiyen</li> 
// const liOldNode = ulParent.children[1]

// // 4. replace node
// ulParent.replaceChild(liNewNode, liOldNode)

// ----------------------------------------

//remove 

// //1. selecting a delete node
// const deletedNode = ulParent.lastElementChild
// ulParent.removeChild(deletedNode)

// ----------------------------------------

// const yourName = prompt('Who are you?')
// if(yourName === null) {
//     alert('Hello, guest') 
// }
// else{
//     const isConfirmName = confirm(`Are you ${yourName}?`)
//     isConfirmName ? alert(`hello, ${yourName}`) : alert('you are guest!')
// }
