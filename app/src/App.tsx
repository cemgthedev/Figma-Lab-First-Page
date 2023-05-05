import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router basename="/Figma-Lab-First-Page">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </Router>
  );
}