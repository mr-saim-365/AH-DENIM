import { Routes, Route } from "react-router-dom";
import Men from "./pages/Men";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="min-h-screen bg-white ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUS" element={<ContactUs />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
