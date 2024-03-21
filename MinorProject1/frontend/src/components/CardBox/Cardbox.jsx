import React from "react";
import Card from "../Card/Card";
import f_image1 from "../Assets/f_image1.png";
import f_image2 from "../Assets/f_image2.png";
import f_image3 from "../Assets/f_image3.png";
import "../Pages/IT.css";
import Heads from "../Heads/Heads.jsx";
import { NavLink } from "react-router-dom";
function Cardbox(props) {
  return (
    <div>
      <div className="container">
        <div className="part1">
          <NavLink to="/itdept/athira">
            <Card im={f_image1} des={<h1>hi from athira</h1>} />
          </NavLink>
          <NavLink to="/itdept/rajeshkannan">
            <Card im={f_image2} />
          </NavLink>
          <NavLink to="/faculty">
            <Card im={f_image3} />
          </NavLink>
          <NavLink to="/faculty">
            <Card im={f_image1} />
          </NavLink>
          <NavLink to="/faculty">
            <Card im={f_image1} />
          </NavLink>
          <NavLink to="/faculty">
            <Card im={f_image1} />
          </NavLink>
        </div>
        <div
          className="conatainer2"
          style={{ marginTop: "100px", marginLeft: "150px" }}
        >
          <div>
            <Heads disg="PRINCIPAL" />
            <Heads disg="HOD" />
            <Heads disg="PROFESSORS" />
            <Heads disg="ASSISTANT PROFESSORS" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardbox;
