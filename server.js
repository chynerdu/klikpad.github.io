var express = require('express');
var app =express();
var api= require('./api');
var users =require('./accounts');

var port =process.env.PORT ||8080;

app  
   
   .use(express.static('./public'))
   .use(users)
   .use('/api', api)
    .get('/register', function (req, res){
          res.sendfile('public/register.html');
             
})
   .get('/contact' , function (req, res){
        if (!req.user){
             res.redirect('/');
             }else{
       res.sendfile('public/main.html');
             }
   })
    .get('/new' , function (req, res){
        if (!req.user){
             res.redirect('/');
             }else{
       res.sendfile('public/main.html');
             }
   })
    .get('/contact/:id' , function (req, res){
        if (!req.user){
             res.redirect('/');
             }else{
       res.sendfile('public/main.html');
             }
   })

   var server= app.listen(port, function(){
       console.log('Your server is running fine on port' + port);
   });