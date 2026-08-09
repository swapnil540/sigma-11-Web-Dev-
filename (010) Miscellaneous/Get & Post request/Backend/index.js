const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true})); // parsing data came by POST request via request body

app.get("/register", (req, res) => {
    let {user, pass} = req.query; // accessing data sent through query strings
    res.send(`standard GET  response, Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let {user, pass} = req.body; // data sent by POST request present in request body
    res.send(`standard POST  response, Welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

