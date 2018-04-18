'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.readIpsum = (path, callback) => {
  console.log('-------------------------------------------------------');
  return fs.readFile(path, (error, fileBuffer) => {
    if (error) {
      callback(error);
    }
    return callback(fileBuffer.toString('utf8', 0));
  });
};
