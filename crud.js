const connec = require("./connection.js");
var conn = connec.conn;

const prompt = require('prompt-sync')();

console.log('1 => insert');
console.log('2 => fetch');
console.log('3 => delete');
 
const name = prompt('What you want to do :');
if(name=='1')
{
    conn.connect(function(err){
        if(err) throw err;
        var sql1 = "insert into test(name,age)values('Ajay','23')";
        conn.query(sql1,function(err,result){
            if(err) throw err;
            console.log('1 row inserted');
    
        });
    
    });
}

else{
    conn.connect(function(err){
        if(err) throw err;
        var sql2 = "select * from test";
        conn.query(sql2,function(err,result){
            if(err) throw err;
            console.log(result);
    
        });
    
    });
}


