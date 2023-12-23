import React from "react";

export const AuthGoogleButton = () => {
  const handleOnClick = async () => {
    window.location.href = "http://localhost:8000/api/auth/google";
  };

  return (
    <button className="googleAuthButton" onClick={handleOnClick}>
      <div className="googleAuthIcon"></div>
      <div className="googleAuthText">Continue with Google</div>
    </button>
  );
};
