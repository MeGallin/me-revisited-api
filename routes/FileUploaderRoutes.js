const express = require('express');
const multer = require('multer');
const path = require('path');
const { protect, admin } = require('../middleWare/AuthMiddleWare');

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, __dirname + '/upload');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

function checkFileType(file, cb) {
  const filetypes = /txt|text/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Text files only!');
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

const uploader = async (req, res, next) => {
  try {
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(401);
    throw new Error(`Image not uploaded. ${error}`);
  }
};
// NB!!! This name 'file' must match the name attribute in the upload form.
router.post(
  '/admin/file-upload',
  upload.single('file'),
  protect,
  admin,
  uploader,
);

module.exports = router;
