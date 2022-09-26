import React from "react";
import { Link } from "react-router-dom";
import "./assets/LinkButton.css";
import PropTypes from "prop-types";

/**
 * React Component LinkButton
 * @param {string} path - the path the desired page
 * @param {element} icon - the elemnt of an icon if there is any
 * @param {string} btnText - the text inside the button
 * @param {string} dataTestId - data to test the button
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
