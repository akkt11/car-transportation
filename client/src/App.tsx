import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/home";
import { Products } from "./pages/products";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
