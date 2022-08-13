const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')))

app.get("/api", (req, res)=>{
    res.json({"message": "hello i am express server"});
});

app.listen(PORT, ()=>{
    console.log("server listening on" + PORT);
})