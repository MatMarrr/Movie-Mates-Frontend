import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { LandingPage } from "./components/pages/LandingPage";
import { LoginPage } from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { HomePage } from "./components/pages/HomePage";
import { ProfilePage } from "./components/pages/ProfilePage";
import { TrendingPage } from "./components/pages/TrendingPage";
import { GoogleCallback } from "./components/pages/GoogleCallback";
import { useRecoilValue } from "recoil";
import isAuthState from "./recoilStates/isAuthState";

function App() {
  const isAuth = useRecoilValue(isAuthState);

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
