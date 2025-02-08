import { Routes, Route } from "react-router-dom";
import Men from "./pages/Men";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-white ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<Men />} />
      </Routes>
    </div>
  );
}

export default App;
