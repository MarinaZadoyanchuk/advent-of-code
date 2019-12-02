const input = require('./input')
const intcodeProgram = require('./intcode-program')

const expectedOutput = 19690720

let i = 0
while(i < input.length) {
  let j = 0
  while (j < input.length) {
    const newInput = [...input]
    newInput[1] = i
    newInput[2] = j
    const res = intcodeProgram(newInput)
    if (res[0] === expectedOutput) {
      console.log({noun: i, verb: j})
      console.log(100 * i + j)
      return
    }
    j++
  }
  i++
}