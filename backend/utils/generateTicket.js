const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generateTicket = (booking) => {
  const doc = new PDFDocument({ margin: 40 });

  const filePath = path.join(
    __dirname,
    `../tickets/Ticket_${booking._id}.pdf`
  );

  doc.pipe(fs.createWriteStream(filePath));

  /* ================= HEADER ================= */
  doc
    .fontSize(24)
    .fillColor("#0d6efd")
    .text("AKHIL_TRAVELS", { align: "center" });

  doc
    .moveDown(0.3)
    .fontSize(12)
    .fillColor("black")
    .text("Bus Ticket Confirmation", { align: "center" });

  doc.moveDown(1);

  doc
    .moveTo(40, doc.y)
    .lineTo(550, doc.y)
    .stroke();

  doc.moveDown(1);

  /* ================= JOURNEY DETAILS ================= */
  doc.fontSize(14).text("Journey Details", { underline: true });
  doc.moveDown(0.5);

  doc.fontSize(12);
  doc.text(`From: ${booking.from}`);
  doc.text(`To: ${booking.to}`);
  doc.text(`Bus Name: ${booking.busName}`);

  doc.moveDown(1);

  /* ================= PASSENGER DETAILS ================= */
  doc.fontSize(14).text("Passenger Details", { underline: true });
  doc.moveDown(0.5);

  doc.fontSize(12);
  doc.text(`Passenger Name: ${booking.userName}`);
  doc.text(`Seat Number(s): ${booking.seats.join(", ")}`);

  doc.moveDown(1);

  /* ================= PAYMENT DETAILS ================= */
  doc.fontSize(14).text("Payment Details", { underline: true });
  doc.moveDown(0.5);

  doc.fontSize(12);
  doc.text(`Amount Paid: ₹${booking.amount}`);
  doc.text(`Payment ID: ${booking.paymentId}`);
  doc.text(`Ticket ID: ${booking._id}`);
  doc.text(`Date: ${new Date().toLocaleString()}`);

  /* ================= FOOTER COMPANY DETAILS (BOTTOM RIGHT) ================= */

  const bottomY = 520; // fixed bottom position

  doc
    .fontSize(10)
    .fillColor("#333")
    .text(
      `Company:-
      Akhil Travels
Bus Name: Akhil Travels
Owner: Y Akhil Kumar Reddy
Cell: 9398707229
Email: akhi4uy@gmail.com

Contact us anytime.
Have a safe and happy journey!`,
      320, // X position (right side)
      bottomY,
      { align: "left" }
    );

  doc.end();

  return filePath;
};

module.exports = generateTicket;
