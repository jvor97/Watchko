const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

const formRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/todos", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database established successfully.");
});

// formRouter.route('/').get((req,res) => {
//     FormData.find(function (err,forms) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(forms)
//         }
//     });
// });

let ContactForm = require("./form.model");

formRoutes.route("/add").post((req, res) => {
  let form = new ContactForm(req.body);
  form
    .save()
    .then(form => {
      res.status(200).json({ form: "form is added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to DB");
    });
});

app.use("/about", formRoutes);

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});
