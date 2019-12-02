/*
* intcode program - https://adventofcode.com/2019/day/2
* @param {Array} input - array of commands and arguments
* @param {number} position - pointer to current position of program
* @returns {Array} - result of program
*/
function intcode(input, position = 0) {
  const opcode = input[position]

  if ((addOperation = opcode === 1) || opcode === 2) {
    const [first, second, result] = input.slice(position + 1, position + 4)
    const val1 = input[first]
    const val2 = input[second]
    input[result] = addOperation ? val1 + val2 : val1 * val2

    return intcode(input, position + 4)
  }

  if (opcode === 99) {
    return input
  }

  throw new Error(`unknown opcode ${opcode}`)
}

module.exports = intcode