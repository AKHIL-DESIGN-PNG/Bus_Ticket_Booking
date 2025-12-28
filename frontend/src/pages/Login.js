import axios from "axios";
import { useState } from "react";
import busImage from "../assets/bus.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/login", {
        email,
        password
      });
      window.location.href = "/buses";
    }
    catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="bg-wrapper">
      {/* BACKGROUND IMAGE */}
      <img src={busImage} alt="Bus Travel" />

      {/* LOGIN CARD */}
      <div className="login-card">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

        <p>
          New user? <a href="/register">Register</a>
        </p>

        <p>
          Admin? <a href="/admin/add-bus">Go to Admin</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
