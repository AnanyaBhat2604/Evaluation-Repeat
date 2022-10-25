import "./style.css";
import LandingPage from "./views/landingPage/landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./views/registerPage/registerPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<RegisterPage />} />

        <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
