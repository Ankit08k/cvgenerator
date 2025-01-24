import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CVPreview from "./components/CVPreview";
import ResumeBuilder from "./components/ResumeBuilder";
import Index1 from "./components/Index1";
// import Sidebar from "./components/Sidebar";
// import Sbar from "./components/Sbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<ResumeBuilder />} />
        <Route path="/cv-preview" element={<CVPreview />} />
        <Route path="/sidebar" element={<Index1 />} />
        {/* <Route path="/side" element={<Sidebar />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
