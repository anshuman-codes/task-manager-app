import Icons from "../Icons";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Mainbar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log("User is being signed in");
  };

  return (
    <main className="mainbar">
      <h1 className="mainbar-title">NoteTask</h1>
      <h2 className="mainbar-subtitle">Create Account</h2>
      <Icons />
      <p className="mainbar-msg">or you can use your email for registration</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <FaUser className="form-icon" />
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
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
            type="number"
            placeholder="Age"
            className="form-input"
            value={age}
            onChange={(e) => {
              setAge(parseInt(e.target.value));
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
          SignUp
        </button>
      </form>
    </main>
  );
};

export default Mainbar;
