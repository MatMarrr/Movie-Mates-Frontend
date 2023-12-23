import { atom } from "recoil";

const isAuthState = atom({
  key: "isAuthState",
  default: false,
});

export default isAuthState;
