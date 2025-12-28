import axios from "axios";
import { useState } from "react";
import busImage from "../assets/admin.webp";

function AdminAddBus() {
  const [busName, setBusName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [totalSeats, setTotalSeats] = useState("");

  const addBus = async () => {
    await axios.post("http://localhost:5000/api/admin/add-bus", {
      busName,
      source,
      destination,
      totalSeats
    });

    alert("Bus added successfully");

    setBusName("");
    setSource("");
    setDestination("");
    setTotalSeats("");
  };

  return (
    <div className="bg-wrapper">
      {/* BACKGROUND IMAGE */}
      <img src={busImage} alt="Bus Travel" />

      {/* ADMIN CARD (LEFT SIDE) */}
      <div
        className="login-card"
        style={{ left: "80px", right: "auto" }}
      >
        <h2>Admin – Add Bus</h2>

        <input
          type="text"
          placeholder="Bus Name"
          value={busName}
          onChange={(e) => setBusName(e.target.value)}
        />

        <input
          type="text"
          placeholder="From"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <input
          type="text"
          placeholder="To"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <input
          type="number"
          placeholder="Total Seats"
          value={totalSeats}
          onChange={(e) => setTotalSeats(e.target.value)}
        />

        <button onClick={addBus}>Add Bus</button>

        <p>
          <a href="/admin/dashboard">View Bookings</a>
        </p>

        <p>
          <a href="/">Logout</a>
        </p>
      </div>
    </div>
  );
}

export default AdminAddBus;
