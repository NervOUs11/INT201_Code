const { template } = require('@babel/core')
// 64130500045 นิธิศ วิศยทักษิณ
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if(allItems === null || allItems === undefined) {return undefined}
  if(allItems.length === 0){return []}
  if(currentPage <= 0 || rowsPerPage <= 0){return allItems}  

  const itemsOfCurrentPage = allItems.slice(rowsPerPage*(currentPage-1),rowsPerPage*currentPage)
  return itemsOfCurrentPage.length === 0 ? [] : itemsOfCurrentPage


  // let totalPage = Math.ceil(allItems.length/rowsPerPage)
  // let result = []

  // for (let index = 0; index < totalPage; index++) {
  //   let page = []
  //   for (let j = 0; j < rowsPerPage; j++) {
  //     if(allItems[0] == null){
  //       break
  //     }
  //     page.push(allItems[0])
  //     allItems.shift()
  //   }
  //   result.push(page)
  // }

  // return result[currentPage-1]



}
module.exports = getItemsOfCurrentPage