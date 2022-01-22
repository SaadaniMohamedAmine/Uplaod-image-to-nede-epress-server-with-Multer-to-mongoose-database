const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../models/user");

//multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

//test routing
router.get("/test", (req, res) => {
  res.json({ msg: "test message !!" });
});

router.post("/profile", upload.single("avatar"), (req, res) => {
  const user = new User({ ...req.body, image: req.file.path });
  User.findOne({ email: req.body.email }, (err, doc) => {
    if (err) throw err;
    if (doc) {
      res.send("The user exist !");
    } else {
      user
        .save()
        .then((doc) => {
          console.log({
            status: 200,
            data: doc,
          });
        })
        .catch((err) => console.log(err));
    }
  });
});

router.get("/users", (req, res) => {
  User.find({}, (err, doc) => {
    if (err) throw err;
    res.json(doc);
  });
});
module.exports = router;
