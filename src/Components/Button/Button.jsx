import React from "react";

const Button = ({ btnTitle, icon }) => {
  return (
    <button className="button">
      {btnTitle}
      <span className="icon-wrapper">{icon}</span>
    </button>
  );
};

export default Button;
