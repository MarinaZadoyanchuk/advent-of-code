const stepReg = /^(R|L|U|D)(\d+)$/

function getWirePath(steps, path = []) {
  if (steps.length === 0) {
    return path
  }

  const [step, ...restStep] = steps
  const [,direction, amount] = step.match(stepReg)
  if (!direction) {
    throw new Error(`wrong direction for step ${step}`)
  }

  const lastPoint = path.length > 0 ? path[path.length - 1] : [0, 0, 0]
  const nextPoint = [...lastPoint]
  if (direction === 'R') {
    nextPoint[0] = nextPoint[0] + +amount
  }

  if (direction === 'L') {
    nextPoint[0] = nextPoint[0] - +amount
  }

  if (direction === 'U') {
    nextPoint[1] = nextPoint[1] + +amount
  }

  if (direction === 'D') {
    nextPoint[1] = nextPoint[1] - +amount
  }
  // steps to reach the point
  nextPoint[2] = lastPoint[2] + +amount

  path.push(nextPoint)

  return getWirePath(restStep, path)
}

module.exports = getWirePath