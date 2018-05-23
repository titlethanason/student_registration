var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'studentregis'
});

connection.connect(function(err){
  if(err)
      console.log(err);
  else   
      console.log("db connected");
})

module.exports = connection;