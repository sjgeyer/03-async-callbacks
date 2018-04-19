'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.readIpsum = (path, callback) => {
  console.log('-------------------------------------------------------');
  return fs.readFile(path, (error, result) => {
    if (error) {
      callback(error);
    }
    return callback(null, result.toString('utf8', 0));
  });
};
