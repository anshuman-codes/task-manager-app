import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { RiEditCircleFill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

const TaskItem = ({ description, completed, createdAt, _id, deleteTask }) => {
  const dateObj = new Date(createdAt);
  const date = dateObj.toISOString().split("T")[0];
  const time = formatAMPM(dateObj);
  const [readMore, setReadMore] = useState();

  return (
    <article className="task-item">
      <div className="task-item-content-area">
        <div className="task-item-date-box">
          <p className="task-item-date-box-label">Date: {date}</p>
          <p className="task-item-date-box-label">Time: {time}</p>
        </div>
        <div className="task-item-completed-box">
          {completed ? (
            <div className="task-item-completed task-item-label flex">
              <IoCheckmarkDoneCircle />
              <p>task completed</p>
            </div>
          ) : (
            <div className="task-item-not-completed task-item-label">
              <IoCloseCircle />
              <p>task incomplete</p>
            </div>
          )}
        </div>
        <div className="task-item-description">
          <h3>Description:</h3>
          <p className="task-item-description-box task-item-date-box-label">
            {description.length < 150
              ? description
              : readMore
              ? `${description}...`
              : `${description.substring(0, 150)}...`}
            {description.length < 150 ? (
              ""
            ) : (
              <button
                className="read-more-btn"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                {readMore ? "read less" : "read more"}
              </button>
            )}
          </p>
        </div>
      </div>
      <div className="task-item-functionality-area">
        <div className="task-item-function">
          <p className="d-inline-block task-function-green">
            <RiEditCircleFill />
            <Link className="task-function-link" to={`/editTask/${_id}`}>
              Edit task
            </Link>
          </p>
        </div>
        <div className="task-item-function">
          <p
            className="d-inline-block task-function-red"
            onClick={() => {
              console.log(_id);
              deleteTask(_id);
            }}
          >
            <MdDeleteSweep />
            Delete task
          </p>
        </div>
      </div>
    </article>
  );
};

export default TaskItem;
