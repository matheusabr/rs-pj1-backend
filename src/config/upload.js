// To handle multipart requests
const multer = require('multer')
// To handle paths
const path = require('path')

module.exports = {
  // Define storage to save  a file
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: function(req, file, callback) {
      callback(null, file.originalname)
    }
  })
}
