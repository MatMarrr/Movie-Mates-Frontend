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
import { Navigate } from "react-router-dom";
import userState from "./recoilStates/userState";
import isAuthState from "./recoilStates/isAuthState";
import axios from "axios";

const RequireAuth = ({ Component, isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

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
          if (response.data) {
            setUserState(response.data);
          } else {
            setIsAuthState(false);
            localStorage.removeItem("token");
          }
        })
        .catch((error) => {
          console.error(error);
          setIsAuthState(false);
          localStorage.removeItem("token");
        });
    }
  }, [setUserState, setIsAuthState, apiURL]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* No auth routes*/}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/google-callback" element={<GoogleCallback />} />

          {/* Auth routes*/}
          <Route
            path="/home"
            element={<RequireAuth isAuth={isAuth} Component={HomePage} />}
          />
          <Route
            path="/trending"
            element={<RequireAuth isAuth={isAuth} Component={TrendingPage} />}
          />
          <Route
            path="/profile"
            element={<RequireAuth isAuth={isAuth} Component={ProfilePage} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
