import axios from "axios";

const URL = "http://localhost:8000";

export const addFacultyDetails = async (data) => {
  try {
    console.log("t1");
    return await axios.post(`${URL}/addData`, data);
  } catch (error) {
    console.log("the error is", error);
  }
};
