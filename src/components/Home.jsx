import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiLoader } from "react-icons/fi";
import { FaWpforms } from "react-icons/fa";
import RichTextEditor from "./RichTextEditor";

const Home = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: "ANKIT KUMAR",
      email: "ankitkumar08k@gmail.com",
      education: "BCA , IGNOU 7.0 CGPA",
      experience:
        "DM Software 2022 - 2023 Wordpress DeveloperGained hands-on experience in wordpress technology, Elementor, WP bakery, Divi themes, Woocommerce and Exploredmany related plugins. Worked on more than 40 projects including informative, e-commerce functionalities, LMS Functionality etc.",
      project: "News Website, using React.js <br> Instagram Clone",
      skills:
        "Technical Skills: React.js, HTML, CSS, Javascript, Bootstrap, Figma, Wordpress, SQL, MongoDB, Git. Soft Skills : Leadership, Communication, Teamwork, Analytical thinking ,Problem Solving",
      university: "Ignou",
      phone: 9810428449,
      summary:
        "Aspiring to be a Web developer with months of hands-on experience in building robust and scalable Web applications Proficient in utilizing HTML, CSS, Javascript, Bootstrap and React to create dynamic and responsive user interfaces",
      url1: "https://www.linkedin.com/in/ankit-kumar-2945a1261/",
      url2: "https://github.com/Ankit08k/",
      url3: "https://www.linkedin.com/in/ankit-kumar-2945a1261/",
    },
  });

  const [value, setValue] = useState("");

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    education: "",
    experience: "",
    project: "",
    skills: "",
    university: "",
    phone: "",
    summary: "",
    url1: "",
    url2: "",
    url3: "",
    url4: "",
  });

  const name = watch("name");
  const email = watch("email");
  const summary = watch("summary");
  const education = watch("education");
  const phone = watch("phone");
  const experience = watch("experience");
  const project = watch("project");
  const skills = watch("skills");
  const university = watch("university");
  const url1 = watch("url1");
  const url2 = watch("url2");
  const url3 = watch("url3");
  const url4 = watch("url4");

  const getValue = (value) => {
    setValue(value);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const {
    fields: projectFields,
    append: projectAppend,
    remove: projectRemove,
  } = useFieldArray({
    control,
    name: "project",
  });

  // function DynamicInput(){
  //   const [data,setData]= useState([{education:""}])

  // }

  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState();

  const onSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5000/api/users/save", formData);
      const { data } = await axios.post(
        "http://localhost:5000/api/users/generate-cv",
        formData
      );
      setIsSubmitting(false);
      navigate("/cv-preview", { state: { filePath: data.filePath } });
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  // const handleClick(e){
  //   setData([...data,{education}])
  // }

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(to right,rgba(106,17, 203, 1), #2575fc)",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        className="card p-4"
        style={{
          width: "600px",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          className="text-center p-3 mb-4"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            color: "#6a11cb",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          CV Generator
          <FaWpforms />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          {/* <div>
            <ul>
              {fields.map((item, index) => (
                <li key={item.id}>
                  <input {...register(`test.${index}.firstName`)} />
                  <Controller
                    render={({ field }) => <input {...field} />}
                    name={`test.${index}.lastName`}
                    control={control}
                  />
                  <button type="button" onClick={() => remove(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => append({ firstName: "bill", lastName: "luo" })}
            >
              append
            </button>
            <input type="submit" />
          </div> */}

          {/* Image */}
          <div className="App col-md-12">
            <label className="form-label">Image</label>{" "}
            <input type="file" onChange={handleChange} {...register("img")} />
            <img src={file} alt="" width="100" height="100" />
          </div>
          {/* Name */}
          <div className="col-md-12">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>

          {/* Email */}
          <div className="col-md-12">
            <label className="form-label">Email</label>

            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          {/* Phone */}

          <div className="col-md-12">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone.message}</div>
            )}
          </div>

          {/* Professional Summary */}

          <div className="col-md-12">
            <label className="form-label">Summary</label>
            <RichTextEditor
              initialValue=""
              getValue={getValue}
              className={`form-control ${errors.summary ? "is-invalid" : ""}`}
              {...register("summary", { required: "Summary is required" })}
            />
            {errors.summary && (
              <div className="invalid-feedback">{errors.summary.message}</div>
            )}
            {/* <textarea
              className={`form-control ${errors.summary ? "is-invalid" : ""}`}
              rows="3"
              {...register("summary", {
                required: "Summary is required",
              })}
            ></textarea> */}
          </div>

          {/* social media links */}

          <div className="col-md-12">
            <label className="form-label">Social Media Links</label>{" "}
            <input
              type="url"
              className={`form-control ${errors.url ? "is-invalid" : ""}`}
              {...register("url1", { required: "url is required" })}
              placeholder="http://Linkedin.com"
            />{" "}
            <br />
            <input
              type="url"
              className={`form-control ${errors.url ? "is-invalid" : ""}`}
              {...register("url2", { required: "url is required" })}
              placeholder="http://Github.com"
            />{" "}
            <br />
            <input
              type="url"
              className={`form-control ${errors.url ? "is-invalid" : ""}`}
              {...register("url3", { required: "url is required" })}
              placeholder="http://Twitter.com"
            />
          </div>

          {/* new code */}
          <div>
            {fields.map((item, index) => (
              <div key={item.id} style={{ display: "inline-flex" }}>
                {/* <input {...register(`test.${index}.url`)} /> */}
                <input
                  type="url"
                  className={`form-control ${errors.url ? "is-invalid" : ""}`}
                  {...register(`test.${index}.url4`)}
                  placeholder="Any other links"
                />{" "}
                {/* <Controller
                    render={({ field }) => <input {...field} />}
                    name={`test.${index}.url2`}
                    control={control}
                  /> */}
                <svg
                  onClick={() => remove(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 448 512"
                >
                  <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
                {/* <button
                  type="button"
                  className="btn btn-primary w-40"
                  style={{ backgroundColor: "#DC143C", border: "none" }}
                  onClick={() => remove(index)}
                >
                  Delete
                </button> */}
              </div>
            ))}

            <button
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#6a11cb", border: "none" }}
              type="button"
              onClick={() => append({ url4: "" })}
            >
              Add Link
            </button>
          </div>

          {/* Education Stream */}

          <div className="col-md-12">
            <label className="form-label">Education Stream</label>
            <select
              className="form-select"
              {...register("stream", {
                required: "Education stream is required",
              })}
            >
              <option value="Science">Science</option>
              <option value="Arts">Arts</option>
              <option value="Commerce">Commerce</option>
              <option value="Engineering">Engineering</option>
              <option value="Medical">Medical</option>
            </select>
            {errors.stream && (
              <div className="invalid-feedback">{errors.stream.message}</div>
            )}
          </div>

          <div className="col-md-12">
            <label className="form-label">Education Description</label>
          </div>

          {/* Degree */}

          <div className="col-md-12">
            <label className="form-label">Degree</label>
            <select
              className="form-select"
              {...register("degree", { required: "Degree is required" })}
            >
              <option value="B.Sc">B.Sc</option>
              <option value="B.A">B.A</option>
              <option value="B.Com">B.Com</option>
              <option value="M.Sc">M.Sc</option>
              <option value="M.A">M.A</option>
              <option value="M.Com">M.Com</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="MBBS">MBBS</option>
              <option value="MD">MD</option>
            </select>
            {errors.degree && (
              <div className="invalid-feedback">{errors.degree.message}</div>
            )}
          </div>
          {/* University */}
          <div className="col-md-12">
            <label className="form-label">University</label>
            <input
              type="text"
              className={`form-control ${
                errors.university ? "is-invalid" : ""
              }`}
              {...register("university", {
                required: "University is required",
              })}
            />
            {errors.university && (
              <div className="invalid-feedback">
                {errors.university.message}
              </div>
            )}
          </div>
          {/* Year of Graduation */}
          {/* <div className="col-md-12">
            <label className="form-label">Year of Graduation</label>
            <input
              type="date"
              className={`form-control ${
                errors.graduationYear ? "is-invalid" : ""
              }`}
              {...register("graduationYear", {
                required: "Graduation year is required",
              })}
            />
            {errors.graduationYear && (
              <div className="invalid-feedback">
                {errors.graduationYear.message}
              </div>
            )}
          </div> */}

          {/* Education Details */}

          <div className="col-md-12">
            <label className="form-label">Education Details</label>
            <textarea
              className={`form-control ${errors.education ? "is-invalid" : ""}`}
              rows="3"
              {...register("education", {
                required: "Education details are required",
              })}
            ></textarea>
            {errors.education && (
              <div className="invalid-feedback">{errors.education.message}</div>
            )}

            {/* Add field */}

            {/* <button
              className="btn"
              style={{ backgroundColor: "#6a11cb", border: "none" }}
            >
              Add Field
            </button> */}
          </div>
          {/* Experience */}
          <div className="col-md-12">
            <label className="form-label">Experience</label>
            <textarea
              className={`form-control ${
                errors.experience ? "is-invalid" : ""
              }`}
              rows="3"
              {...register("experience", {
                required: "Experience is required",
              })}
            ></textarea>
            {errors.experience && (
              <div className="invalid-feedback">
                {errors.experience.message}
              </div>
            )}
          </div>
          {/* Projects */}
          <div className="col-md-12">
            <label className="form-label">Projects</label>
            <input
              type="text"
              className={`form-control ${
                errors.projectFields ? "is-invalid" : ""
              }`}
            />
            {errors.university && (
              <div className="invalid-feedback">
                {errors.projectFields.message}
              </div>
            )}
          </div>

          <div>
            {projectFields.map((item, index) => (
              <div key={item.id} style={{ display: "inline-flex" }}>
                {/* <input {...register(`test.${index}.url`)} /> */}
                <input
                  type="text"
                  className={`form-control ${errors.text ? "is-invalid" : ""}`}
                  {...register(`project.${index}.project`)}
                  placeholder="Add Projects"
                />{" "}
                {/* <Controller
                    render={({ field }) => <input {...field} />}
                    name={`test.${index}.url2`}
                    control={control}
                  /> */}
                <svg
                  onClick={() => projectRemove(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 448 512"
                >
                  <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
                {/* <button
                  type="button"
                  className="btn btn-primary w-40"
                  style={{ backgroundColor: "#DC143C", border: "none" }}
                  onClick={() => remove(index)}
                >
                  Delete
                </button> */}
              </div>
            ))}
            <button
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#6a11cb", border: "none" }}
              type="button"
              onClick={() => projectAppend({ project: "" })}
            >
              Add Project
            </button>
          </div>

          {/* Skills */}
          <div className="col-md-12">
            <label className="form-label">Skills</label>
            <textarea
              className={`form-control ${errors.skills ? "is-invalid" : ""}`}
              rows="3"
              {...register("skills", { required: "Skills are required" })}
            ></textarea>
            {errors.skills && (
              <div className="invalid-feedback">{errors.skills.message}</div>
            )}
          </div>
          {/* Theme Selection */}
          <div className="col-md-12">
            <label className="form-label">Select Theme</label>
            <select
              className="form-select"
              {...register("theme", {
                required: "Theme selection is required",
              })}
            >
              <option value="Classic">Classic</option>
              <option value="Modern">Modern</option>
              <option value="Creative">Creative</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="col-md-12 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#6a11cb", border: "none" }}
            >
              {isSubmitting ? <FiLoader /> : <h4>Generate CV</h4>}
              {/* <FiLoader/>  */}
            </button>
          </div>
        </form>
      </div>

      <div style={{ flex: 1, border: "1px solid #ccc", padding: "10px" }}>
        <h2>Live Resume Preview</h2>
        <h3>{name || "Your Name"}</h3>
        <p>{email || "your.email@example.com"}</p>
        <p>{phone || "123-456-7890"}</p>
        <h4>Links</h4>
        <p>{url1 || "Linkedin..."}</p>
        <p>{url2 || "Github..."}</p>
        <p>{url3 || "Twitter..."}</p>
        <h4>Summary</h4>
        <p>{summary || "A brief summary about yourself..."}</p>
        <h4>Education</h4>
        <p>{education || "Your education details go here..."}</p>
        <h4>Experience</h4>
        <p>{experience || "Your work experience goes here..."}</p>
        <h4>Projects</h4>
        <p>{project || "List your skills here..."}</p>
        <h4>Skills</h4>
        <p>{skills || "List your skills here..."}</p>
        <h4>University</h4>
        <p>{university || "List your skills here..."}</p>
      </div>
    </div>
  );
};

export default Home;
