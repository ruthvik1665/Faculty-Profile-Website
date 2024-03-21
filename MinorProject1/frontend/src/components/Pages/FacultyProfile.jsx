import React from "react";
import { useParams } from "react-router-dom";
import "../Pages/FacultyProfile.css";
import f_image1 from "../Assets/f_image1.png";
import f_image2 from "../Assets/f_image2.png";
import Navbar from "../Navbar/Navbar";
import BelowNav from "../BelowNav/BelowNav";
import FacultyNavbar from "../FacultyNavbar/FacultyNavbar";
import Footer from "../Footer/Footer.jsx";
import CustomAccordion from "../Accordian/Accordian.jsx";
import Accordian from "../Accordian/Accordian.jsx";
import Heads from "../Heads/Heads.jsx";

import f_image3 from "../Assets/f_image3.png";
import f_image4 from "../Assets/f_image4.png";
import f_image5 from "../Assets/f_image5.png";
import f_image6 from "../Assets/f_image6.png";
import f_image7 from "../Assets/f_image7.png";
import f_image8 from "../Assets/f_image8.png";

const FacultyProfile = () => {
  const { facultyKey } = useParams();

  // Sample faculty profile data
  const facultyProfileData = {
    IT_1: {
      name: "Athira",
      designation: "Professor",
      department: "IT",
      research: "Research work details",
      email: "amit.sharma@cbit.ac.in",
      description:
        "Dr. Athira Menon is an esteemed faculty member at CBIT, specializing in Computer Science. With a passion for cutting-edge technology and a wealth of experience, she brings a unique blend of academic expertise and industry insight to the classroom. Having completed her Ph.D. in Computer Science from a renowned institution, Athira has since dedicated her career to fostering innovation and excellence in the field. Her research interests span artificial intelligence, machine learning, and data science applications in healthcare.",
      Research: "10 papers published",
      Awards: "Receiver best faculty of the year",
      Education: "completed pg",
      img: f_image1,
    },
    IT_2: {
      name: "Rajendra Prasad",
      designation: "Associate Professor",
      department: "IT",
      research: "Research work details",
      email: "priya.gupta@cbit.ac.in",
      description:
        "Santhu is an Associate Professor of Accounting at the Indian Institute of Management Bangalore (IIMB) and IIMB Young Faculty Research Chair...",
      Research: "Research work details for Rajendra Prasad",
      Awards: "Awards for Rajendra Prasad",
      Education: "Education details for Rajendra Prasad",
      img: f_image2,
    },
    IT_3: {
      name: "Tilak Varma",
      designation: "Associate Professor",
      department: "IT",
      research: "Research work details",
      email: "rajesh.singh@cbit.ac.in",
      description:
        "Ruthvik is a Professor of Accounting at the Indian Institute of Management Bangalore (IIMB) and IIMB Young Faculty Research Chair...",
      Research: "Research work details for Tilak Varma",
      Awards: "Awards for Tilak Varma",
      Education: "Education details for Tilak Varma",
      img: f_image3,
    },
    IT_4: {
      name: "Mahendra varma",
      designation: "Associate Professor",
      department: "IT",
      research: "Research work details",
      email: "sneha.patel@cbit.ac.in",
      description:
        "Sneha Patel is an Associate Professor in the Department of Information Technology. She holds a Ph.D. in Computer Science and specializes in software engineering and data analysis. Dr. Patel is dedicated to providing a comprehensive understanding of emerging technologies and their applications.",
      Research: "Published 18 research papers",
      Awards: "Recipient of the 'Innovative Teaching' award",
      Education: "Completed Postgraduate and Doctoral studies",
      img: f_image4,
    },
    IT_5: {
      name: "Subbarao",
      designation: "Associate Professor",
      department: "IT",
      research: "Research work details",
      email: "anand.joshi@cbit.ac.in",
      description:
        "Prof. Anand Joshi is a seasoned Professor with expertise in Information Technology. With a career spanning decades, he has made significant contributions to the field. Prof. Joshi's research focuses on cybersecurity, network engineering, and cloud computing. He is dedicated to mentoring the next generation of IT professionals.",
      Research: "Published 25 research papers",
      Awards: "Recipient of the 'Lifetime Achievement' award",
      Education: "Completed Postgraduate and Doctoral studies",
      img: f_image5,
    },
    IT_6: {
      name: "Malinga",
      designation: "Associate Professor",
      department: "IT",
      research: "Research work details",
      email: "nandini.reddy@cbit.ac.in",
      description:
        "Dr. Nandini Reddy is an Assistant Professor specializing in Information Technology. With a Ph.D. in Computer Science, she is passionate about data analytics and machine learning. Dr. Reddy actively collaborates with industry partners for cutting-edge research projects.",
      Research: "Published 14 research papers",
      Awards: "Recipient of the 'Young Researcher' award",
      Education: "Completed Postgraduate studies",
      img: f_image6,
    },
    IT_7: {
      name: "Manjeet",
      designation: "Associate Professor",
      department: "IT",
      research: "Research work details",
      email: "arjun.sharma@cbit.ac.in",
      description:
        "Prof. Arjun Sharma is a Professor in the Department of Information Technology. With a Ph.D. in Computer Science, he specializes in software engineering and computer architecture. Prof. Sharma's research focuses on developing innovative solutions for real-world problems using computational techniques.",
      Research: "Published 22 research papers",
      Awards: "Recipient of the 'Excellence in Research' award",
      Education: "Completed Postgraduate and Doctoral studies",
      img: f_image7,
    },
    IT_8: {
      name: "Ramana",
      designation: "Professor",
      department: "IT",
      research: "Research work details",
      email: "neha.deshmukh@cbit.ac.in",
      description:
        "Dr. Neha Deshmukh is an Assistant Professor specializing in Information Technology. With a focus on cybersecurity and data privacy, she holds a Ph.D. in Computer Science. Dr. Deshmukh actively engages in research exploring innovative solutions to secure digital systems.",
      Research: "Published 16 research papers",
      Awards: "Recipient of the 'Emerging Researcher' award",
      Education: "Completed Postgraduate studies",
      img: f_image3,
    },
  };

  const faculty = facultyProfileData[facultyKey];

  if (!faculty) {
    return <div>Faculty not found</div>;
  }

  return (
    <div>
      <Navbar />
      <BelowNav />
      <FacultyNavbar />
      <div className="containerofp">
        <div
          style={{ textAlign: "center", marginTop: "100px" }}
          className="container1"
        >
          <img src={faculty.img} alt="Faculty" />
        </div>
        <div style={{ marginTop: "100px" }} className="container2">
          <h1>{faculty.name}</h1>
          <p>
            <strong>{faculty.designation}</strong>
          </p>
          <p>
            <strong>{faculty.department}</strong>
          </p>
          <h4>{faculty.email}</h4>
          <p>{faculty.description}</p>
          <h2 style={{ color: "#800000" }}>Additional Information</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            <button
              style={{ width: "150px" }}
              type="button"
              className="btn btn-outline-dark"
            >
              Curriculum Vitae
            </button>
            <button
              style={{ width: "150px" }}
              type="button"
              className="btn btn-outline-dark"
            >
              Personal Website
            </button>
          </div>
        </div>
      </div>
      <div className="" style={{ display: "flex", marginTop: "50px" }}>
        <div
          style={{
            width: "50%",
            marginLeft: "150px",
            marginRight: "80px",
            marginTop: "50px",
          }}
        >
          <Accordian
            research={faculty.Research}
            Awards={faculty.Awards}
            Education={faculty.Education}
          />
        </div>
        <div style={{ width: "50%", marginLeft: "200px", marginTop: "50px" }}>
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

export default FacultyProfile;
