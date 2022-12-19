import { products } from './data/products.js'
// const { template } = require('@babel/core')
// const products = require('./data/products.js')

//นิธิศ วิศยทักษิณ 64130500045
function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    let input = document.querySelector('input')
    input.addEventListener('input',filterItemsHandler)
    showItems(items)
  }

  const filterItemsHandler = (event) => {
    let text = document.querySelector('input').value
    let filter = items.filter((item) =>
    item.keywords.toLowerCase().includes(text.toLowerCase()))
    showItems(filter)
  }

  const showItems = (items) => {
    let itemList = document.getElementById('items')
    itemList.textContent = ''
    
    for (let index = 0; index < items.length; index++) {
      let li = document.createElement('li')
      li.textContent = `ID:${items[index].id}, NAME:${items[index].name}, KEYWORDS:${items[index].keywords}`
      itemList.appendChild(li)
    }
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}
// module.exports = itemList
export { itemList }
const { initialPage, filterItemsHandler, showItems } = itemList(products)
initialPage()
