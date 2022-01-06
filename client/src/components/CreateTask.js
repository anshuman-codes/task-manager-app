import MainSidebar from "./MainSidebar";
import { useState } from "react";

const CreateTask = () => {
  const [completed, setCompleted] = useState(false);
  const [taskMessage, setTaskMessage] = useState("Enter Description");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form is submitted");
  };

  return (
    <div className="stage-area flex-box">
      <MainSidebar page={"createTask"} />
      <div className="create-task-bar">
        <h1 className="viewTasks-title">Create Your Task</h1>
        <p className="create-task-descrip">
          Please enter the following details to create your task. You can View
          your tasks in the "View Tasks" Menu.
        </p>
        <form className="create-task-form" onSubmit={handleSubmit}>
          <div className="create-task-status">
            <span>Task Completed:</span>
            <span className="create-task-slider-text">No</span>
            <label class="switch">
              <input
                type="checkbox"
                value={completed}
                onChange={(e) => {
                  const val = e.target.value;
                  const boolVal = val === "false" ? false : true;
                  console.log("val is", val);
                  console.log("!val is", !boolVal);
                  setCompleted(!boolVal);
                }}
              />
              <span class="slider round"></span>
            </label>
            <span className="create-task-slider-text"> Yes</span>
          </div>
          <textarea
            rows="10"
            columns="30"
            value={taskMessage}
            onChange={(e) => {
              setTaskMessage(e.target.value);
            }}
          />

          <button type="submit" className="submit-btn">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
