import axios from "axios";

function Payment() {

  const payNow = async () => {
    try {
      // Create order from backend
      const orderResponse = await axios.post(
        "http://localhost:5000/api/bookings/create-order",
        { amount: 500 }
      );

      const options = {
        key: "rzp_test_RweEg8shZn2Tm9", // Razorpay TEST Key ID
        amount: orderResponse.data.amount,
        currency: "INR",
        name: "Akhil Travel",
        description: "Bus Ticket Booking",
        order_id: orderResponse.data.id,

        //  Handle payment success
        handler: async function (response) {
          try {
            //  Verify payment on backend
            const verifyResponse = await axios.post(
              "https://bus-ticket-booking-352x.onrender.com/api/bookings/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,

                // Ticket / booking details
                userName: "Akhil",
                busName: "Akhil Travels",
                from: "Tirupati",
                to: "Bangalore",
                seats: ["A1", "A2"],
                amount: 500
              }
            );

            // Redirect to confirmation page
            if (verifyResponse.data.success) {
              alert("Payment Successful");
              window.location.href = `/confirmation/${verifyResponse.data.bookingId}`;
            } else {
              alert("Payment verification failed");
            }

          } catch (error) {
            console.error("Verification error:", error);
            alert("Error verifying payment");
          }
        },

        prefill: {
          name: "Akhil",
          email: "akhil@test.com",
          contact: "9398707229"
        },

        theme: {
          color: "#0d6efd"
        }
      };

      // Open Razorpay popup
      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error("Order creation failed:", error);
      alert("Payment initialization failed");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card shadow p-3" style={{ width: "420px" }}>
        <div className="card-body text-center">
          <h3 className="mb-3">Payment</h3>

          <p className="fs-5">
            Amount: <strong>₹500</strong>
          </p>

          <button className="btn btn-success w-100" onClick={payNow}>
            Pay with Razorpay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
