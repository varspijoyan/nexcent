import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header-Logo.svg";
import {
  getAuthorizationData,
  getUserData,
} from "../../store/selectors/authSelectors";
import styles from "../../styles/Header.module.css";
import Language from "../language/Language";
import { logout } from "../../store/actions/authActions";

const Header = () => {
  const user = useSelector(getUserData);
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector(getAuthorizationData);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = "#" + red + green + blue;
    return color;
  }
  
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [color, setColor] = useState("#000000");
  
  useEffect(() => {
    if (user) {
        const storageKey = `${user.id}`;

        const savedColors = localStorage.getItem(storageKey);
        if (savedColors) {
            const { background, color } = JSON.parse(savedColors);
            setBackgroundColor(background);
            setColor(color);
        } else {
            const bg = generateRandomColor();
            const col = generateRandomColor();
            setBackgroundColor(bg);
            setColor(col);
            localStorage.setItem(storageKey, JSON.stringify({ background: bg, text: col }));
        }
    }
}, [user]);

  const inlineStyles = {
    backgroundColor: backgroundColor,
    color: color, 
    borderRadius: 50 + "%",
    width: 45 + "px",
    height: 45 + "px",
    fontWeight: 600,
    fontSize: 20 + "px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };


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
          {!isAuthorized ? (
            <button
              className={styles.btn}
              onClick={() => navigate("/signin-page")}
            >
              {t("header.button")}
            </button>
          ) : (
            <>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>
                  <div style={inlineStyles}>
                    {`${user?.first_name[0]}${user?.last_name[0]}`}
                  </div>
                  <div className={styles.info}>
                    <div className={styles.info}>
                      {user?.first_name} {user?.last_name}
                    </div>
                  </div>
                </div>
                <button className={styles.logoutBtn} onClick={() => dispatch(logout())}>Logout</button>
              </div>
            </>
          )}
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
