module.exports = (parenthesis) => {
  if (parenthesis == '(' ) {
    return 1
  }
  if (parenthesis == ')') {
    return -1
  }

  return 0
}