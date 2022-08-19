// require('dotenv').config();
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "test1",
    password: "",
});

// const sql = "SELECT * FROM user";

// pool.execute(sql, function(err, result){
//     if(err) throw err;

//     console.log(result);
// })

module.exports = pool.promise();