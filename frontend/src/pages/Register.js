import axios from "axios";
import { useState } from "react";
import busImage from "../assets/image_background.webp";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await axios.post("https://bus-ticket-booking-352x.onrender.com/api/users/register", {
      name,
      email,
      password
    });

    alert("Registered successfully");
    window.location.href = "/";
  };

  return (
    <div className="bg-wrapper">
      {/* BACKGROUND IMAGE */}
      <img src={busImage} alt="Bus Travel" />

      {/* REGISTER CARD (LEFT SIDE) */}
      <div
        className="login-card"
        style={{ left: "80px", right: "auto" }}  // move box to LEFT
      >
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <button onClick={register}>Register</button>

        <p>
          Already have an account? <a href="/">Back to Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
