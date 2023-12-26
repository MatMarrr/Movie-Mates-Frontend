import React from "react";
import { AuthInput } from "../AuthInput";
import { AuthButton } from "../AuthButton";
import { AuthOr } from "../AuthOr";
import { AuthGoogleButton } from "../AuthGoogleButton";
import { AuthErrorText } from "../authErrorText";
import { useFormik } from "formik";
import { registerSchema } from "./../../validationRules/registerSchema";

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
  const registerForm = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
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
            type="password"
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            value={registerForm.values.password}
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
