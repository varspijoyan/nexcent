import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./i18n";
import MainPage from "./pages/MainPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

function App() {
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
        </Routes>
    </>
  );
}

export default App;
