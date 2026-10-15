import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        { email, password },
        { withCredentials: true }
      );

      const { success, message, token } = response.data;

      if (success && token) {
        // 🌟 Save the token to localStorage instantly bypassing cookie bugs
        localStorage.setItem("authToken", token);

        setInputValue({ email: "", password: "" });

        // Instant hard-redirection to the home page
        navigate("/");
      } else {
        handleError(message || "Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      handleError("Something went wrong during login.");
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={email} placeholder="Enter your email" onChange={handleOnChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} placeholder="Enter your password" onChange={handleOnChange} required />
        </div>
        <button type="submit">Submit</button>
        <span>Don't have an account? <Link to={"/signup"}>Signup</Link></span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
