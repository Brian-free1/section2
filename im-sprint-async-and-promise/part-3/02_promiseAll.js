


var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  let obj ={}

  return Promise.all([
    fetch(newsURL).then(response => response.json()),
    fetch(weatherURL).then(response => response.json())
  ])
    .then(response => {
      obj['news'] = response[0].data
      obj['weather'] = response[1];
      return obj;
    })
}
if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}