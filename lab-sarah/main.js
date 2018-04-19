'use strict';

const reader = require('./lib/reader');

const catPath = `${__dirname}/data/cat-ipsum.txt`;
const cupcakePath = `${__dirname}/data/cupcake-ipsum.txt`;
const rossPath = `${__dirname}/data/bob-ross-ipsum.txt`;

const fileArray = [catPath, cupcakePath, rossPath];
const stringArray = [];

const printFiles = (file) => {
  console.log(file);
};

const readFileArray = (paths, currentIndex, callback) => {
  if (currentIndex >= paths.length) {
    return callback('\nRead all files!!');
  }
  const currentPath = paths[currentIndex];
  try {
    return reader.readIpsum(currentPath, (error, file) => {
      stringArray.push(file);
      printFiles(file);
      readFileArray(paths, currentIndex + 1, callback);
    });
  } catch (error) {
    callback(error);
  }
  return undefined;
};

readFileArray(fileArray, 0, input => console.log(input));
