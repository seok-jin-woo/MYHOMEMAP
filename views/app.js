const express = require("express") 
const ejs = require("ejs")
const app = express() 

app.set("view engine", "ejs");
app.use(express_static(__dirname +'/'));

app.get("/", function(req,res){
    console.log("test") 
    res.render("test", {});
})

app.listen(3001, function(){
    console.log("localhost:3001 실행중");
})