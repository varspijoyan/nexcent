import styles from "../../styles/Footer.module.css";
import footerLogo from "../../assets/Footer-Logo.svg";
import igLogo from "../../assets/ig-logo.svg";
import twtLogo from "../../assets/twitter-logo.svg";
import ytLogo from "../../assets/yt-logo.svg";

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.mainInfo}>
                    <img src={footerLogo} alt="footer logo" />
                    <div className={styles.text}>
                        <p>Copyright @ 2025 Landify UI Kit.</p>
                        <p>All rights reserved</p>
                    </div>
                    <div className={styles.iconLinks}>
                        <div className={styles.icon}>
                            <img src={igLogo} alt="instagram logo" />
                        </div>
                        <div className={styles.icon}>
                            <img src={twtLogo} alt="twitter logo" />
                        </div>
                        <div className={styles.icon}>
                            <img src={ytLogo} alt="youtube logo" />
                        </div>
                    </div>
                </div>
                <div className={styles.footerLinks}>
                    <div className={styles.link}>
                        <h3 className={styles.title}>Company</h3>
                        <p><a href="#">About us</a></p>
                        <p><a href="#">Blog</a></p>
                        <p><a href="#">Contact us</a></p>
                        <p><a href="#">Pricing</a></p>
                        <p><a href="#">Testimonials</a></p>
                    </div>
                    <div className={styles.link}>
                        <h3 className={styles.title}>Support</h3>
                        <p><a href="#">Help center</a></p>
                        <p><a href="#">Terms of service</a></p>
                        <p><a href="#">Legal</a></p>
                        <p><a href="#">Privacy policy</a></p>
                        <p><a href="#">Status</a></p>
                    </div>
                    <div className={styles.link}>
                        <h3 className={styles.title}>Stay up to date</h3>
                        <input type="email" name="email" placeholder="Enter your email"/>
                        <button className={styles.btn}>Submit</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;