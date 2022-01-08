require("./db/mongoose.js");
const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://notetask-app.herokuapp.com/",
  })
);
app.use(express.json()); // Automatically parses incoming JSON as an object for our use
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
