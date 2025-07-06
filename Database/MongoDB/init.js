const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/apnaCollege");
}

let chatSchema = new mongoose.Schema({
  from: {
    type: String,
    requred: true,
  },
  to: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    maxLength: 50,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

let allChats = [
  {
    from: "Alice Johnson",
    to: "Bob Smith",
    message: "Hey Bob, are we still on for lunch?",
    created_at: new Date("2025-07-06T10:15:00Z"),
  },
  {
    from: "John Doe",
    to: "Jane Doe",
    message: "Can you review the document I sent?",
    created_at: new Date("2025-07-06T09:45:00Z"),
  },
  {
    from: "Mark Spencer",
    to: "Development Team",
    message: "Daily stand-up meeting in 10 mins.",
    created_at: new Date("2025-07-06T08:55:00Z"),
  },
  {
    from: "Support Team",
    to: "Alex Reed",
    message: "Your ticket has been resolved.",
    created_at: new Date("2025-07-05T22:40:00Z"),
  },
  {
    from: "Mrs. Thompson",
    to: "Emily Clark",
    message: "Assignment is due tomorrow by 5pm.",
    created_at: new Date("2025-07-05T18:30:00Z"),
  },
  {
    from: "Jessica Lee",
    to: "Paul Green",
    message: "I'm running late, be there soon.",
    created_at: new Date("2025-07-05T17:15:00Z"),
  },
  {
    from: "Store Notifications",
    to: "David Miller",
    message: "Your order #12345 has shipped.",
    created_at: new Date("2025-07-05T15:20:00Z"),
  },
  {
    from: "Forum Admin",
    to: "Natalie Brooks",
    message: "Welcome to the community!",
    created_at: new Date("2025-07-05T14:00:00Z"),
  },
  {
    from: "Laura Chen",
    to: "Project Team",
    message: "Please update your task status.",
    created_at: new Date("2025-07-05T12:50:00Z"),
  },
  {
    from: "App Notifications",
    to: "Michael Scott",
    message: "You have a new friend request.",
    created_at: new Date("2025-07-05T11:30:00Z"),
  },
];

Chat.insertMany(allChats)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
