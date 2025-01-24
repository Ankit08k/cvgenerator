import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Personaldetails() {
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
      <form action="">
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First-name"
          />{" "}
          <label htmlFor="">Last Name</label>
          <input type="text" className="form-control" placeholder="Last-name" />
        </div>
        <div>
          <label for="exampleFormControlInput1">Email address</label>{" "}
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <input
            type="number"
            className="form-control"
            name=""
            id=""
            placeholder="Number"
          />
        </div>
        <br />
        <button className="btn btn-danger">Cancel</button>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
}

export default Personaldetails;
