import { Route, Routes } from "react-router";
import "./App.css";
import { MainPage } from "./pages/main-page";

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  );
}

export default App;
