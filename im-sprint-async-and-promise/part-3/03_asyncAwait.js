
var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  let obj = {}

  const news = await fetch(newsURL).then(response=>response.json())
  obj['news'] = news.data
  const weather = await fetch(weatherURL).then(response => response.json())
  obj['weather'] = weather

  return obj
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}