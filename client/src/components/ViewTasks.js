import { useState, useMemo, useEffect } from "react";
import MainSidebar from "./MainSidebar";
import Pagination from "./Pagination";
import TaskItem from "./TaskItem";

let PageSize = 5;

const ViewTasks = () => {
  const [taskData, setTaskData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 600);
  const [isLoading, setIsLoading] = useState(true);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");

  const getAvatar = async (id) => {
    const url = `https://notetask.herokuapp.com/users/${id}/avatar`;

    const response = await fetch(url);
    if (response.status === 200) {
      setAvatar(url);
    } else if (response.status === 404) {
      setAvatar(
        "data:image/png;base64,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"
      );
    }
  };

  const getUserData = async () => {
    const url1 = "https://notetask.herokuapp.com/users/me";
    const response = await fetch(url1, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    if (data) {
      setName(data.name);
      getAvatar(data._id);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  });

  const getDataFromAPI = async () => {
    const response = await fetch("https://notetask.herokuapp.com/tasks", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data) {
      setTaskData(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const updateIsMobile = () => {
    const width = window.innerWidth;
    setIsMobileView(width < 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  });

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return taskData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, taskData]);

  const deleteItem = async (id) => {
    const url = `https://notetask.herokuapp.com/tasks/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    if (response.status === 200) {
      const newData = taskData.filter((task) => {
        return task._id !== id;
      });
      return setTaskData(newData);
    }
    return alert("Can't connect to server");
  };

  if (isLoading) return <h2>Loading ...</h2>;

  return (
    <div className="stage-area flex-box">
      <MainSidebar
        page={"viewTasks"}
        name={name.split(" ")[0]}
        avatar={avatar}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        isMobileView={isMobileView}
      />
      {isMobileView && showSidebar ? (
        ""
      ) : (
        <div className="viewTasks-menu">
          <h1 className="viewTasks-title">Your Tasks List</h1>
          <Pagination
            currentPage={currentPage}
            totalCount={taskData.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
          {currentTableData.map((item) => {
            return (
              <TaskItem key={item._id} {...item} deleteTask={deleteItem} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ViewTasks;
