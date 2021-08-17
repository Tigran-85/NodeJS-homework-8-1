const express = require('express');
const multer  = require('multer');

const mymTypes = require('mime-types');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Math.floor(Math.random()*999999) + '.' + mymTypes.extension(file.mimetype))
    }
  });

 
   
  module.exports = multer({ storage: storage });
