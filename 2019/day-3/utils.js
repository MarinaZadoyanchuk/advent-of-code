function inRange(number, a, b) {
  return number >= Math.min(a, b) && number <= Math.max(a, b)
}

function getIntersectionPoint(line1, line2) {
  // Line1 represented as a1x + b1y = c1
  const [[x1, y1], [x2, y2]] = line1
  const a1 = y2 - y1
  const b1 = x1 - x2
  const c1 = a1 * x1 + b1 * y1

  // Line2 represented as a2x + b2y = c2
  const [[x3, y3], [x4, y4]] = line2
  const a2 = y4 - y3
  const b2 = x3 - x4
  const c2 = a2 * x3 + b2 * y3

  const determinant = a1 * b2 - a2 * b1

  if (determinant === 0) {
    return null
  }

  const intersectionX  = (b2 * c1 - b1 * c2) / determinant
  const intersectionY  = (a1 * c2 - a2 * c1) / determinant

  // check if the point is on the segments
  if (inRange(intersectionX, x1, x2) && inRange(intersectionY, y1, y2) && inRange(intersectionX, x3, x4) && inRange(intersectionY, y3, y4)) {
    return [intersectionX, intersectionY]
  }

  return null
}

function getManhattanDistance([x1, y1], [x2, y2]) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

module.exports = {
  getIntersectionPoint,
  inRange,
  getManhattanDistance,
}