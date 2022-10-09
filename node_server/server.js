const express = require('express');
var mysql = require('mysql');
const app = express();
const cors = require('cors');
const PORT = 3000;

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};

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
    var data = req.body.params;
    console.log(data);

    if (data){ 
        res.sendStatus(200);
    }

});

app.get('/login', function(req, res, next){
    // write later
});

app.use(cors(corsOptions));

// Last thing to appear on page
app.listen(PORT, () => { 
    console.log('application listening on port ' + PORT);
});

