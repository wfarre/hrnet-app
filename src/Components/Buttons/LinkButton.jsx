import React from "react";
import { Link } from "react-router-dom";

export default function LinkButton({ path, icon, btnText, dataTestId }) {
  return (
    <Link to={path} className="button" data-testid={dataTestId}>
      {btnText}
      <span className="icon-wrapper">{icon}</span>
    </Link>
  );
}
