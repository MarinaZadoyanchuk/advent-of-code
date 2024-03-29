/* Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.
*/

const getDirectionByParenthesis = require('../utils/get-direction-by-parenthesis')

module.exports = (parenthesises = '') => {
  let floor = 0;
  ([...parenthesises]).forEach(parenthesis => {
    floor = floor + getDirectionByParenthesis(parenthesis)
  })

  return floor
}
