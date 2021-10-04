
var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다.
  let obj = {};
  
  return new Promise ((resolve, reject)=>{
    fetch(newsURL)
      .then((response)=> response.json())
      .then((response)=> {
        obj['news'] = response.data
        return fetch(weatherURL)
      })
      .then((response)=>response.json())
      .then((response)=>{
        obj['weather'] = response
        resolve(obj)
      })
  })
}

// return new Promise((resolve, reject) => {
//   resolve(fetch(newsURL).then((response) => response.json()))
// }).then(data1 => {
//   obj.news = data1;
//   return new Promise((resolve, reject) => {
//     resolve(fetch(weatherURL).then((response) => response.json()))
//   })
// }).then(data2 => {
//   obj.weather = data2;
//   return obj;
// })

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}