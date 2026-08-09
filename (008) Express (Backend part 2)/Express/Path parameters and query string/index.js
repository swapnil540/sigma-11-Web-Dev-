const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("welcome to root");
});

// app.get("/:username", (req, res) => { // path parameters
//     console.log(req.params);
//     let {username} = req.params; // params property of object req stores the parameters passed in request as routes(path)
//     let htmlStr = `<h1>Welcome on pg of @${username}</h1>`;
//     res.send(htmlStr);
// });

app.get("/search", (req, res) => { // handling query strings passed in url
    let {q} = req.query; // query property of object req stores the queries passed in url
    console.log(req.query);
    
    if(!q) { // in case of empty search string
        res.send("nothing found")
    }
    let htmlStr = `<h1>Search results for query: ${q}</h1>`;
    res.send(htmlStr); // sending response 
});