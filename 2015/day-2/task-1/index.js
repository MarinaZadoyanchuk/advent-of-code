const fs = require('fs')

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
  const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./list.txt')
  })

  let acc = 0
  
  lineReader.on('line', function (line) {
    console.log('BOX with:', line);

    acc += getWrappedPaperSquare(line)
  })

  lineReader.on('close', () => {
    console.log(acc)
  })
}


getTotalByList()

module.exports = getWrappedPaperSquare