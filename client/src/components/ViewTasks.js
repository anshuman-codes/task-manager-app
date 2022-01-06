import { useState, useMemo } from "react";
import MainSidebar from "./MainSidebar";
import Pagination from "./Pagination";
import data from "../data";
import TaskItem from "./TaskItem";

let PageSize = 5;

const ViewTasks = () => {
  const [taskData, setTaskData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return taskData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, taskData]);

  const deleteItem = (id) => {
    const newData = taskData.filter((task) => {
      return task._id !== id;
    });
    setTaskData(newData);
  };

  return (
    <div className="stage-area flex-box">
      <MainSidebar page={"viewTasks"} />
      <div className="viewTasks-menu">
        <h1 className="viewTasks-title">Your Tasks List</h1>
        <Pagination
          currentPage={currentPage}
          totalCount={taskData.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
        {currentTableData.map((item, index) => {
          return <TaskItem key={item.id} {...item} deleteTask={deleteItem} />;
        })}
      </div>
    </div>
  );
};

export default ViewTasks;
