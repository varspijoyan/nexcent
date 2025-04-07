import Hamburger from "hamburger-react";
import { useState } from "react";
import logo from "../../assets/Header-Logo.svg";
import styles from "../../styles/Header.module.css";
import Language from "../language/Language";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
 
  return (
    <header>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src={logo}
          alt="header logo"
          onClick={() => window.scrollTo(0, 0)}
        />
        <nav className={styles.navLinks}>
          <ul className={`${styles.ulLinks} ${isOpen ? styles.show : ""}`}>
            <li>
              <a href="#">{t("header.links.home")}</a>
            </li>
            <li>
              <a href="#">{t("header.links.features")}</a>
            </li>
            <li>
              <a href="#">{t("header.links.community")}</a>
            </li>
            <li>
              <a href="#">{t("header.links.blog")}</a>
            </li>
            <li>
              <a href="#">{t("header.links.pricing")}</a>
            </li>
          </ul>
          <button 
            className={styles.btn}
          >{t("header.button")}</button>
          <Language />
          <div className={styles.respMenu}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
