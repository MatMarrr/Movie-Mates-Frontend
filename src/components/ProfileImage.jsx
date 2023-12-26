import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import userState from "./../recoilStates/userState";

export const ProfileImage = ({ href }) => {
  const user = useRecoilValue(userState);
  const avatarUrl = user.avatar_url ? user.avatar_url : undefined;
  const initialLetter = user.login ? user.login.charAt(0).toUpperCase() : "?";

  return (
    <Link to={href} style={{ textDecoration: "none" }}>
      {avatarUrl ? (
        <img src={avatarUrl} className="profileImage" alt="Profile" />
      ) : (
        <div className="profileImageText">{initialLetter}</div>
      )}
    </Link>
  );
};
