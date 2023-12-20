import React from "react";

export const AuthButton = ({ value, onClick }) => {
  return (
    <button className="authButton" onClick={onClick}>
      {value}
    </button>
  );
};
