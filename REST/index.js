const express = require("express");
const app = express();
const path = require("path");
const {v4 : uuidv4} = require("uuid");
const methodOverride = require("method-override");
const { connect } = require("http2");
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

app.use(methodOverride("_method"));

app.listen(port, ()=> {
    console.log(`App is listening at port ${port}`);
})

let posts = [
    {
        id : uuidv4(),
        username : "himanshuSrivastav",
        content : "Hardwork always pays off"
    }, 
    {
        id : uuidv4(),
        username : "ayushKumar",
        content : "I got my first internship at GSOC."
    }, 
    {
        id : uuidv4(),
        username : "apnacollege",
        content : "I love teaching students."
    }, 
];


app.get('/', (req, res) => {
    res.send("Server is working well!");
})

app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
})

app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
})

app.get('/posts/:id', (req, res) => {
    let {id} = req.params;
    if (id) {
        let post = posts.find(post => id == post.id);
        res.render("show.ejs", { post });
    } else {
        res.send("No account match");
    }
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => id === p.id);
    res.render("edit.ejs", { post });
})

app.patch("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => id === p.id);
    post.content = req.body.content;
    console.log(post);
    res.redirect("/posts");
})

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => id === p.id);
    posts = posts.filter(p => post != p)
    res.redirect("/posts");
})

app.post('/posts', (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
})
