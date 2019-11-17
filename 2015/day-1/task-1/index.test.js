const getFloor = require('./index')

const testCases = [
  ['(())', 0],
  ['()()', 0],
  ['(((', 3],
  ['(()(()(', 3],
  ['))(((((', 3],
  ['())', -1],
  ['))(', -1],
  [')))', -3],
  [')())())', -3]
]

for ([input, expectedResult] of testCases) {
  const output = getFloor(input)
  if (output !== expectedResult) {
    console.log(`THE TEST CASE WITH INPUT FAILED: ${input}`)
    console.log(`RESULT: ${output}`)
    console.log(`EXPECTED RESULT: ${expectedResult}`)
    process.exit(1)
  } else {
    console.log(`THE TEST RUNS SUCCESSFULLY`)
  }
} 
