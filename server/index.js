const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const PORT = 3001;

const app = express();


//Middleware  
app.use(express.json()); //parse json bodies in the request object
app.use(cors());

//Redirect request to endPoint starting with /posts to postRoutes.js
app.use("/post", require("./routes/PostRoutes"));

app.get("/api", (req, res)=>{
    res.send("hello i am express server");
});

// Global Error Handler, function params Must start with err
app.use((err, req, res, next) =>{
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went wrong",
    });
});

app.listen(PORT, ()=>{
    console.log("server listening on" + PORT);
});