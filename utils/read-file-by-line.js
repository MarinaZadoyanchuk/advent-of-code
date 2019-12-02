module.exports = (pathToFile, cb) => new Promise((resolve, reject) => {
  const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(pathToFile)
  })
  
  lineReader.on('line', function (line) {
    console.log('BOX with:', line);
  
    cb(line)
  })
  
  lineReader.on('close', () => {
    console.log('file reader closed')
    resolve()
  })
})
