import { useParams } from "react-router-dom";

export default function Confirmation() {
  const { bookingId } = useParams();

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-3"> Booking Confirmed!</h2>

      <p>Your payment was successful.</p>
      <p><strong>Akhil Travels</strong></p>
      <p>Your ticket has been generated.</p>

      <a
        href={`https://bus-ticket-booking-352x.onrender.com/tickets/Ticket_${bookingId}.pdf`}
        className="btn btn-success mt-3"
        download
      >
        Download Ticket (PDF)
      </a>
    </div>
  );
}
