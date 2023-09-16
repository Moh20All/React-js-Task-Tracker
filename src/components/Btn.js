import React from "react";
const Btn = ({ color, onShow, showOn }) => {
  return (
    <button
      className="btn"
      onClick={onShow}
      style={{ backgroundColor: showOn ? "red" : "" }}>
      {!showOn ? "Add" : "close"}
    </button>
  );
};

export default Btn;
