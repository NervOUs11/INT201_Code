// root node
const rootNode = window.document
console.log(rootNode)

//root element
const rootelement = document.documentElement
console.log(rootelement)

//all node types of html's children nodes
const htmlChildNodes = rootelement.childNodes
console.log(htmlChildNodes)
console.log(htmlChildNodes.length)
console.log(htmlChildNodes[0])
console.log(htmlChildNodes[htmlChildNodes.length - 1])

//only element types of html's children nodes
const htmlElementNodes = rootelement.children
console.log(htmlElementNodes)
console.log(htmlElementNodes.length)
console.log(htmlElementNodes[0])
console.log(htmlElementNodes[htmlElementNodes.length - 1])


// ------------- Create new ----------------------

//1. Create a new paragraph element
const newPElementNode = document.createElement("p")

//2. create a new attribute
const newAttrNode = document.createAttribute("class")
newAttrNode.value = "courses"

// newPElementNode.setAttribute("class","courses") //รวมข้อ2และ4

// 3. create a test value
const newTextnode = document.createTextNode("INT201")

// newPElementNode.textContent = "<span style = 'color:red'> INT201 </span>" //รวมข้อ3และ5
// newPElementNode.innerHTML = "<span style = 'color:red'> INT201 </span>" //รวมข้อ3และ5

//4. add attribute node to its owner tag
newPElementNode.setAttributeNode(newAttrNode)

//5. add test node to parent node
newPElementNode.appendChild(newTextnode)

//6. add a new paragraph to a tree document
const targetDiv = document.getElementById('myApp') //find a <div id="myApp"> node in the document
targetDiv.appendChild(newPElementNode)

//get node  name, node value, node type
console.log(targetDiv.nodeType)
console.log(targetDiv.nodeName)
console.log(targetDiv.nodeValue)

console.log(rootNode.nodeType)
console.log(rootNode.nodeName)
console.log(rootNode.nodeValue)

console.log(document.head)
console.log(document.body)
console.log(document.title)

console.log(targetDiv.previousElementSibling)
console.log(targetDiv.nextElementSibling)
console.log(targetDiv.parentElement)
console.log(targetDiv.children)