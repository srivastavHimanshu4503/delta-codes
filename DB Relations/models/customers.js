const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDbDemo");
}

main()
  .then((res) => console.log("DB Connection Successfully Established!"))
  .catch((err) => console.log(err));

const customerSchema = new mongoose.Schema({
    name: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String
        }
    ]
});

const Customer = mongoose.model("Customer", customerSchema);

async function addCustomer() {
    let customer1 = new Customer({
        name: "Rahul Kumar",
        addresses: [
            {
                location: "B34 Wall Street",
                city: "London"
            },
        ]
    });
    customer1.addresses.push({
        location: "P34 Brick Lane",
        city: "Sydney"
    });
    let result = await customer1.save();
    console.log(result);
};

addCustomer();