

export class BookMark {
  constructor(isbn,totalPages=0){
    this.isbn = isbn
    this.totalPages = totalPages
    this.bookMarks = []
  }

  addBookMark(pageNumber){
    if(pageNumber >= 1 && pageNumber <= this.totalPages){
      this.bookMarks.push(pageNumber)
    }
    return this.bookMarks.length
  }

  removeBookMark(pageNumber){
    const beforeRemoveLength = this.bookMarks.length
    this.bookMarks = this.bookMarks.filter(BookMark => BookMark != pageNumber)
    return beforeRemoveLength === this.bookMarks.length ? undefined : pageNumber
    // let newbookMarks = []
    // let removeMark = 0
    // for (let index = 0; index < this.bookMarks.length; index++) {
    //   if(this.bookMarks[index] != pageNumber){
    //     newbookMarks.push(this.bookMarks[index])
    //   }
    //   if(this.bookMarks[index] === pageNumber){
    //     removeMark = pageNumber
    //   }
    //   if(pageNumber > this.totalPages){
    //     return undefined
    //   }
    // }
    // this.bookMarks = newbookMarks
    // return removeMark
  }

  goToFirstBookMark(){
    if(this.bookMarks.length === 0){
      return undefined
    }
    return this.bookMarks[0]
  }

  goToLastBookMark(){
    if(this.bookMarks.length === 0){
      return undefined
    }
    return this.bookMarks[this.bookMarks.length-1]
  }

  getBookMarks(){
    return this.bookMarks
  }
}
