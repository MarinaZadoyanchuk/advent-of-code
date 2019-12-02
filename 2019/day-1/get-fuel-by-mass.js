function getFuelAmount(mass) {
  return Math.floor(mass / 3) - 2
}

module.exports = getFuelAmount