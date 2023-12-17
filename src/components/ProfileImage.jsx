import React from "react";

export const ProfileImage = ({ imageUrl, initialLetter, href }) => {
  return (
    <a href={href} style={{ textDecoration: "none" }}>
      {imageUrl ? (
        <img src={imageUrl} className="profileImage" alt="Profile" />
      ) : (
        <div className="profileImageText">{initialLetter}</div>
      )}
    </a>
  );
};
