
// const {getItemsOfCurrentPage, greeting, ID} = require("./function.js")
import {getItemsOfCurrentPage, greeting, ID} from './myLib/function.js'
import {BookMark} from './myLib/bookMarkManagement.js'

console.log(getItemsOfCurrentPage([5,10,30,55,2,100,8,9,87,10],1,5))
console.log(greeting('Jimmy'))
console.log(ID)

const myBookMark = new BookMark('1-2-3-4-5678',199)
console.log(myBookMark)
myBookMark.addBookMark(12)
console.log(myBookMark.getBookMarks())
console.log(myBookMark)