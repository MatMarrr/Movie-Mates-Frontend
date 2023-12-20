import React from "react";

export const AuthGoogleButton = ({onClick}) => {
  return (
    <button className="googleAuthButton" onClick={onClick}>
      <div className="googleAuthIcon"></div>
      <div className="gooleAuthText">Continue with Google</div>
    </button>
  );
};
