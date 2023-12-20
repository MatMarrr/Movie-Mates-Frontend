import React from "react";
import { AuthInput } from "../Input";
import { AuthButton } from "../AuthButton";
import { AuthOr } from "../AuthOr";

export const RegisterPage = () => {
  return (
    <div class="authContainer">
      <div className="authBox">
        <h1 className="authHeader">Register</h1>
        <AuthInput placeholder={"Login"} />
        <AuthInput placeholder={"Email"} />
        <div className="passwordInputContainer">
          <AuthInput placeholder={"Password"} />
        </div>
        <AuthButton value="Register" />
        <AuthOr />
      </div>
    </div>
  );
};
