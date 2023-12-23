import React from "react";
import { AuthInput } from "../Input";
import { AuthButton } from "../AuthButton";
import { AuthOr } from "../AuthOr";
import { AuthGoogleButton } from "../AuthGoogleButton";
import { AuthErrorText } from "../authErrorText";

export const RegisterPage = () => {
  const registerOnClick = () => {};

  return (
    <div className="authContainer">
      <div className="authBox">
        <h1 className="authHeader">Register</h1>
        <AuthInput placeholder={"Login"} />
        <AuthInput placeholder={"Email"} />
        <div className="passwordInputContainer">
          <AuthInput placeholder={"Password"} />
        </div>
        <AuthErrorText value="Login cannot be empty" />
        <AuthButton value="Register" onClick={registerOnClick} />
        <AuthOr />
        <AuthGoogleButton />
      </div>
    </div>
  );
};
