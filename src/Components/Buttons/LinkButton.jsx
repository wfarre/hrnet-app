import React from "react";
import { Link } from "react-router-dom";
import "./assets/LinkButton.css";
import PropTypes from "prop-types";

/**
 * React Component LinkButton
 * @param {*} param0
 * @returns Button component
 */
const LinkButton = ({ path, icon, btnText, dataTestId }) => {
  return (
    <Link to={path} className="button" data-testid={dataTestId}>
      {btnText}
      <span className="icon-wrapper">{icon}</span>
    </Link>
  );
};

LinkButton.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.element,
  btnText: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default LinkButton;
