const getBasementPosition = require('./index')

const testCases = [
  [')', 1],
  ['()())', 5],
  ['(', undefined]
]

for ([input, expectedResult] of testCases) {
  const output = getBasementPosition(input)
  if (output !== expectedResult) {
    console.log(`THE TEST CASE WITH INPUT FAILED: ${input}`)
    console.log(`RESULT: ${output}`)
    console.log(`EXPECTED RESULT: ${expectedResult}`)
    process.exit(1)
  } else {
    console.log(`THE TEST RUNS SUCCESSFULLY`)
  }
}
