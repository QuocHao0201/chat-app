import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword"; // ✅ Thêm dòng này
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* ✅ Thêm dòng này */}
      </Routes>
        <Toaster />
    </Router>

  );
}

export default App;
