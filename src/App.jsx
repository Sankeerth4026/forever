import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Experience from "./pages/Experience";
import Archive from "./pages/Archive";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </Router>
  );
}

