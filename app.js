const express = require("express");

// this works as designing engine or template engine / this will help to work with html,css,javascript 
const exphbs = require("express-handlebars"); 

// this package is used to get data in json format
const bodyParser = require("body-parser"); 

//const mysql = require("mysql");

//
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.subscribe(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Static files 
app.use(express.static("public")); // using this line we can import assets from public folder to our project

//template engine
const handlebars = exphbs.create({extname:".hbs"});  //this means - .hbs files are extention file of the template
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs");



//Mysql

/*
const con = mysql.createPool({
    connectionLimit:10,
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

//check Database Connection
con.getConnection((err,connection)=>{
    if(err) throw err
    console.log("Connection Success")
});

*/

/*
//router
app.get('/',(req,res)=>{
    res.render("home");
});

*/

const routes = require("./server/routes/students");
app.use('/',routes);



//Listen Port 
app.listen(port,()=>{
    console.log("Listening Port :"+port);
});