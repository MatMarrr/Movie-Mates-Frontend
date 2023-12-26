import React, { useState } from "react";
import { AuthInput } from "../AuthInput";
import { AuthButton } from "../AuthButton";
import { AuthOr } from "../AuthOr";
import { AuthGoogleButton } from "../AuthGoogleButton";
import { AuthErrorText } from "../authErrorText";
import { useFormik } from "formik";
import { loginSchema } from "./../../validationRules/loginSchema";
import { ShowPasswordButton } from "../ShowPasswordButton";

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
  const [inputType, setInputType] = useState("password");

  const loginForm = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
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
