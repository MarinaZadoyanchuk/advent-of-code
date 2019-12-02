const path = require('path')
const getFuel = require('./get-fuel-with-additional')
const readFileByLine = require('../../utils/read-file-by-line')

let acc = 0
readFileByLine(path.resolve(__dirname, './modules.txt'), (line) => {
  acc += getFuel(line)
}).then(() => {
  console.log(acc)
})