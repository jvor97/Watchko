const express = require("express");
const formRoutes = express.Router();

let ContactForm = require("./form.model");

formRoutes.route("/add").post((req, res) => {
  console.log(req.body);
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

formRoutes.route("/").get(function(req, res) {
  ContactForm.find((err, forms) => {
    if (err) {
      console.log(err);
    } else {
      res.json(forms);
    }
  });
});


module.exports = formRoutes;
