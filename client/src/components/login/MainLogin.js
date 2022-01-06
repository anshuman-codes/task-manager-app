import Icons from "../Icons";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Mainbar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user is looged in");
  };

  return (
    <main className="mainbar">
      <h1 className="mainbar-title">NoteTask</h1>
      <h2 className="mainbar-subtitle">Create Account</h2>
      <Icons />
      <p className="mainbar-msg">or use your email</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <FaUser className="form-icon" />
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
          <FaUser className="form-icon" />
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
        <a href="/" className="link">
          Forgot Your Passowrd?
        </a>
      </form>
    </main>
  );
};

export default Mainbar;
