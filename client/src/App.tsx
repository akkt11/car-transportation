import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/home";
import { Products } from "./pages/products";
import { HowItWorks } from "./pages/how-it-works";
import { AboutUs } from "./pages/about-us";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
