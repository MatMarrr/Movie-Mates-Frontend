import React from "react";
import { useNavigate } from "react-router-dom";

export const RegisterButton = () => {
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/register");
  };

  return (
    <button className="headerButton" onClick={handleOnClick}>
      Register
    </button>
  );
};
