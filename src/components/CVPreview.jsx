import React from "react";
import { useLocation } from "react-router-dom";

const CVPreview = () => {
  const { state } = useLocation();

  return (
    <div className="container">
      <h1>CV Generated</h1>
      <a href={`http://localhost:5000/${state.filePath}`} download>
        Download CV
      </a>
    </div>
  );
};

export default CVPreview;
