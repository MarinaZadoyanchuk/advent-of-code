const getFuelAmount = require('./get-fuel-by-mass')

const testCases = [
  [12, 2],
  [14, 2],
  [1969, 654],
  [100756, 33583],
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
