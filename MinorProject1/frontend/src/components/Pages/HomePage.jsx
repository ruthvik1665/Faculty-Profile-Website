import React from "react";
import Navbar from "../Navbar/Navbar";
import BelowNav from "../BelowNav/BelowNav";
import FacultyNavbar from "../FacultyNavbar/FacultyNavbar";
import Cardbox from "../CardBox/Cardbox";
import FacultyHeading from "../FacultyHeading/FacultyHeading";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <BelowNav />
      <FacultyNavbar />
      <FacultyHeading />
      <Cardbox />
      <Footer/>
    </div>
  );
};

export default HomePage;
