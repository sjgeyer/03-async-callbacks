# Project Name
**Author**: Sarah Geyer <br/>
**Version**: 1.0.0
## Overview
This app reads all files in an array and prints them to the console. It also makes an array holding the text of those files.
## Getting Started
In order to build this app, the user must first initialize their project and install all the needed dependencies (listed below). They then need to create their text files, fill them with text, and create a function that will read those files. The user then has to create another function that will iterate through the array of file paths, invoking the file-reading function for each file path, and logging the contents of the file to the console.
## Module descriptions
#### 'reader' module
This exported module includes the function readIpsum, which has an arity of 2. It takes in the file path of the file it will read as well as a callback function. The function will try reading the file using fs according to the path passed into readIpsum. If there is an error, the callback will be invoked with the error. If the file-reading is successful, the function will return the callback, which is invoked (passing in a null error and the contents of the file as a string as parameters) and the readFileArray function in main.js will then use the file string to print to the console and add into the array of file data.
## Architecture
This application uses JavaScript, Node, Babel, ESLint (according to AirBnb style guide), and fs.
## Change Log
04-18-2018 03:30 - Application has complete file tree and data files.
04-18-2018 04:30 - Application is fully functional and printing contents of files to the console.
