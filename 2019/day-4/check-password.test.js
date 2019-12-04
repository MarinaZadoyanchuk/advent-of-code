const checkPassword = require('./check-password')

const testCases = [
  [111111, true],
  [223450, false],
  [123789, false],
]

for ([input, expectedResult] of testCases) {
  const output = checkPassword(input)
  if (output !== expectedResult) {
    console.log(`THE TEST CASE WITH INPUT FAILED: ${input}`)
    console.log(`RESULT: ${output}`)
    console.log(`EXPECTED RESULT: ${expectedResult}`)
    process.exit(1)
  } else {
    console.log(`THE TEST RUNS SUCCESSFULLY`)
  }
}
