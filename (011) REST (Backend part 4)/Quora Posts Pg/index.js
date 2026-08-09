const express = require("express");
const app = express();
const path = require("path");
const {v4: uuidv4} = require("uuid");
const methodOverride = require("method-override");


const port = 8080;

app.use(methodOverride('_method')); // to override html form methods

app.use(express.urlencoded({extended: true})); // parsing data comes from frontend so that express can understand it.

app.set("view engine", "ejs"); // setting view layout to ejs
app.set("views", path.join(__dirname, "/views")); // to access ejs temmplates, no matter from which directory server is started

app.use(express.static(path.join(__dirname, "/public"))); // to serve static files


let posts = [
    {
        id: uuidv4(), // gives unique id each time it executes
        username: "apnacollege",
        content: "I love coding!",
    },
    {
        id: uuidv4(),
        username: "shraddhakhapra",
        content: "Hardwork is important to achieve success",
    },
    {
        id: uuidv4(),
        username: "rahulkumar",
        content: "I got my 1st internship",
    },
]

app.get("/posts", (req, res) => { // INDEX route
    res.render("index.ejs", {posts});
});

// CREATE route
app.get("/posts/new", (req, res) => {
    res.render("new.ejs"); // renders form on posts/new route
    
});

app.post("/posts", (req, res) => { 
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts"); // redirects to all posts pg, sends get request to posts pg INDEX route
});


// SHOW route -> get specific post information according to their id

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    const post = posts.find((p) => p.id === id);
    if(post) {
        res.render("show.ejs", {post});
    } else {
        res.render("error.ejs");
    }

});

// UPDATE route -> to update specific data
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    const post = posts.find((p) => p.id === id);
    let {newContent} = req.body;
    post.content = newContent;
    res.redirect("/posts");

});
 // serving edit form to edit content
app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    const post = posts.find((p) => p.id === id);
    res.render("edit.ejs", {post});
});


// DELETE / DESTROY route -> to delete specific post 
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    const post = posts.find((p) => p.id === id);
    let idx = posts.indexOf(post);
    posts.splice(idx, 1); // to delete a post from an array
    res.redirect("/posts"); // redirect to all posts after deleting the post 
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});



