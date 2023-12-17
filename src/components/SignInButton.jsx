import React from "react";
import { useNavigate } from "react-router-dom";

export const SignInButton = () => {
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/login");
  };
  return (
    <button className="headerButton" onClick={handleOnClick}>
      Sign in
    </button>
  );
};
