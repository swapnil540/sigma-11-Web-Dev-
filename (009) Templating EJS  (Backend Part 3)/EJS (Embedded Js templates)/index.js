const express = require("express");
const app = express(); // express automatically internally requires the ejs package so why we dont nedd to require ejs seperately
const path = require("path");
const port = 8080;


app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("view engine", "ejs"); // setting template engine which users will  see to ejs
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // console.log("request recieved");
    // res.send("response sent");
    res.render("home.ejs");

});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceVal});
})

// instagram route
app.get("/ig/:username", (req, res) => {
    let instaData = require("./data.json");
    let {username} = req.params;
    let data = instaData[username]; // seperating data according to username
    // console.log(data);
    if(data) {
        res.render("instagram.ejs", {data}); // passing data to ejs file
    } else {
        res.render("error.ejs"); // in case of no such username exists
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


