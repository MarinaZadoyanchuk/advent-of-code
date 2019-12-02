const intcodeProgram = require('./intcode-program')
const input = require('./input')

input[1] = 12
input[2] = 2

const res = intcodeProgram(input)
console.log(res[0])
