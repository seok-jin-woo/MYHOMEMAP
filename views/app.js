const express = require("express") // express 모듈 로드
const ejs = require("ejs") // ejs 모듈 로드
const app = express() // app을 express로 로드

app.set("view engine", "ejs");
app.use(express_static(__dirname +'/'));

app.get("/", function(req,res){
    console.log("test") // console 출력
    res.render("test", {});
})

app.listen(3000, function(){
    console.log("localhost:3000 실행중");
})