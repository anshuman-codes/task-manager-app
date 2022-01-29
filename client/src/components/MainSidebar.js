import { Link } from "react-router-dom";
import { FiAlignJustify, FiX } from "react-icons/fi";

const MainSidebar = ({
  page,
  name,
  avatar,
  showSidebar,
  setShowSidebar,
  isMobileView,
}) => {
  const handleSignOut = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://notetask.herokuapp.com/users/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
    if (response.status === 200) {
      localStorage.removeItem("token");
      alert("SignOut Successful");
      window.location.href = "/";
    } else {
      alert("Unable to logout currently");
    }
  };
  const handleClick = () => {
    console.log("I am clicled");
    const val = showSidebar;
    console.log(val);
    setShowSidebar(!val);
  };

  return (
    <>
      {isMobileView && !showSidebar ? (
        <div></div>
      ) : (
        <aside className="main-sidebar">
          <div className="main-sidebar-content">
            <h2 className="logo-heading"> NoteTask </h2>
            <div className="sub-profile-section">
              <h2 className="main-welcome-title">Hi {name}</h2>
              <div className="image-div">
                <img src={avatar} alt="avatar" />
              </div>
            </div>
            <nav>
              <ul>
                <li className={`${page === "createTask" ? "active" : ""}`}>
                  <Link to="/createTask">Create Task</Link>
                </li>
                <li className={`${page === "viewTasks" ? "active" : ""}`}>
                  <Link to="/viewTasks">View Tasks</Link>
                </li>
              </ul>
            </nav>
            <div className="profile-section">
              <Link
                className={`profile-section-link ${
                  page === "viewProfile" ? "active" : ""
                }`}
                to="/viewProfile"
              >
                View your Profile
              </Link>
              <button
                className=" submit-btn sidebar-btn"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </aside>
      )}
      {showSidebar && isMobileView && (
        <div>
          <button className="hide-sidebar-btn" onClick={handleClick}>
            <FiX />
          </button>
        </div>
      )}
      {!showSidebar && isMobileView && (
        <div>
          <button className="show-sidebar-btn" onClick={handleClick}>
            <FiAlignJustify />
          </button>
        </div>
      )}
    </>
  );
};

export default MainSidebar;
