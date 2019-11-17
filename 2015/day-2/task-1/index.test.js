const getWrappedPaperSquare = require('./index')

const testCases = [
  ['2x3x4', 58],
  ['1x1x10', 43],
]

for ([input, expectedResult] of testCases) {
  const output = getWrappedPaperSquare(input)
  if (output !== expectedResult) {
    console.log(`THE TEST CASE WITH INPUT FAILED: ${input}`)
    console.log(`RESULT: ${output}`)
    console.log(`EXPECTED RESULT: ${expectedResult}`)
    process.exit(1)
  } else {
    console.log(`THE TEST RUNS SUCCESSFULLY`)
  }
}
