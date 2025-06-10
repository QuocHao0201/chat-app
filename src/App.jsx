import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";  // chỉnh theo đúng folder
import Register from "./pages/Register";
import Home from "./pages/Home";
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
