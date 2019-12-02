const intcodeProgram = require('./intcode-program')

const testCases = [
  [[1,0,0,0,99], [2,0,0,0,99]],
  [[2,3,0,3,99], [2,3,0,6,99]],
  [[2,4,4,5,99,0], [2,4,4,5,99,9801]],
  [[1,1,1,4,99,5,6,0,99], [30,1,1,4,2,5,6,0,99]],
]

for ([input, expectedResult] of testCases) {
  const output = intcodeProgram(input)
  if (output.some((val, index) => expectedResult[index] != val)) {
    console.log(`THE TEST CASE WITH INPUT FAILED: ${input}`)
    console.log(`RESULT: ${output}`)
    console.log(`EXPECTED RESULT: ${expectedResult}`)
    process.exit(1)
  } else {
    console.log(`THE TEST RUNS SUCCESSFULLY`)
  }
}
