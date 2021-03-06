const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ContactForm = new Schema(
  {
    form_name: {
      type: String
    },
    form_email: {
      type: String
    },
    form_textarea: {
      type: String
    },
    form_select: {
      type: String
    }
  },
  {
    collection: "forms"
  }
);

module.exports = mongoose.model("ContacForm", ContactForm);
