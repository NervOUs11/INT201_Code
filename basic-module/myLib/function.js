
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if(allItems === null || allItems === undefined) {return undefined}
  if(allItems.length === 0){return []}
  if(currentPage <= 0 || rowsPerPage <= 0){return allItems}  

  const itemsOfCurrentPage = allItems.slice(rowsPerPage*(currentPage-1),rowsPerPage*currentPage)
  return itemsOfCurrentPage.length === 0 ? [] : itemsOfCurrentPage
}
function greeting(name){
  return `Hi ${name}`
}
const ID = 1010
// module.exports = {getItemsOfCurrentPage, greeting, ID}
export {getItemsOfCurrentPage, greeting, ID}