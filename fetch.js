const connec = require("./connection.js");
var conn = connec.conn;

conn.connect(function(err){
    if(err) throw err;
    var sql = "select * from test";
    conn.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);

    });

});

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });