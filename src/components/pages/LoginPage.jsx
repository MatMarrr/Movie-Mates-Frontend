import React, { useState } from "react";
import { AuthInput } from "../AuthInput";
import { AuthButton } from "../AuthButton";
import { AuthOr } from "../AuthOr";
import { AuthGoogleButton } from "../AuthGoogleButton";
import { AuthErrorText } from "../authErrorText";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "./../../validationRules/loginSchema";
import { ShowPasswordButton } from "../ShowPasswordButton";
import { useSetRecoilState } from "recoil";
import userState from "./../../recoilStates/userState";
import isAuthState from "./../../recoilStates/isAuthState";
import axios from "axios";

const getFirstErrorMessage = (errors, touched) => {
  if (touched.identifier && errors.identifier) {
    return errors.identifier;
  }
  if (touched.password && errors.password) {
    return errors.password;
  }
  return "";
};

export const LoginPage = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const setUserState = useSetRecoilState(userState);
  const setIsAuthState = useSetRecoilState(isAuthState);
  const navigate = useNavigate();
  const [inputType, setInputType] = useState("password");

  const loginForm = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      axios
        .post(`${apiURL}/login`, values)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          setIsAuthState(true);
          setUserState(response.data.user);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  const firstErrorMessage = getFirstErrorMessage(
    loginForm.errors,
    loginForm.touched
  );

  return (
    <div className="authContainer">
      <form onSubmit={loginForm.handleSubmit} className="authBox">
        <h1 className="authHeader">Sign In</h1>
        <AuthInput
          name="identifier"
          placeholder="Login or Email"
          onChange={loginForm.handleChange}
          onBlur={loginForm.handleBlur}
          value={loginForm.values.identifier}
        />
        <div className="passwordInputContainer">
          <AuthInput
            name="password"
            placeholder="Password"
            type={inputType}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            value={loginForm.values.password}
          />
          <ShowPasswordButton
            inputType={inputType}
            setInputType={setInputType}
          />
        </div>
        {firstErrorMessage && <AuthErrorText value={firstErrorMessage} />}
        <AuthButton type="submit" value="Sign In" />
        <AuthOr />
        <AuthGoogleButton />
      </form>
    </div>
  );
};
