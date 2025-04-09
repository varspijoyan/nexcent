import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./i18n";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import { api } from "./services/api/api";
import { getMe } from "./services/api/auth";
import { signIn } from "./store/actions/authActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    if (accessToken) {
      getMe().then((data) => {
        dispatch(signIn(data.result));
      });
    }
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainPage />
              <Footer />
            </>
          }
        />
        <Route path="/signin-page" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
