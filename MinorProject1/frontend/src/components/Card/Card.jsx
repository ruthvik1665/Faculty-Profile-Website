import React from "react";
import f_image1 from "../Assets/f_image1.png";
function Card(props) {
  return (
    <div style={{ width: "15rem", marginRight: "100px" }}>
      <img src={props.im} alt="Card image cap" />
      <div>
        <p>
          <a style={{ color: "#800000", textDecoration: "underline" }}>
            {props.name}
          </a>
        </p>
        <p>{props.designation}</p>
      </div>
    </div>
  );
}

export default Card;
