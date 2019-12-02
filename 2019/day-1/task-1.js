const path = require('path')
const getFuelAmount = require('./get-fuel-by-mass')
const readFileByLine = require('../../../utils/read-file-by-line')

let acc = 0
readFileByLine(path.resolve(__dirname, './modules.txt'), (line) => {
  acc += getFuelAmount(line)
}).then(() => {
  console.log(acc)
})