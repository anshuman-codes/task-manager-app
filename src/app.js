require("./db/mongoose.js");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

app.use(express.json()); // Automatically parses incoming JSON as an object for our use
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
