import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SearchTrains from "./components/SearchTrains";
import Passenger from "./components/Passenger";
import Payment from "./components/Payment";
import Booking from "./components/Booking";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<SearchTrains />} />
        <Route path="/passenger" element={<Passenger />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
