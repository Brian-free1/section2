const fs = require("fs");

const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해 작성합니다
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null); // 에러를 던집니다.
    }else{
      callback(null, data)
    }
  });

};

 getDataFromFile('README.md', (err, data) => console.log(data));

module.exports = {
  getDataFromFile
};
