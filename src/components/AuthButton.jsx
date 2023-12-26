import React from "react";

export const AuthButton = ({ value, onClick }) => {
  return (
    <button type="submit" className="authButton" onClick={onClick}>
      {value}
    </button>
  );
};
