const mongoose = require("mongoose");

main()
  .then((result) => {
    console.log("Connection Successfully Established.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDbDemo");
}

let authorSchema = mongoose.Schema({
    username: String,
    email: String
});

let postSchema = mongoose.Schema({
    title: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }
});

const Author = mongoose.model("Author", authorSchema);
const Post = mongoose.model("Post", postSchema);

// async function insertData() {
//     let author = await Author.findById("6872db10c5bb4b82e13859fe");

//     let post = await Post.create({
//         title: "Mongo Relation",
//         content: "This is one of the one to many mongo relation example where cardinality of many is greater than few 1000s.",
//         author: author._id
//     });
// };

// insertData();

async function showPost() {
    let populatedpost = await Post.findById("6872dbc009e6118fd20cc51e").populate("author", "username");
    console.log(populatedpost);
}

showPost();