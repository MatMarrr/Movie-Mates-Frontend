import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import tokenState from "./../../recoilStates/tokenState";
import userState from "./../../recoilStates/userState";
import isAuthState from "./../../recoilStates/isAuthState";
import axios from "axios";

export const GoogleCallback = () => {
  const setTokenState = useSetRecoilState(tokenState);
  const setUserState = useSetRecoilState(userState);
  const setIsAuthState = useSetRecoilState(isAuthState);
  const navigate = useNavigate();

  const apiURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      setTokenState(token);

      axios
        .get(`${apiURL}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserState(response.data);
          setIsAuthState(true);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [setTokenState]);

  return null;
};
