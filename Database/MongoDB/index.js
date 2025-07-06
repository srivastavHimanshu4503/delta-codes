const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Chat = require("./models/chat.js");
const path = require("path");
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log("Server is listening at port: ", port);
});

main()
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => {
    console.log("Error - ", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/apnaCollege");
}

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to home to route");
});

// Index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

// New user creation route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, message, to } = req.body;
  let newChat = new Chat({
    from: from,
    message: message,
    to: to,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  console.log(chat);
  res.render("edit.ejs", { chat });
});

app.patch("/chats/:id", (req, res) => {
  let { id } = req.params;
  let { message: newMsg } = req.body;

  Chat.findByIdAndUpdate(
    id,
    { message: newMsg },
    { runValidators: true, new: true }
  )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/chats");
});

app.delete("/chats/:id", (req, res) => {
  let { id } = req.params;
  Chat.findByIdAndDelete(id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

// const userSchema = new mongo.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

// const User = mongo.model("User", userSchema);

// // const user1 = new User({
// //     name : "Adam",
// //     email : "abc@gmail.com",
// //     age : 21
// // });

// // user1.save().then(() => {
// //     console.log("User1 added to DB successfully");
// // }).catch((err) => {
// //     console.log("Error = ", err);
// // });

// // User
// //   .insertMany([
// //     { name: "Bob", email: "bob@gmail.com", age: 45 },
// //     { name: "Alice", email: "alice@gmail.com", age: 55 },
// //     { name: "Jan", email: "jan@gmail.com", age: 40 },
// //   ])
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((err) => console.log(err));

// User.findByIdAndUpdate(
//   "686a110cd1e0e35d028b561d",
//   { email: "adam@gmail.com" },
//   { new: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
