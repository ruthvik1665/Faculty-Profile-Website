import React from "react";
import Navbar from "../Navbar/Navbar";
import BelowNav from "../BelowNav/BelowNav";
import FacultyNavbar from "../FacultyNavbar/FacultyNavbar";

const EditForm = () => {
  return (
    <div>
      <Navbar />
      <BelowNav />
      <FacultyNavbar />
      <form style={{ marginLeft: "20%", marginRight: "20%" }}>
        <div class="form-group">
          <label for="formGroupExampleInput" style={{ color: "#800000" }}>
            <b> Name</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Ruthvik"
          />
          <label for="formGroupExampleInput" style={{ color: "#800000" }}>
            <b>Designation</b>
          </label>
          <select class="form-control">
            <option>Profesor</option>
            <option>Associative Profesor</option>
            <option>Assistant Profesor</option>
          </select>
          <label for="formGroupExampleInput" style={{ color: "#800000" }}>
            <b> Department</b>
          </label>
          <select class="form-control">
            <option>IT</option>
            <option>CSE</option>
            <option>ECE</option>
          </select>
          <label for="formGroupExampleInput" style={{ color: "#800000" }}>
            <b>Research</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="abc@gmail.com"
          />
          <label for="formGroupExampleInput" style={{ color: "#800000" }}>
            <b> Description</b>
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="...."
          />
        </div>
        <button
          style={{ backgroundColor: "#800000", border: "0" }}
          type="button"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
