import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import userState from "./../recoilStates/userState";
import isAuthState from "./../recoilStates/isAuthState";

export const SignOutButton = () => {
  const setUserState = useSetRecoilState(userState);
  const setIsAuthState = useSetRecoilState(isAuthState);
  let navigate = useNavigate();

  const handleOnClick = () => {
    setIsAuthState(false);
    localStorage.removeItem("token");
    setUserState({});
    navigate("/");
  };

  return (
    <button className="headerButton" onClick={handleOnClick}>
      Sign out
    </button>
  );
};
