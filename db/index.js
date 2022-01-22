const mongoose = require("mongoose");

const url =
  "mongodb+srv://Saadani-Mohamed-Amine:salmasalma@test2.aixty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connection = () => {
  mongoose.connect(url, (err) => {
    if (err) throw err;
    console.log(`Server is connected to database !!`);
  });
};

module.exports = connection;
