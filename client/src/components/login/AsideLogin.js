const SideBar = () => {
  return (
    <aside className="sidebar">
      <h3>NoteTask</h3>
      <div className="welcome-msg-div">
        {/* <div className="welcome-msg"> */}
        <h2 className="sidebar-title">Hello, Friend!!</h2>
        <p className="sidebar-msg">
          Enter your personal details and start your journey with us.
        </p>
        <button className="submit-btn">SignUp</button>
        {/* </div> */}
      </div>
    </aside>
  );
};

export default SideBar;
