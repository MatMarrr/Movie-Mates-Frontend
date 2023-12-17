import React from "react";

export const HeaderLink = ({ href, text }) => {
  return (
    <a className="headerLink" href={href}>
      {text}
    </a>
  );
};
