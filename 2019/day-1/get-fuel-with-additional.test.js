const getFuelAmount = require('./get-fuel-with-additional')

const testCases = [
  [14, 2],
  [1969, 966],
  [100756, 50346],
]

for ([input, expectedResult] of testCases) {
  const output = getFuelAmount(input)
  if (output !== expectedResult) {
    console.log(`THE TEST CASE WITH INPUT FAILED: ${input}`)
    console.log(`RESULT: ${output}`)
    console.log(`EXPECTED RESULT: ${expectedResult}`)
    process.exit(1)
  } else {
    console.log(`THE TEST RUNS SUCCESSFULLY`)
  }
}
