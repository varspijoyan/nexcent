import Hamburger from "hamburger-react";
import { useState } from "react";
import logo from "../../assets/Header-Logo.svg";
import styles from "../../styles/Header.module.css";
import Language from "../language/Language";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
          <button className={styles.btn}>Register</button>
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
