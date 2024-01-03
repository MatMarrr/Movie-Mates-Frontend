import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userState from "./../../recoilStates/userState";
import AvatarUpload from "../AvatarUpload";
import avatarLoader from "./../../public/images/avatarLoader.svg";
import axios from "axios";

export const ProfilePage = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);
  const [isLoginChange, setIsLoginChange] = useState(false);
  const [changeLogin, setChangeLogin] = useState(user.login || "");
  const avatarUrl = user.avatar_url;
  const initialLetter = user.login ? user.login.charAt(0).toUpperCase() : "?";

  const handleImageClick = () => {
    AvatarUpload.triggerFileUpload();
  };

  const handleInputChange = (event) => {
    setChangeLogin(event.target.value);
  };

  const handleLoginChange = async () => {
    setIsLoginChange(!isLoginChange);
    if (isLoginChange && changeLogin !== user.login) {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      setUser((currentUser) => ({
        ...currentUser,
        login: "Loading...",
      }));

      await axios.patch(
        `${apiURL}/user/login`,
        { login: changeLogin },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser((currentUser) => ({
        ...currentUser,
        login: changeLogin,
      }));

      console.log("Login updated in database");
    }
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

      <div className="profileNameContainer">
        {isLoginChange ? (
          <input
            type="text"
            className="loginChangeInput"
            value={changeLogin}
            onChange={handleInputChange}
          />
        ) : (
          <div className="profileNameText">
            {user.login ? user.login : "Loading..."}
          </div>
        )}

        {user.login && (
          <button onClick={handleLoginChange} className="profileChangeButton">
            {isLoginChange ? "Save" : "Change"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
