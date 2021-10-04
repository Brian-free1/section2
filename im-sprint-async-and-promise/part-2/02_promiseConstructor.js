const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

const getDataFromFilePromise = filePath => {
   return new Promise((resolve, reject)=>{
     fs.readFile(filePath, 'utf8', (err, data) => {
       if (err) {
         reject(err) // 에러를 던집니다.
       }else{
         resolve(data)
       }
     });
   })
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
};

 getDataFromFilePromise('README.md').then(data => console.log(data));

module.exports = {
  getDataFromFilePromise
};
