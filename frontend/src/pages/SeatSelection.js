import axios from "axios";
import { useEffect, useState } from "react";

function SeatSelection() {
  const [bus, setBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/admin/bus/${localStorage.getItem("busId")}`)
      .then((res) => setBus(res.data));
  }, []);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const proceed = () => {
    axios.post("http://localhost:5000/api/bookings/book", {
      userId: "123",
      busId: bus._id,
      seats: selectedSeats
    });
    window.location.href = "/payment";
  };

  if (!bus) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body text-center">
          <h3 className="mb-3">Select Seats</h3>

          {/* SEAT GRID */}
          <div className="seat-container">
            {Array.from({ length: bus.totalSeats }, (_, i) => i + 1).map(
              (seat) => {
                const isBooked = !bus.availableSeats.includes(seat);
                const isSelected = selectedSeats.includes(seat);

                return (
                  <div
                    key={seat}
                    className={`seat ${
                      isBooked
                        ? "booked"
                        : isSelected
                        ? "selected"
                        : "available"
                    }`}
                    onClick={() =>
                      !isBooked && toggleSeat(seat)
                    }
                  >
                    {seat}
                  </div>
                );
              }
            )}
          </div>

          <p className="mt-3">
            <strong>Selected Seats:</strong>{" "}
            {selectedSeats.join(", ") || "None"}
          </p>

          <button
            className="btn btn-primary mt-2"
            disabled={selectedSeats.length === 0}
            onClick={proceed}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeatSelection;
