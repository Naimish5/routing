const express = require('express')
const app = express()

var mysql = require('mysql')
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"naimish"
})

console.log("Database Connected!!!!");

app.get('/con', function (req, res) {
    res.send(con);
    res.send("Database Connected !!!!")
})


// app.get('/about', function (req,res) {
//     res.send("This is About page")
// })


// app.get('/contact', function (req,res) {
//     res.send("This is Contact page")
// })

 
app.listen(2090);