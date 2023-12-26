import React from "react";
import { LogoButton } from "./LogoButton";
import { HeaderLink } from "./HeaderLink";
import { RegisterButton } from "./RegisterButton";
import { SignInButton } from "./SignInButton";
import { ProfileImage } from "./ProfileImage";
import { SignOutButton } from "./SignOutButton";
import { useRecoilValue } from "recoil";
import isAuthState from "./../recoilStates/isAuthState";

export const Header = () => {
  const isAuth = useRecoilValue(isAuthState);

  return (
    <div className="header">
      <div className="headerContent">
        <LogoButton />
        <HeaderLink href="/" text="Home" />
        <HeaderLink href="/trending" text="Trending" />
        <HeaderLink href="/profile" text="Profile" />
      </div>
      <div className="headerContent">
        {isAuth ? (
          <>
            <SignOutButton />
            <ProfileImage imageUrl="" initialLetter="M" href="/profile" />
          </>
        ) : (
          <>
            <RegisterButton />
            <SignInButton />
          </>
        )}
      </div>
    </div>
  );
};
