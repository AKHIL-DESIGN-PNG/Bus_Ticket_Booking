import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BusList from "./pages/BusList";
import SeatSelection from "./pages/SeatSelection";
import Confirmation from "./pages/Confirmation";
import AdminAddBus from "./pages/AdminAddBus";
import Payment from "./pages/Payment";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/buses" element={<BusList />} />
        <Route path="/seats" element={<SeatSelection />} />
        <Route path="/confirm" element={<Confirmation />} />
        <Route path="/confirmation/:bookingId" element={<Confirmation />} />
        <Route path="/admin/add-bus" element={<AdminAddBus />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
