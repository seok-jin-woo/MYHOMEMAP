var express = require('express');
var router = express.Router();
var mysql = require('mysql');


const connection = mysql.createConnection({
    host:'localhost',
    port:'3308',
    user:'toons',
    password:'toons2023',
    database:'toons'
});
connection.connect();

router.get('/api',function(req,res){

    res.send({greeting:'Hello'});
});


module.exports = router;