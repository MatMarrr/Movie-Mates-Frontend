import React from "react";
import { Link } from "react-router-dom";
export const HeaderLink = ({ href, text }) => {
  return (
    <Link className="headerLink" to={href}>
      {text}
    </Link>
  );
};
