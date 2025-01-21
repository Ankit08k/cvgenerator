import React, { useState } from "react";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    experience: "",
    skills: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Input Section */}
      <div style={{ flex: 1 }}>
        <h2>Resume Builder</h2>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label>Summary:</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              placeholder="Enter a brief summary"
            />
          </div>
          <div>
            <label>Education:</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Enter your education details"
            />
          </div>
          <div>
            <label>Experience:</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Enter your work experience"
            />
          </div>
          <div>
            <label>Skills:</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Enter your skills"
            />
          </div>
        </form>
      </div>

      {/* Live Preview Section */}
      <div style={{ flex: 1, border: "1px solid #ccc", padding: "10px" }}>
        <h2>Live Resume Preview</h2>
        <h3>{formData.name || "Your Name"}</h3>
        <p>{formData.email || "your.email@example.com"}</p>
        <p>{formData.phone || "123-456-7890"}</p>
        <h4>Summary</h4>
        <p>{formData.summary || "A brief summary about yourself..."}</p>
        <h4>Education</h4>
        <p>{formData.education || "Your education details go here..."}</p>
        <h4>Experience</h4>
        <p>{formData.experience || "Your work experience goes here..."}</p>
        <h4>Skills</h4>
        <p>{formData.skills || "List your skills here..."}</p>
      </div>
    </div>
  );
};

export default ResumeBuilder;

// {
//     defaultValues: {
//       name: "ANKIT KUMAR",
//       email: "ankitkumar08k@gmail.com",
//       education: "BCA , IGNOU 7.0 CGPA",
//       experience:
//         "DM Software 2022 - 2023 Wordpress DeveloperGained hands-on experience in wordpress technology, Elementor, WP bakery, Divi themes, Woocommerce and Exploredmany related plugins. Worked on more than 40 projects including informative, e-commerce functionalities, LMS Functionality etc.",
//       project: "News Website, using React.js <br> Instagram Clone",
//       skills:
//         "Technical Skills: React.js, HTML, CSS, Javascript, Bootstrap, Figma, Wordpress, SQL, MongoDB, Git. Soft Skills : Leadership, Communication, Teamwork, Analytical thinking ,Problem Solving",
//       university: "Ignou",
//       phone: 9810428449,
//       summary:
//         "Aspiring to be a Web developer with months of hands-on experience in building robust and scalable Web applications Proficient in utilizing HTML, CSS, Javascript, Bootstrap and React to create dynamic and responsive user interfaces",
//       url1: "https://www.linkedin.com/in/ankit-kumar-2945a1261/",
//       url2: "https://github.com/Ankit08k/",
//       url3: "https://www.linkedin.com/in/ankit-kumar-2945a1261/",
//     },
//   }
