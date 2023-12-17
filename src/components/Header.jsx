import React from "react";
import { LogoButton } from "./LogoButton";
import { HeaderLink } from "./HeaderLink";
import { RegisterButton } from "./RegisterButton";
import { SignInButton } from "./SignInButton";
import { ProfileImage } from "./ProfileImage";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <LogoButton />
        <HeaderLink href="/" text="Home" />
        <HeaderLink href="/trending" text="Trending" />
        <HeaderLink href="/profile" text="Profile" />
      </div>
      <div className="headerContent">
        <RegisterButton />
        <SignInButton />
        <ProfileImage imageUrl="" initialLetter="M" href="/profile" />
      </div>
    </div>
  );
};
