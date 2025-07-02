// nodemon to run the file

const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

// let catFactUrl = "https://catfact.ninja/fact";
// let dogUrl = "https://dog.ceo/api/breeds/image/random";

// async function getCatFact() {
//     try {
//         let req = await fetch(catFactUrl);
//         let res = await req.json();
//         return res;
//     } catch (err) {
//         console.log("Error = ", err);
//         return "No fact found";
//     }
// }

// async function getDogImg() {
//   try {
//     let req = await fetch(dogUrl);
//     let res = await req.json();
//     return res.message;
//   } catch (err) {
//     console.log("Error - ", err);
//     return "";
//   }
// }

// app.use(async (req, res) => {
//     console.log("Anytype of request received");
//     let data = await getCatFact();
//     res.send(data);
// })

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { diceValue });
});

app.get("/ig/:username", async (req, res) => {
  let instData = require("./data.json");
  let { username } = req.params;
  let data = instData[username];
  if (data) {
    res.render("ig.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  try {
    let { username : name, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${name}!</h1>`;
    res.send(htmlStr);
  } catch (err) {
    console.log("Error : ", err);
    res.send("Data not found");
  }
});

app.get("/search", (req, res) => {
  console.log(req.query);
  let { q } = req.query;
  if (!q) {
    res.send("<h1>Nothing searched</h1>");
  }
  res.send(`<h1>Search results for query: ${q}</h1>`);
});

app.get('/action', (req, res) => {
    let {user, gender, country, feedback, subscribe} = req.query;
    let str = `
        Hello <b>${user}</b> of gender ${gender=='M'?'male':'female'}<br>Welcome to ${country} <br> we heard about your feeback which states ${feedback} and you have subscribed our content ${subscribe=='on'?'Yes':'No'}.
    `;
    if (subscribe) {
        res.send(`Standard GET request. <br>${str}`);
    }
    else {
        res.send(`Standard GET request. <br>${str}`);
    }
})

app.post('/feedback', (req, res) => {
    let {user, email, feedback, rating} = req.body;
    let s = `Hello user ${user} having email ${email}, we get your feedback ${feedback} and your rating ${rating}`;
    res.send(`Standard POST request. <br> ${s}`);

})

// app.get('/*path', (req, res) => {
//     res.send("Path does not exist");
// })
