const express = require("express");

const app = express();

const user = require("./user.json");
// console.log(user);

app.get("/" , (req, res)=>{
    res.send("<h1>Welcome to Home page</h1>")
});

app.get("/users" , (req, res)=>{
    res.send({user})
});


app.listen(2345, function () {
    console.log("listening on port 2345");
});