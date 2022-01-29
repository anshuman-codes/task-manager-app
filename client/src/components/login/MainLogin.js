import { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Mainbar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    window.location.href = "/createTask";
  }

  if (localStorage.getItem("token")) {
    setIsLoggedIn(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user is logged in");

    const response = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.token);
      alert("Login Successful");
      setIsLoggedIn(true);
    } else {
      alert("Please Check your email and password");
    }

    console.log(data);
  };

  return (
    <main className="mainbar">
      <h1 className="mainbar-title">NoteTask</h1>
      <h2 className="mainbar-subtitle">Welcome Back To NoteTask</h2>
      <p className="mainbar-msg">Please Use your email and password to login</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <MdEmail className="form-icon" />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <AiFillLock className="form-icon" />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
        <button
          type="button"
          className="submit-btn"
          onClick={() => {
            setEmail("guestAtNoteTask@gmail.com");
            setPassword("youareguest");
          }}
        >
          Login as Guest
        </button>
        <p className="mainbar-msg">
          In case you are a new user, please sign up.
        </p>
        <button type="submit" className="submit-btn hide-btn">
          Sign Up
        </button>
        <p className="dummy-element"></p>
      </form>
    </main>
  );
};

export default Mainbar;
