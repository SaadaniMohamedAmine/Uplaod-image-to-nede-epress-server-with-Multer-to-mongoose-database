const express = require("express");
const port = 3002;
// const multer = require("multer");
// const ejs = require("ejs");
const connection = require("./db");

//init application
const app = express();

//database
connection();

//ejs setup
// app.set("view engine", "ejs");

//middleware
app.use(express.json({ limit: "1mb" }));
app.use(express.static("./public"));

//routes
app.use("/", require("./routes"));
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is listening on port ${port}`);
});
