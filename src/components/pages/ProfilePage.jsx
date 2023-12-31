import React from "react";
import { useRecoilValue } from "recoil";
import userState from "./../../recoilStates/userState";
import AvatarUpload from "../AvatarUpload";
import avatarLoader from "./../../public/images/avatarLoader.svg";

export const ProfilePage = () => {
  const user = useRecoilValue(userState);
  const avatarUrl = user.avatar_url;
  const initialLetter = user.login ? user.login.charAt(0).toUpperCase() : "?";

  const handleImageClick = () => {
    AvatarUpload.triggerFileUpload();
  };

  return (
    <div className="profilePageContainer">
      <AvatarUpload />
      {avatarUrl === "loading" || initialLetter === "?" ? (
        <img src={avatarLoader} className="profileImageCircle" alt="Loading" />
      ) : avatarUrl ? (
        <img
          src={avatarUrl}
          className="profileImageCircle"
          alt="Profile"
          onClick={handleImageClick}
        />
      ) : (
        <div className="profileImageTextCircle" onClick={handleImageClick}>
          {initialLetter}
        </div>
      )}

      <div className="profileNameText">
        {user.login ? user.login : "Loading..."}
      </div>
    </div>
  );
};

export default ProfilePage;
