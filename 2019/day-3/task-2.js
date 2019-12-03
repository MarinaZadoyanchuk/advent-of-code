const buildPath = require('./build-path')
const {getIntersectionPoint, getManhattanDistance} = require('./utils')
const {wire1, wire2} = require('./input')

const wire1Path = buildPath(wire1.split(','))
const wire2Path = buildPath(wire2.split(','))

let minSteps = Infinity
for (let i = 0; i < wire1Path.length - 1; i++) {
  const line1 = [wire1Path[i], wire1Path[i + 1]]
  let j = 0
  while (j < wire2Path.length - 1) {
    const line2 = [wire2Path[j], wire2Path[j + 1]]
    const intersectionPoint = getIntersectionPoint(line1, line2)
    if (intersectionPoint) {
      const [point1] = line1
      const [point2] = line2
      const sum = point1[2] + getManhattanDistance(point1, intersectionPoint) + point2[2] + getManhattanDistance(point2, intersectionPoint)
      minSteps = Math.min(minSteps, sum)
    }
    j++
  }
}

console.log(minSteps)