const multer = require("multer");

const FileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    // let fileName = `${new Date().getTime()}_${file.originalname}`;
    // cb(null, fileName);
    cb(null, file.originalname);
  },
});

module.exports = multer({storage: FileStorage});
