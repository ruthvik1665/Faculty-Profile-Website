import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import BelowNav from "../BelowNav/BelowNav";
import FacultyNavbar from "../FacultyNavbar/FacultyNavbar";
import Card from "../Card/Card.jsx";
import Footer from "../Footer/Footer";
import FacultyHeading from "../FacultyHeading/FacultyHeading";
import f_image1 from "../Assets/f_image1.png";
import f_image2 from "../Assets/f_image2.png";
import f_image3 from "../Assets/f_image3.png";
import f_image4 from "../Assets/f_image4.png";
import f_image5 from "../Assets/f_image5.png";
import f_image6 from "../Assets/f_image6.png";
import f_image7 from "../Assets/f_image7.png";
import f_image8 from "../Assets/f_image8.png";
import Heads from "../Heads/Heads";
import "../Pages/IT.css";

const IT = () => {
  const faculData = [
    // Dummy data for IT department's faculty
    {
      id: "IT_1",
      name: "Athira",
      designation: "Professor",
      im: f_image1,
    },
    {
      id: "IT_2",
      name: "Rajendra Prasad",
      designation: "Associate Professor",
      im: f_image2,
    },
    {
      id: "IT_3",
      name: "Tilak Varma",
      designation: "Associate Professor",
      im: f_image3,
    },
    {
      id: "IT_4",
      name: "Mahendra varma",
      designation: "Associate Professor",
      im: f_image4,
    },
    {
      id: "IT_5",
      name: "Subbarao",
      designation: "Associate Professor",
      im: f_image5,
    },
    {
      id: "IT_6",
      name: "Malinga",
      designation: "Associate Professor",
      im: f_image6,
    },
    {
      id: "IT_7",
      name: "Manjeet",
      designation: "Associate Professor",
      im: f_image7,
    },
    {
      id: "IT_8",
      name: "Ramana",
      designation: "Professor",
      im: f_image8,
    },

    // Add more faculty data for IT department as needed
  ];

  // const [formDataList, setFormDataList] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8001/api/getFormData");
  //     if (response.ok) {
  //       const data = await response.json();
  //       setFormDataList(data);
  //     } else {
  //       console.error("Failed to fetch form data.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching form data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  //const { department, facultyId } = useParams();

  // const facultyData = formDataList.reduce((acc, faculty, index) => {
  //   acc[`IT_${index + 1}`] = {
  //     name: faculty.name,
  //     designation: faculty.designation,
  //     department: faculty.department,
  //     research: faculty.research,
  //     phone: faculty.phone || "",
  //     email: faculty.email,

  //     description: faculty.description,
  //   };
  //   return acc;
  // }, {});

  // const facultyDataArray = Object.values(facultyData);

  return (
    <div>
      <Navbar />
      <BelowNav />
      <FacultyNavbar />
      <FacultyHeading />
      <h2 style={{ textAlign: "center" }}>IT Department</h2>
      <div className="container">
        <div className="part1">
          {faculData.map((faculty) => (
            <div key={faculty.id}>
              <NavLink to={`/IT/${faculty.id}`}>
                <Card
                  im={faculty.im}
                  name={faculty.name}
                  designation={faculty.designation}
                />
              </NavLink>
              <p style={{ marginTop: "-50px" }}>{faculty.designation}</p>
            </div>
          ))}
        </div>
        <div style={{ marginLeft: "150px", marginTop: "100px" }}>
          {/* You can add your <Heads /> components here */}
          <Heads disg="PRINCIPAL" />
          <Heads disg="HOD" />
          <Heads disg="PROFESSORS" />
          <Heads disg="ASSISTANT PROFESSORS" />
          <Heads disg="DEEN" />
          <Heads disg="DIRECTOR" />
          <Heads disg="Management Head" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IT;
