import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addFacultyDetails } from "../../service/api";
const defaultValue = {
  name: "",
  Department: "",
  Designation: "",
  speciality: "",
  email: "",
  Description: "",
  ResearchInterests: "",
  ResearchArticles: "",
};

function AddData() {
  const [FacultyBio, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...FacultyBio, [e.target.name]: e.target.value });
  };

  const addFaculty = async () => {
    await addFacultyDetails(FacultyBio);
  };
  return (
    <>
      <form style={{ width: "40%", marginLeft: "auto", marginRight: "auto" }}>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="name"
            onChange={(e) => onValueChange(e)}
            name="name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Department</label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Department"
            onChange={(e) => onValueChange(e)}
            name="Department"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Designation</label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Designation"
            onChange={(e) => onValueChange(e)}
            name="Designation"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">speciality</label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            placeholder="speciality"
            onChange={(e) => onValueChange(e)}
            name="speciality"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            placeholder="email"
            onChange={(e) => onValueChange(e)}
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Description</label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Description"
            onChange={(e) => onValueChange(e)}
            name="Description"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Research Intrests</label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            placeholder="ResearchIntrests"
            onChange={(e) => onValueChange(e)}
            name="ResearchIntrests"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Research Articles</label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            placeholder="ResearchArticles"
            onChange={(e) => onValueChange(e)}
            name="ResearchArticles"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => addFaculty()}
        >
          AddFacultyDetails
        </button>
      </form>
    </>
  );
}

export default AddData;
