const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Form = new Schema({
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
});

module.exports = mongoose.model("Form", Form);
