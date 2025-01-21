import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CVPreview from "./components/CVPreview";
import ResumeBuilder from "./components/ResumeBuilder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<ResumeBuilder />} />
        <Route path="/cv-preview" element={<CVPreview />} />
      </Routes>
    </Router>
  );
}

export default App;
