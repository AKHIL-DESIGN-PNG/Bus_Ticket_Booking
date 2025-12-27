import axios from "axios";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bookings/all")
      .then(res => setBookings(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      {bookings.map((b, index) => (
        <div key={index}>
          <p>Bus ID: {b.busId}</p>
          <p>Seats: {b.seats.join(", ")}</p>
          <p>Status: {b.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
