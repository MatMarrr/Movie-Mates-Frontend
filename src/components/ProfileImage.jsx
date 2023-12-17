import React from "react";
import { Link } from "react-router-dom";

export const ProfileImage = ({ imageUrl, initialLetter, href }) => {
  return (
    <Link to={href} style={{ textDecoration: "none" }}>
      {imageUrl ? (
        <img src={imageUrl} className="profileImage" alt="Profile" />
      ) : (
        <div className="profileImageText">{initialLetter}</div>
      )}
    </Link>
  );
};
