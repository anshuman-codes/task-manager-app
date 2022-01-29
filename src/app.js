require("./db/mongoose.js");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = reuuire("path");

const app = express();

app.use(cors());
app.use(express.json()); // Automatically parses incoming JSON as an object for our use
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

app.use(userRouter);
app.use(taskRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

module.exports = app;
