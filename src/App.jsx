import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./i18n";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegistrationPage from "./pages/RegistrationPage";
import store from "./store/store";

function App() {
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
