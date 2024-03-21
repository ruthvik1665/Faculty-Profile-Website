import React from "react";
import "./BelowNav.css";
import CBIT_logo from "../Assets/CBIT_logo.png";
const BelowNav = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-xxl-8">
            <img src={CBIT_logo} />
          </div>
          <div
            className="elements"
            class="col-xxl-4 "
            style={{ padding: "40px", marginTop: "30px" }}
          >
            <button
              className="mar"
              type="button"
              class="btn btn-primary btn-sm col mx-2 "
              style={{
                borderRadius: 0,
                backgroundColor: "#800000",
                border: "None",
              }}
            >
              CBIT Review comitee Report
            </button>
            <button
              className="mar"
              type="button"
              class="btn btn-primary btn-sm col mx-2 "
              style={{
                borderRadius: 0,
                backgroundColor: "#800000",
                border: "None",
              }}
            >
              Admissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowNav;
