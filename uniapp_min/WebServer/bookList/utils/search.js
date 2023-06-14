function searchBook(bookList, keyword) {
  // 正则表达式，不区分大小写
  const reg = new RegExp(keyword, "i")
  return result = bookList.filter(item => {
    const flag = item.title.search(reg)
    if(flag !== -1) return item
  })
}

module.exports = searchBook