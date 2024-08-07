// create the server
const express = require("express");
const errorhandler = require("./middleware/error-middleware.js");
const app = express();
// reqire dotenv to use .env file variables
require("dotenv").config();
// import color library to style terminal
require(`colors`);
// convert thedata into json format
// always write this before apie
app.use(express.json());

//for encode the data
app.use(express.urlencoded({ extended: false }));
// run error handler function/middlewave
app.use(errorhandler);

// apies for user
app.use("/api/user/", require("./routes/userRoutes.js"));
app.listen(3001, () => console.log(`server started sucessfullf in PORT 3001`));
