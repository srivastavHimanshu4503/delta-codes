const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const { threadCpuUsage } = require("process");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

let port = 8080;

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_students",
  password: "@dataBase_Capture777",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.listen(port, () => {
  console.log("Server is running at the port: ", port);
});

app.get("/", (req, res) => {
  let q = "Select count(*) From user";
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
    res.send("Some error in DB");
  }
});

app.get("/users", (req, res) => {
  let q = "Select * From user";
  try {
    connection.query(q, (error, users) => {
      if (error) throw error;
      res.render("show.ejs", { users });
    });
  } catch (error) {
    console.log(error);
    res.send("Some error in DB");
  }
});

app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  res.render("edit.ejs", { id });
});

app.get("/users/:id/delete", (req, res) => {
  let { id } = req.params;
  res.render("delete.ejs", { id });
});

app.get('/users/new', (req, res) => {
  res.render("new.ejs");
});

app.post("/users", (req, res) => {
  let {username, email, password} = req.body;
  let id = faker.string.uuid();
  let addQuery = `Insert Into user Values (?, ?, ?, ?)`;
  let user = [id, username, email, password];
  try {
    connection.query(addQuery, user, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.redirect("/users");
    });
  } catch (err) {
    console.log(err);
    res.send("Some issues in DB");
  }
});

app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  try {
    let q = `Select * From user Where id = '${id}'`;
    connection.query(q, (err, result) => {
      if (err) throw err;

      let user = result[0];
      let {username : newUsername, email, password} = req.body;
      
      if (user.email == email && user.password == password) {
        let updateQuery =  `Update user Set username = '${newUsername}' Where id = '${id}'`;
        connection.query(updateQuery, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.redirect('/users');
        });
      } else {
        res.send("Wrong email-id/password");
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Issue in database");
  }
});

app.delete("/users/:id", (req, res) => {
  let { id } = req.params;
  let deleteQuery = `Delete From user Where id = '${id}'`;
  try {
    connection.query(deleteQuery, (err, result) => {
      if (err) throw err;
      console.log("User is successfully deleted!");
      res.redirect("/users");
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

// Inserting single row
// let q = `Insert Into user
// (id, username, email, password)
// VALUES (?, ?, ?, ?)`;
// let user = ["123", "123_abc", "abc@gmail.com", "abc"];
// connection.query(q, user, ...same)

// multiple rows
// let query = `Insert Into user
// (id, username, email, password)
// VALUES ?`;
// let users = [
//   ["123b", "123_abcb", "abc@gmail.comb", "abcb"],
//   ["123c", "123_abcc", "abc@gmail.comc", "abcc"]
// ];

// let data = [];
// for(let i=1; i<=100; i++) {
//   data.push(getRandomUser());
// }
// try {
//     connection.query(query, [data], (err, res) => {
//         if (err) throw err;
//         console.log(res);
//     });
// } catch (err) {
//     console.log(err);
// }

// connection.end();

// console.log(getRandomUser());
