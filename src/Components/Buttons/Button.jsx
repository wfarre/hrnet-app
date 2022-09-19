import React from "react";

const Button = ({ btnTitle, icon, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {btnTitle}
      <span className="icon-wrapper">{icon}</span>
    </button>
  );
};

export default Button;
