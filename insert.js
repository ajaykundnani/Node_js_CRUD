const connec = require("./connection.js");
var conn = connec.conn;

conn.connect(function(err){
    if(err) throw err;
    var sql = "insert into test(name,age)values('Ajay','23')";
    conn.query(sql,function(err,result){
        if(err) throw err;
        console.log('1 row inserted');

    });

});
