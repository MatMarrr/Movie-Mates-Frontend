import React from "react";
import { AuthInput } from "../Input";
import { AuthButton } from "../AuthButton";
import { AuthOr } from "../AuthOr";
import { AuthGoogleButton } from "../AuthGoogleButton";
import { AuthErrorText } from "../authErrorText";

export const LoginPage = () => {
  const signInOnClick = () => {};
  const googleSignInOnClick = () => {};

  return (
    <div class="authContainer">
      <div className="authBox">
        <h1 className="authHeader">Sign In</h1>
        <AuthInput placeholder={"Login or Email"} />
        <div className="passwordInputContainer">
          <AuthInput placeholder={"Password"} />
        </div>
        <AuthErrorText value="Login cannot be empty" />
        <AuthButton value="Sign In" onClick={signInOnClick} />
        <AuthOr />
        <AuthGoogleButton onClick={googleSignInOnClick} />
      </div>
    </div>
  );
};
