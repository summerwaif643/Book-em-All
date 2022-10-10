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
app.use(cors(corsOptions)); // doesnt work? 
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

app.get('/loginGet/:id', function(req, res){

    console.log(req.params);

    // given req.id as the id passed from typescript
    let sql = "SELECT username FROM user WHERE id = '" + req.params.id + "';"; 

    con.query(sql, function(err, result) {
        if (err) throw err; 
        res.send(result[0].username);
    })

});

app.post('/login', function(req, res, next){
    // Application sends post. What to send? 

    // post and wait for changes on login component from angular 
    let username = req.body.username;
    let password = req.body.password;

    console.log(username, password);

    let sql = "SELECT username, password FROM user";

    con.query(sql, function(err, result){
        if (err) throw err; 
        // notation for query is 
        // result[i] for row value 
        // result[i].attribute for single attribute

        for (let i=0; i < result.length; i++){
            if (result[i].username == username && result[i].password == password ){
                console.log('match!');
                res.sendStatus(200);
                // here do something about the username being logged. 
                // 
                break;
            } 
           
        }

        res.sendStatus(500);

    })

});

app.get('/login', function(req, res, next){
    // Application sends get. What to get? 
});

// Last thing to appear on page
app.listen(PORT, () => { 
    console.log('application listening on port ' + PORT);
});

