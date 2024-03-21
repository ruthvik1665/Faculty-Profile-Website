import React from "react";

function Heads(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block mb-2"
        style={{
          borderRadius: 0,
          backgroundColor: "#800000",
          border: "None",
          width: "300px",
        }}
      >
        {props.disg}
      </button>
    </div>
  );
}

export default Heads;
