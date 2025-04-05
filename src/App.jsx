import { Provider, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./i18n";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegistrationPage from "./pages/RegistrationPage";
import store from "./store/store";
import { useEffect } from "react";
import { api } from "./services/api/api";
import { getUser } from "./services/auth";
import { signIn } from "./store/actions/authorizationActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const access = localStorage.getItem("access");
    api.defaults.headers.common["Authorization"] = `Bearer ${access}`;
    if(access) {
      getUser().then(data => {
        dispatch(signIn(data.result))
      });
    }
  }, [])
  return (
    <>
      <Provider store={store}>
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
          <Route path="/registration-page" element={<RegistrationPage />} />
          <Route path="/login-page" element={<LoginPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
