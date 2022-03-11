const express = require('express')
//const multer = require('multer')
const path = require('path')
const router = express.Router()

// // Image Upload
// const imageStorage = multer.diskStorage({
//   destination: 'images', // Destination to store image
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + '_' + Date.now() + path.extname(file.originalname)
//     )
//     // file.fieldname is name of the field (image), path.extname get the uploaded file extension
//   },
// })

// const imageUpload = multer({
//   storage: imageStorage,
//   limits: {
//     fileSize: 1000000, // 1000000 Bytes = 1 MB
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(png|jpg)$/)) {
//       // upload only png and jpg format
//       return cb(new Error('Please upload a Image'))
//     }
//     cb(undefined, true)
//   },
// })

// // For Single image upload
// router.post(
//   '/',
//   imageUpload.single('image'),
//   (req, res) => {
//     res.send(req.file)
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
//   }
// )

router.get('/:file(*)', (req, res) => {
  let file = req.params.file
  let fileLocation = path.join(__dirname, '/../images', file)
  res.sendFile(`${fileLocation}`)
})

module.exports = router
