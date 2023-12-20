import React from "react";

export const AuthInput = ({ placeholder, onChange, value }) => {
  return (
    <input
      className="authInput"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
