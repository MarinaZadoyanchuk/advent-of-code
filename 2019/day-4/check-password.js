function checkPassword(password, strict = false) {
  const numbers = [...password.toString()]
  let hasDouble = false
  let groups = {}
  let i = 0
  while (i < numbers.length - 1) {
    const currentNumber = numbers[i]
    const nextNumber = numbers[i + 1]
    if (nextNumber < currentNumber) {
      return false
    }

    if (currentNumber === nextNumber) {
      if (strict) {
        groups[currentNumber] = groups[currentNumber] ? groups[currentNumber] + 1 : 2
      } else {
        hasDouble = true
      }
    }
    i++
  }

  return strict ? Object.values(groups).some(l => l === 2) : hasDouble
}

module.exports = checkPassword