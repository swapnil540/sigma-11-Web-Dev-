// Server file
const express = require("express");
const app = express();
const path = require("path");
const {v4: uuidv4} = require("uuid");
const methodOverride = require("method-override");


const port = 5000;

app.use(methodOverride('_method')); // to override html form methods

app.use(express.urlencoded({extended: true})); // parsing data comes from frontend so that express can understand it.

app.set("view engine", "ejs"); // setting view layout to ejs
app.set("views", path.join(__dirname, "/views")); // to access ejs temmplates, no matter from which directory server is started

app.use(express.static(path.join(__dirname, "/public"))); // to serve static files

app.use

let twits = [
    {
        id: uuidv4(),
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsl30NZOYSvadkIZapNhB0-55lw3doTcj-TrFjx_Z7Q&s=10",
        username: "Michal",
        content: "Tech is evolving rapidly.",
    },
    {
        id: uuidv4(),
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_CRV5fn8Wk0lnMGFKWdkpbJfyZtfGCwANt0bakoD_Q&s=10",
        username: "Adam",
        content: "If a person has ugly thoughts, it begins to show on the face... you can hardly bear to look at it.",
    },
    {
        id: uuidv4(),
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DE56uDeFzguUvDNNaALGuIzeiezj25Rxsl-IZEpC0Q&s=10",
        username: "Tom",
        content: "A person who has good thoughts cannot ever be ugly... you will always look lovely.",
    },
];

app.get("/", (req, res) => {
    res.redirect("/twits");
});

// all twits route

app.get("/twits", (req, res) => {
    // res.send("get request reecieved, working well");
    res.render("index.ejs", {twits});
});


// create new twit
app.get("/twits/new", (req, res) => { // give form to create new twits
    res.render("new.ejs");
});

app.post("/twits", (req, res) => {
    let {img , username, content} = req.body;
    let id = uuidv4();
    twits.push({id, img, username, content});
    res.redirect("/twits");
});

// View in Detail
app.get("/twits/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let twit = twits.find((t) => t.id === id);
    console.log(twit);
    res.render("show.ejs", {twit});
});

// UPDATE route

app.patch("/twits/:id", (req, res) => {
    let {id} = req.params;
    let twit = twits.find((t) => t.id === id);
    let {newContent} = req.body;
    twit.content = newContent;
    res.redirect("/twits");
    

});

app.get("/twits/:id/edit", (req, res) => {
    let {id} = req.params;
    let twit = twits.find((t) => t.id === id);
    res.render("edit.ejs", {twit});
});

// Delete/ Destroy route

app.delete("/twits/:id", (req, res) => {
    let {id} = req.params;
    let twit = twits.find((t) => t.id === id);
    let idx = twits.indexOf(twit);
    twits.splice(idx, 1);
    res.redirect("/twits");


});


app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
