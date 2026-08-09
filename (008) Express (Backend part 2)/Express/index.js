const express = require("express");
const app = express();

// console.dir(app);

const port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request recieved");
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li></ul>"
//     // res.send(code);
//     res.send({ // This will  converted to json type
//         name: "swapnil",
//         marks: 70
//     });
// });

// GET request
app.get("/", (req, res) => { // root path
    res.send("You contacted root path, welcome");
});

app.get("/apple", (req, res) => {
    res.send("You contacted apple path");
});

app.get("/mango", (req, res) => {
    res.send("You contacted mango path");
});


app.get("/*anytxt", (req, res) => { // callback for any undefined route -> wildcard
    res.send("You contacted path does not exist");
});

// POST request

app.post("/", (req, res) => {
    res.send("You sent post request to root");
});


