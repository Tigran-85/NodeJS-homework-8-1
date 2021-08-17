const express = require('express');
const router = express.Router();
const upload = require('./posts');

router.post('/', upload.single('image'), (req, res) => {
    res.end('file upload')
  });
  

  module.exports = router;