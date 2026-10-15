import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dhyan dein: Port 4000 use kiya hai ab backend ke liye
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setInputValue({ email: "", password: "", username: "" }); // Sirf success hone par clear karein
        setTimeout(() => {
          navigate("/"); // Ab yeh successfully redirect karega
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error(error);
      const errMsg = error.response?.data?.message || "Signup failed. Something went wrong.";
      handleError(errMsg);
    }
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={email} placeholder="Enter your email" onChange={handleOnChange} required />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={username} placeholder="Enter your username" onChange={handleOnChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} placeholder="Enter your password" onChange={handleOnChange} required />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
