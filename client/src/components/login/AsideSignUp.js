import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <aside className="sidebar">
      <h3>NoteTask</h3>
      <div className="welcome-msg-div">
        <h2 className="sidebar-title">Welcome Back</h2>
        <p className="sidebar-msg">
          To keep connected with us, login with your personal info
        </p>
        <button className="submit-btn">
          <Link className="sidebar-btn-link" to="/">
            Login
          </Link>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
