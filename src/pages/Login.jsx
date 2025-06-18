//  Login page component for user authentication

// Importing necessary css files and libraries
import "../CSSfiles/LogSign.css";
import "../CSSfiles/ThemeBased.css";
import "react-toastify/dist/ReactToastify.css";

// Importing React hooks and libraries for navigation and notifications
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Login() {
  const [email, setEmail] = useState("");                  // State to hold email input
  const [password, setPassword] = useState("");            // State to hold password input
  const navigate = useNavigate();                          // Hook to programmatically navigate between routes

  const details = {                                        // Object to hold user details
    bio: "",
    dob: "",
    gender: "",
  };

  const handleSubmit = (e) => {                                          // Function to handle form submission
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    e.preventDefault();                                                 // Prevent default form submission behavior
    if (email && password) {
      if (user) {
        toast.success("Logged in!");
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        if (user.details === details) {
          navigate("/editprofile");
        } else {
          navigate("/dashboard");
        }
      } else {
        toast.error("Invalid credentials");
      }
    } else {
      toast.error("Please enter all fields");
    }
  };

  return (
    <div className="login">
      <div className="loginbox">
        <div className="loginlogo"></div>
        <div className="welcome"></div>
        <form className="loginform" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="loginbtn"></button>
        </form>
        <div className="loginfooter">
          <p className="signup-link">
            Don't have an account?{" "}
            <Link                                                         // Link component from react-router-dom to navigate to the signup page
              to={"/signup"}
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Sign Up
            </Link>{" "}                                                 
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
