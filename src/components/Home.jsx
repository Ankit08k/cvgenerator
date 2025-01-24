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
      project1: "News Website, using React.js , Instagram Clone",
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
    skills: "",
    university: "",
    phone: "",
    summary: "",
    url1: "",
    url2: "",
    url3: "",
    url4: "",
    project1: "",
  });

  const name = watch("name");
  const email = watch("email");
  const summary = watch("summary");
  const education = watch("education");
  const phone = watch("phone");
  const experience = watch("experience");
  const project1 = watch("project1");
  const skills = watch("skills");
  const university = watch("university");
  const url1 = watch("url1");
  const url2 = watch("url2");
  const url3 = watch("url3");
  const url4 = watch("url4");
  // const project1 = watch("project1");

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
        background:
          "linear-gradient(to right,rgba(10,17, 203, 1), rgb(243,241,236,1))",
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
                  className={`form-control ${errors.url4 ? "is-invalid" : ""}`}
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
              onClick={() => append({ project1: "" })}
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
              className={`form-control ${errors.project1 ? "is-invalid" : ""}`}
            />
            {errors.university && (
              <div className="invalid-feedback">{errors.project1.message}</div>
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
              </div>
            ))}
            <button
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#6a11cb", border: "none" }}
              type="button"
              onClick={() => projectAppend({ project4: "" })}
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

      {/* Live preview section */}

      <div
        style={{
          flex: 3,
          border: "1px solid #ccc",
          padding: "100px",
          margin: "100px",
          marginBottom: "800px",
          backgroundColor: "white",
          textAlign: "justify",
          fontFamily: "serif",
        }}
      >
        {/* new preview */}
        <div>
          <div class="NAME" style={{ color: "black" }}>
            <h1>{name}</h1>
          </div>
          <div class="section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "10" }}
              viewBox="0 0 512 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            &nbsp;
            <div class="heading1" style={{ fontSize: "small" }}>
              Email: {email}
            </div>
            &nbsp; &nbsp;&nbsp; &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "10" }}
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            &nbsp;
            <div
              class="heading1 fa-solid fa-phone"
              style={{ fontSize: "small" }}
            >
              Phone: {phone}
            </div>
            &nbsp; &nbsp;&nbsp; &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
              style={{ color: "black" }}
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
            &nbsp;
            <div class="heading1" style={{ fontSize: "small" }}>
              <a href={url1} style={{ color: "black" }}>
                Linkedin
              </a>
            </div>
            &nbsp; &nbsp;&nbsp; &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
              style={{ color: "black" }}
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            &nbsp;
            <div class="heading1" style={{ fontSize: "small" }}>
              <a href={url2} style={{ color: "black" }}>
                Github
              </a>
            </div>
            &nbsp; &nbsp;&nbsp; &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              class="bi bi-twitter-x"
              viewBox="0 0 16 16"
              style={{ color: "black" }}
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
            &nbsp;
            <div class="heading1" style={{ fontSize: "small" }}>
              <a href={url3} style={{ color: "black" }}>
                Twitter
              </a>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div class="heading1" style={{ fontSize: "small" }}>
              <a href={url4} style={{ color: "black" }}>
                New
              </a>
            </div>
          </div>
          <br />
          <p>
            <span style={{ color: "black" }}>
              -------------------------------------------------------------------------------------------------
            </span>
          </p>
          <div class="section">
            <div class="heading3">Professional Summary</div>
            <div
              style={{
                fontWeight: "100",
                fontSize: "medium",
                fontStyle: "italic",
                color: "black",
              }}
            >
              {summary}
            </div>
          </div>
          <p>
            <span style={{ color: "black" }}>
              -------------------------------------------------------------------------------------------------
            </span>
          </p>
          <div class="section2">
            <div
              class="heading2"
              style={{
                letterSpacing: "2px",
                color: "#54afe4",
                fontWeight: "bold",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              Education
            </div>

            <div class="heading2" style={{ fontWeight: "300", color: "black" }}>
              {education}
            </div>
          </div>
          <p>
            <span style={{ color: "black" }}>
              -------------------------------------------------------------------------------------------------
            </span>
          </p>
          <div class="section">
            <div class="heading3">Experience</div>
            <div style={{ color: "black" }}>{experience}</div>
          </div>
          <p>
            <span style={{ color: "black" }}>
              -------------------------------------------------------------------------------------------------
            </span>
          </p>
          <div class="section">
            <div class="heading3">Projects</div>
            <div style={{ color: "black" }}>{project1}</div>
          </div>
          <p>
            <span style={{ color: "black" }}>
              -------------------------------------------------------------------------------------------------
            </span>
          </p>
          <div class="section">
            <div class="heading3">Skills:</div>
            <div style={{ color: "black" }}>{skills}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
