import React from "react";

export const AuthGoogleButton = () => {
  const apiURL = import.meta.env.VITE_API_URL;

  const handleOnClick = async (e) => {
    e.preventDefault();
    window.location.href = `${apiURL}/auth/google`;
  };

  return (
    <button className="googleAuthButton" onClick={handleOnClick}>
      <div className="googleAuthIcon"></div>
      <div className="googleAuthText">Continue with Google</div>
    </button>
  );
};
