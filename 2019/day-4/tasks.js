const checkPassword = require('./check-password')

function countPasswordsInRange(min, max, strict) {
  let count = 0
  for (let i = min; i <= max; i++) {
    if (checkPassword(i, strict)) {
      count++
    }
  }

  return count
}

console.log(`Task1: ${countPasswordsInRange(125730, 579381, false)}`)
console.log(`Task2: ${countPasswordsInRange(125730, 579381, true)}`)