import "./index.css";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { LandingPage } from "./components/pages/LandingPage";
import { LoginPage } from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { HomePage } from "./components/pages/HomePage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { TrendingPage } from "./components/pages/TrendingPage";
import { GoogleCallback } from "./components/pages/GoogleCallback";
import { useSetRecoilState, useRecoilValue } from "recoil";
import userState from "./recoilStates/userState";
import isAuthState from "./recoilStates/isAuthState";
import axios from "axios";

function App() {
  const apiURL = import.meta.env.VITE_API_URL;
  const setUserState = useSetRecoilState(userState);
  const setIsAuthState = useSetRecoilState(isAuthState);

  const isAuth = useRecoilValue(isAuthState);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthState(true);
      axios
        .get(`${apiURL}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserState(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [setUserState]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={isAuth ? <HomePage /> : <LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/google-callback" element={<GoogleCallback />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
