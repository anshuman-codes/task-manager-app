const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");
const router = new express.Router();
const path = require("path");

router.post("/tasks", auth, async (req, res) => {
  //const task= new Task(req.body)
  const task = new Task({
    ...req.body, // ... is ES6 spread operator,
    //it copies all the preoperties of req.body into this object
    owner: req.user._id,
  });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET /tasks?completed=true
// GET /tasks?limit=10&skip=10
// GET /tasks?sortBy=createdAt:desc

router.get("/tasks", auth, async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.completed) {
    match.completed = req.query.completed === "true" ? true : false;
  }

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":"); // split returns an array
    sort[parts[0]] = parts[1] == "desc" ? -1 : 1;
  }

  try {
    await req.user
      .populate({
        path: "tasks",
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort,
        },
      })
      .execPopulate();
    const tasks = req.user.tasks;
    res.send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    //const task= await Task.findById(_id)

    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const Allupdates = ["description", "completed"];
  const isValidOperation = updates.every((update) => {
    return Allupdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ Error: "Selct only the available fields" });
  }

  const _id = req.params.id;
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    //const task= await Task.findById(_id)
    if (!task) {
      return res.status(404).send();
    }
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    //const task= await Task.findByIdAndUpdate(_id,req.body,{ new: true, runValidators: true})

    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    //const task = await Task.findByIdAndDelete(req.params.id)
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      res.status(404).send();
    }
    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
});
router.get("/*", (req, res) => {
  console.log("I am here");
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});
module.exports = router;
