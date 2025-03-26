import styles from "../../styles/Header.module.css";
import logo from "../../assets/Header-Logo.svg";
const Header = () => {
  return (
    <header>
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="header logo" />
            <nav className={styles.navLinks}>
                <ul className={styles.ulLinks}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
                <button className={styles.btn}>Register</button>
            </nav>
        </div>
    </header>
  );
};

export default Header;
