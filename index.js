const express = require('express'); // Express 임포트
const app = express();              // Express 앱 생성


// app.get('/', (req, res) => {        // / 경로로 get 요청을 받았을 때
 //  res.send('Hello World!');         // res 객체로 응답을 보낼 수 있다.
// });

app.get('/', (req, res) => {        // / 경로로 get 요청을 받았을 때
  return res.render('index', {title: "제목", max: 5});  //두번쨰 매개변수로 객체에 데이터를 담아 ejs에 전달할 수 있다.
});

app.listen(3000, () => {            // 3000번 포트로 요청 수신
  console.log('Server started at http://localhost:3000');

  app.set('views', __dirname + '/views'); // views 폴더에서 ejs 템플릿을 가져오게 설정
app.set('view engine', 'ejs');          // 템플릿 엔진을 ejs로 


});