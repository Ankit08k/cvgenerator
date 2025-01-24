import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setStep }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu" style={{ fontFamily: "serif" }}>
        <h2 style={{ color: "#FFEBCD" }}> CV Builder</h2>
        <li className="sidebar-item" onClick={() => setStep("personaldetails")}>
          Personal Details
        </li>
        <li className="sidebar-item" onClick={() => setStep("Sociallinks")}>
          {" "}
          Social Links
        </li>
        <li className="sidebar-item" onClick={() => setStep("Summary")}>
          Professional Summary
        </li>

        <li className="sidebar-item" onClick={() => setStep("Education")}>
          Education
        </li>
        <li className="sidebar-item" onClick={() => setStep("Experience")}>
          Experience
        </li>
        <li className="sidebar-item" onClick={() => setStep("Projects")}>
          Projects
        </li>
        <li className="sidebar-item" onClick={() => setStep("Skills")}>
          Skills
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
