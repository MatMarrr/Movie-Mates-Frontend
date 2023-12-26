import React from "react";
import { useRecoilValue } from "recoil";
import userState from "./../../recoilStates/userState";

export const HomePage = () => {
  const user = useRecoilValue(userState);

  const divStyle = {
    color: "white",
    fontWeight: 700,
    fontSize: 26,
  };

  return (
    <div style={divStyle}>
      <h1>HomePage</h1>
      <p>User:</p>
      <p>ID: {user.id}</p>
      <p>Login: {user.login}</p>
      <p>Email: {user.email}</p>
      <p>Email Verified At: {user.email_verified_at}</p>
      <p>Google ID: {user.google_id}</p>
      <p>Avatar URL: {user.avatar_url}</p>
      <p>Created At: {user.created_at}</p>
      <p>Updated At: {user.updated_at}</p>
    </div>
  );
};
