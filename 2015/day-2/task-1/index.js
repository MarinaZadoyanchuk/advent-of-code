const path = require('path')
const readFileByLine = require('../../../utils/read-file-by-line')

const splitPattern = (pattern = '') => {
  const {groups} = pattern.match(/^(?<l>\d+)x(?<w>\d+)x(?<h>\d+)$/) || {}

  return groups
}

function getWrappedPaperSquare(str) {
  const {l, w, h} = splitPattern(str)

  if (l && w && h) {
    const area1 = l * w
    const area2 = w * h
    const area3 = h * l
    const theSmallestArea = Math.min(area1, area2, area3)

    return area1 * 2 + area2 * 2 + area3 * 2 + theSmallestArea
  }

  throw new Error('check patter of passed string')
}

function getTotalByList() {
  let acc = 0

  readFileByLine(path.resolve(__dirname, './list.txt'), (line) => {
    acc += getWrappedPaperSquare(line)
  }).then(() => {
    console.log(acc)
  })
}


getTotalByList()

module.exports = getWrappedPaperSquare