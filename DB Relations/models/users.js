const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDbDemo");
};

main()
  .then((res) => console.log("DB Connection Successfully Established!"))
  .catch((err) => console.log(err));

const orderSchema =  new mongoose.Schema({
    item: String,
    price: Number
});

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

const User = mongoose.model("User", userSchema);
const Order = mongoose.model("Order", orderSchema);

// async function addItem() {
//     let order1 = new Order({
//         item: "Boat Smart Watch",
//         price: 1500
//     });

//     let user = await User.findById("6872d37332ed893887ac1e30");
    
//     let order = await order1.save();
//     user.orders.push(order);
//     let result = await user.save();
//     console.log(result);
// };

// addItem();

async function getUser() {
    let user = await User.findById("6872d37332ed893887ac1e30").populate("orders");
    console.log(user);
}

getUser();