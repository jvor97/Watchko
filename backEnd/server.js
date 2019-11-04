const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
const formRoutes = require("./formRoute");

// const formRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

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

app.use("/about", formRoutes);

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});
