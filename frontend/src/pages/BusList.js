import axios from "axios";
import { useEffect, useState } from "react";

function BusList() {
  const [buses, setBuses] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/buses")
      .then((res) => setBuses(res.data));
  }, []);

  const filteredBuses = buses.filter(
    (bus) =>
      bus.source.toLowerCase().includes(from.toLowerCase()) &&
      bus.destination.toLowerCase().includes(to.toLowerCase())
  );

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">Akhil Travel</span>

          <div className="d-flex gap-2">
            <input
              className="form-control"
              placeholder="From"
              onChange={(e) => setFrom(e.target.value)}
            />
            <input
              className="form-control"
              placeholder="To"
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          <a href="/" className="btn btn-light ms-3">
            Logout
          </a>
        </div>
      </nav>

      {/* BUS LIST */}
      <div className="container mt-4">
        <h3 className="mb-3">Available Buses</h3>

        {filteredBuses.length === 0 && (
          <p className="text-muted">No buses found</p>
        )}

        {filteredBuses.map((bus) => (
          <div
            key={bus._id}
            className="card mb-3 shadow-sm"
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title mb-1">{bus.busName}</h5>
                <p className="mb-0">
                  {bus.source} → {bus.destination}
                </p>
              </div>

              <button
                className="btn btn-primary"
                onClick={() => {
                  localStorage.setItem("busId", bus._id);
                  window.location.href = "/seats";
                }}
              >
                Select Seats
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BusList;
