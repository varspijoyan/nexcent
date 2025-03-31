import styles from "../../styles/Footer.module.css";
import footerLogo from "../../assets/Footer-Logo.svg";
import igLogo from "../../assets/ig-logo.svg";
import twtLogo from "../../assets/twitter-logo.svg";
import ytLogo from "../../assets/yt-logo.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
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
                        <h3 className={styles.title}>{t("footer.links.company.title")}</h3>
                        <p><a href="#">{t("footer.links.company.aboutUs")}</a></p>
                        <p><a href="#">{t("footer.links.company.blog")}</a></p>
                        <p><a href="#">{t("footer.links.company.contactUs")}</a></p>
                        <p><a href="#">{t("footer.links.company.pricing")}</a></p>
                        <p><a href="#">{t("footer.links.company.testimonials")}</a></p>
                    </div>
                    <div className={styles.link}>
                        <h3 className={styles.title}>{t("footer.links.support.title")}</h3>
                        <p><a href="#">{t("footer.links.support.helpCenter")}</a></p>
                        <p><a href="#">{t("footer.links.support.terms")}</a></p>
                        <p><a href="#">{t("footer.links.support.legal")}</a></p>
                        <p><a href="#">{t("footer.links.support.privacy")}</a></p>
                        <p><a href="#">{t("footer.links.support.status")}</a></p>
                    </div>
                    <div className={styles.link}>
                        <h3 className={styles.title}>{t("footer.links.input.title")}</h3>
                        <input type="email" name="email" placeholder="Enter your email"/>
                        <button className={styles.btn}>{t("footer.links.input.button")}</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;