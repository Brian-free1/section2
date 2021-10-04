const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors()) // 모든 요청에 대해 CORS 허용
app.use(express.json({ strict: false }));
const port = 5000;
const ip = 'localhost';

// 생략



// app.get('/', (req, res) => {
//   res.send('Hello world!');
// })

app.post('/lower', function(req, res){
  console.log(req.body)
  let result = req.body
  result = result.toLowerCase()
  res.json(result)
})

app.post('/upper', function (req, res) {
  console.log(req.body)
  let result = req.body
  result = result.toUpperCase()
  res.json(result)
})


app.listen(port, ip, ()=>{
  console.log(`http server listen on ${ip}:${port}`);
})





// const http = require('http');

// const port = 5000;

// const ip = 'localhost';

// const server = http.createServer((request, response) => {



//   if(request.method === 'POST'){
//     if(request.url === '/lower'){
//       let body;
//       request
//       .on('data', (chunk) =>{ // chunk : <Buffer 27 49> 이렇게 나온다
//         // 'data' 이거는 원래 node.js에서 data를 받아 올때 이런 식으로 사용
//         body = chunk.toString().toLowerCase()
//       })
//       .on('end', ()=>{
//         response.writeHead(200, defaultCorsHeader)
//         response.end(body)
//       })
//     }else if(request.url === '/upper'){
//       let body
//       request.on('data', (chunk) =>{
//         body = chunk.toString().toUpperCase()
//       })
//       .on('end', ()=>{
//         response.writeHead(200, defaultCorsHeader);
//         response.end(body);
//       })
//     }else{
//       res.writeHead(404, defaultCorsHeader); 
//       res.end();
//     }
//   }
//   if (request.method === 'OPTIONS') { // get을 써줄 필요 없었음
//     // 브라우저가 서버에게 허가를 받기 위해 보내는 요청
//     // 즉, 요청으로 options가 오게 되면 응답으로 허가를 답해라는 내용이다
//     // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS' 이 모든 메소드를 허가 한다는 내용이다.
   
//     // 보안 때문에 브라우저는 OPTIONS를 preflight하여 서버에서 허용하는 옵션을 미리 확인하고,
//     // 허용되지 않은 요청의 경우 405(Method Not Allowed)에러를 발생시키고 실제 요청은 전송하지 않는다.

//     //브라우저가 본 요청을 보내기 전에 보내는 예비 요청을 Preflight라고 부르는 것이며, 
//     //이 예비 요청에는 HTTP 메소드 중 OPTIONS 메소드가 사용된다. 
//     //예비 요청의 역할은 본 요청을 보내기 전에 브라우저 스스로 이 요청을 보내는 것이 안전한지 확인하는 것이다.
//     response.writeHead(200, defaultCorsHeader);
//     response.end('hello mini-server sprints');
//   }

//   // console.log(
//   //   `http request method is ${request.method}, url is ${request.url}`
//   // );
//   // response.writeHead(200, defaultCorsHeader);
//   // response.end('hello mini-server sprints');
// });

// server.listen(port, ip, () => {
//   console.log(`http server listen on ${ip}:${port}`);
// });

// const defaultCorsHeader = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Accept',
//   'Access-Control-Max-Age': 10
// };
