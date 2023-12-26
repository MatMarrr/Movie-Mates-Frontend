import React from "react";

export const AuthInput = ({
  name,
  type = "text",
  placeholder,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <input
      className="authInput"
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
};
