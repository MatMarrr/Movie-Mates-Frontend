import React, { useState } from "react";
import { AuthInput } from "../AuthInput";
import { AuthButton } from "../AuthButton";
import { AuthOr } from "../AuthOr";
import { AuthGoogleButton } from "../AuthGoogleButton";
import { AuthErrorText } from "../authErrorText";
import { useFormik } from "formik";
import { registerSchema } from "./../../validationRules/registerSchema";
import { ShowPasswordButton } from "../ShowPasswordButton";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import userState from "./../../recoilStates/userState";
import isAuthState from "./../../recoilStates/isAuthState";
import axios from "axios";

const getFirstErrorMessage = (errors, touched) => {
  if (touched.login && errors.login) {
    return errors.login;
  }
  if (touched.email && errors.email) {
    return errors.email;
  }
  if (touched.password && errors.password) {
    return errors.password;
  }
  return "";
};

export const RegisterPage = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const setUserState = useSetRecoilState(userState);
  const setIsAuthState = useSetRecoilState(isAuthState);
  const navigate = useNavigate();
  const [inputType, setInputType] = useState("password");

  const registerForm = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      axios
        .post(`${apiURL}/register`, values)
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
    registerForm.errors,
    registerForm.touched
  );

  return (
    <div className="authContainer">
      <form onSubmit={registerForm.handleSubmit} className="authBox">
        <h1 className="authHeader">Register</h1>
        <AuthInput
          name="login"
          placeholder="Login"
          onChange={registerForm.handleChange}
          onBlur={registerForm.handleBlur}
          value={registerForm.values.login}
        />
        <AuthInput
          name="email"
          placeholder="Email"
          onChange={registerForm.handleChange}
          onBlur={registerForm.handleBlur}
          value={registerForm.values.email}
        />
        <div className="passwordInputContainer">
          <AuthInput
            name="password"
            placeholder="Password"
            type={inputType}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            value={registerForm.values.password}
          />
          <ShowPasswordButton
            inputType={inputType}
            setInputType={setInputType}
          />
        </div>
        {firstErrorMessage && <AuthErrorText value={firstErrorMessage} />}
        <AuthButton type="submit" value="Register" />
        <AuthOr />
        <AuthGoogleButton />
      </form>
    </div>
  );
};
