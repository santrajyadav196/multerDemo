const express = require("express");
const app = express();

const upload = require("./multer");
// const multer = require("multer");

// const FileStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./images");
//   },
//   filename: function (req, file, cb) {
//     // let fileName = `${new Date().getTime()}_${file.originalname}`;
//     // cb(null, fileName);
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({storage: FileStorage});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
});

app.listen(3000, () => {
  console.log("App is runing on port 3000!");
});
