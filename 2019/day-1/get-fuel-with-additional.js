const getFuelByMass = require('./get-fuel-by-mass')

function getFuelWithAdditional(mass, acc = 0) {
  const additionalFuel = getFuelByMass(mass)

  if (additionalFuel > 0) {
    return getFuelWithAdditional(additionalFuel, acc + additionalFuel)
  }

  return acc
}

module.exports = getFuelWithAdditional