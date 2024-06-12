import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState('');

  const [passwordHash, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = (token, firstName, lastName, phone,id) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", email);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("phone", phone);
    localStorage.setItem("User_id", id);
    setIsLoggedIn(true);
    console.log("user_id:", localStorage.getItem("User_id"));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/api/customers/login', { email, passwordHash });
      console.log(response.data);
      handleLogin(response.data.token, response.data.customer.firstName, response.data.customer.lastName, response.data.customer.phone, response.data.customer.id);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Email hoặc password không đúng");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" state={{ email: email }} />;
  }

  return (
    <>
      <section className="section-conten padding-y" style={{ minHeight: "84vh" }}>
        <div className="card mx-auto" style={{ maxWidth: 380, marginTop: 100 }}>
          <div className="card-body">
            <h4 className="card-title mb-4">Sign in</h4>
            <form onSubmit={handleSubmit}>
              <a href="#" className="btn btn-facebook btn-block mb-2">
                <i className="fab fa-facebook-f" /> &nbsp; Sign in with Facebook
              </a>
              <a href="#" className="btn btn-google btn-block mb-4">
                <i className="fab fa-google" /> &nbsp; Sign in with Google
              </a>
              <div className="form-group">
                <input
                  name=""
                  className="form-control"
                  placeholder="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name=""
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  value={passwordHash}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <a href="#" className="float-right">
                  Forgot password?
                </a>
                <label className="float-left custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked=""
                  />
                  <div className="custom-control-label"> Remember </div>
                </label>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/dang-ky">Sign up</Link>
        </p>
      </section>
    </>
  );
}

export default Login;