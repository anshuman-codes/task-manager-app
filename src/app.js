require("./db/mongoose.js");
const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const cors = require("cors");

const app = express();

app.use(express.json()); // Automatically parses incoming JSON as an object for our use
app.use(cors());
app.options("*", cors());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
