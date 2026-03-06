import React, { useState, useEffect } from "react";

const dummyUsers = [
  { username: "user1@example.com", password: "password" },
  { username: "user2@example.com", password: "password" },
  { username: "user3@example.com", password: "password" },
  { username: "user4@example.com", password: "password" },
  { username: "user5@example.com", password: "password" },
  { username: "user6@example.com", password: "password" },
  { username: "user7@example.com", password: "password" },
  { username: "user8@example.com", password: "password" },
  { username: "user9@example.com", password: "password" },
  { username: "user10@example.com", password: "password" },
  { username: "user11@example.com", password: "password" },
  { username: "user12@example.com", password: "password" },
  { username: "user13@example.com", password: "password" },
  { username: "user14@example.com", password: "password" },
  { username: "user15@example.com", password: "password" },
  { username: "user16@example.com", password: "password" },
  { username: "user17@example.com", password: "password" },
  { username: "user18@example.com", password: "password" },
  { username: "user19@example.com", password: "password" },
  { username: "user20@example.com", password: "password" },
  { username: "user21@example.com", password: "password" },
  { username: "user22@example.com", password: "password" },
  { username: "user23@example.com", password: "password" },
  { username: "user24@example.com", password: "password" },
  { username: "user25@example.com", password: "password" },
  { username: "user26@example.com", password: "password" },
  { username: "user27@example.com", password: "password" },
  { username: "user28@example.com", password: "password" },
  { username: "user29@example.com", password: "password" },
  { username: "user30@example.com", password: "password" },
  { username: "user31@example.com", password: "password" },
  { username: "user32@example.com", password: "password" },
  { username: "user33@example.com", password: "password" },
  { username: "user34@example.com", password: "password" },
  { username: "user35@example.com", password: "password" },
  { username: "user36@example.com", password: "password" },
  { username: "user37@example.com", password: "password" },
  { username: "user38@example.com", password: "password" },
  { username: "user39@example.com", password: "password" },
  { username: "user40@example.com", password: "password" },
  { username: "user41@example.com", password: "password" },
  { username: "user42@example.com", password: "password" },
  { username: "user43@example.com", password: "password" },
  { username: "user44@example.com", password: "password" },
  { username: "user45@example.com", password: "password" },
  { username: "user46@example.com", password: "password" },
  { username: "user47@example.com", password: "password" },
  { username: "user48@example.com", password: "password" },
  { username: "user49@example.com", password: "password" },
  { username: "user50@example.com", password: "password" },
  { username: "user51@example.com", password: "password" },
  { username: "user52@example.com", password: "password" },
  { username: "user53@example.com", password: "password" },
  { username: "user54@example.com", password: "password" },
  { username: "user55@example.com", password: "password" },
  { username: "user56@example.com", password: "password" },
  { username: "user57@example.com", password: "password" },
  { username: "user58@example.com", password: "password" },
  { username: "user59@example.com", password: "password" },
  { username: "user60@example.com", password: "password" }
];

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem('pageName', 'Login Page');
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = dummyUsers.find(
      (u) => u.username === email && u.password === password
    );
    if (user) {
      localStorage.setItem("loggedInUser", user.username);
      window.location.href = "/"; // Redirect to home page
    } else {
      setError("Invalid username or password");
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5"
  };

  const formStyle = {
    maxWidth: "400px",
    width: "100%",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white"
  };

  const formGroupStyle = {
    marginBottom: "15px"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px"
  };

  const inputStyle:React.CSSProperties = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  const linksStyle:React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Username:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        <div style={linksStyle}>
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
