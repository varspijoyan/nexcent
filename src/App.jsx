import { Route, Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./i18n";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
}

export default App;
