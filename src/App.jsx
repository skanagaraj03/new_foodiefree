import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FreeFoodPage from "./pages/FreeFoodPage";
import LowCostFoodPage from "./pages/LowCostFoodPage";
import AddFoodPage from "./pages/AddFoodPage";
import Auth from "./pages/Auth";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FreeFoodPage />} />
        <Route path="/about" element={<LowCostFoodPage />} />
        <Route path="/contact" element={<AddFoodPage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
