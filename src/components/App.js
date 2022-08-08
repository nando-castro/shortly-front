import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "../assets/css/reset";
import GlobalStyle from "../assets/css/global";
import HomeScreen from "./home/HomeScreen";
import LoginScreen from "./login/Login";
import RegisterScreen from "./register/Register";
import RankingScreen from "./ranking/Ranking";

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/" element={<RankingScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
