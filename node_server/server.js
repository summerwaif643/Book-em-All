const express = require('express');
var mysql = require('mysql');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

const PORT = 3000;
const corsOptions ={
    origin: 'http://localhost:4200', 
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    methods: 'POST,GET,PUT,OPTIONS,DELETE'
};

app.use(express.urlencoded());
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
    extended: true
}));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'bookemall'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Successfully connected to database.");
  
});

app.post('/login', function(req, res, next){
    // post and wait for changes on login component from angular 
    let username = req.body.username;
    let password = req.body.password;

    console.log(username, password);

});

app.get('/login', function(req, res, next){
    // write later
});

// Last thing to appear on page
app.listen(PORT, () => { 
    console.log('application listening on port ' + PORT);
});

