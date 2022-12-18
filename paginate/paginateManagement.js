// const { template } = require('@babel/core')
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

//นิธิศ วิศยทักษิณ 64130500045
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
      const itemOfCurrentPage = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)
      const productsUI = document.getElementById('products')

      for (let index = 0; index < itemOfCurrentPage.length; index++) {
        let li = document.createElement('li')
        li.textContent = `ID:${itemOfCurrentPage[index].id}, NAME:${itemOfCurrentPage[index].name}`
        productsUI.appendChild(li)
      }
  }
  const pageHandler = (event) => {
    // clean button click styles
    const pagesStyle = document.querySelectorAll('button')
    pagesStyle.forEach((page) => (page.style = 'border: 1px solid #999'))

    //clean previous page's items
    const productsUl = document.getElementById('products')
    productsUl.textContent = ''

    //calculating current page
    const currentPage = event?.target.id ?? 1
    showItemsOfCurrentPage(currentPage)

    //add button click style to a current page
    const targetPageButton = document.getElementById(currentPage)
    targetPageButton.style = 'background-color: LightSteelBlue'
  }
  const showPageNumbers = () => {
    const totalpage = getTotalPages(products, rowsPerPage)
    const pagination = document.querySelector('.pagination')
    // const app = document.querySelector('#app')
    // const pagination = app.querySelector('div.pagination')
    
    for (let page = 1; page <= totalpage; page++) {
      const btn = document.createElement('button')
      btn.textContent = page
      btn.setAttribute('id',page)
      btn.addEventListener('click', pageHandler)
      pagination.appendChild(btn)
    }
  }

  return {
    showPageNumbers,
    pageHandler
  }
}
// module.exports = paginateManagement
export { paginateManagement }
const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
showPageNumbers()
pageHandler()
