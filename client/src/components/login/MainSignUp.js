import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const Mainbar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    window.location.href = "/createTask";
  }

  if (localStorage.getItem("token")) {
    setIsLoggedIn(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://notetask.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        age,
      }),
    });
    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.token);
      if (avatar) {
        const avatarData = new FormData();
        avatarData.append("avatar", avatar);
        const response1 = await fetch(
          "https://notetask.herokuapp.com/users/me/avatar",
          {
            method: "POST",
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
            body: avatarData,
          }
        );
        console.log(response1);
        const data1 = await response1.json();
        console.log(data1);
      }
      alert("Registration Successful");
      setIsLoggedIn(true);
    } else {
      alert("Please Check your email and password");
    }
    console.log("user is created");
  };

  return (
    <main className="mainbar">
      <h1 className="mainbar-title">NoteTask</h1>
      <h2 className="mainbar-subtitle">Create Your Account</h2>
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
          <IoMdPersonAdd className="form-icon" />
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
        <div className="form-avatar-row text-center">
          <label htmlFor="avatar" className="avatar-label">
            {`${avatar ? avatar.name : "Your Profile Photo"}`}
          </label>
          <input
            id="avatar"
            className="avatar-input"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              setAvatar(file);
            }}
          />
        </div>
        <button type="submit" className="submit-btn">
          SignUp
        </button>
        <p className="mainbar-msg">
          In case you already signed up, please login.
        </p>
        <button type="submit" className="submit-btn hide-btn">
          <Link className="sidebar-btn-link" to="/">
            Login
          </Link>
        </button>
      </form>
    </main>
  );
};

export default Mainbar;
