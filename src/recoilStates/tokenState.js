import { atom } from "recoil";

const tokenState = atom({
  key: "authTokenState",
  default: "",
});

export default tokenState;
