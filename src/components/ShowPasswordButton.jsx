import React, { useState } from "react";
import grayEyeIcon from "./../public/images/passwordEyeIconGray.svg";
import blackEyeIcon from "./../public/images/passwordEyeIconBlack.svg";

export const ShowPasswordButton = ({ inputType, setInputType }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleIcon = () => {
    setIsActive(!isActive);
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div
      className="passwordEyeIcon"
      onClick={toggleIcon}
      style={{
        backgroundImage: `url(${isActive ? blackEyeIcon : grayEyeIcon})`,
      }}
    ></div>
  );
};
