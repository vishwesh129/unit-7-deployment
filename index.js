require("dotenv").config();
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send({"msg" : "Base of API" , "name" : process.env.NAME})
})

app.get("/blogs", (req, res) => {
    res.send({"Blogs" : "blogs blogs blogs"})
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`listening on port localhost:${process.env.PORT}`)
})


