import styles from "../../styles/MainSection.module.css";
import mainSectionImage from "../../assets/MainSectionImage.svg";
import { useTranslation } from "react-i18next";

const MainSection = () => {
    const { t } = useTranslation();
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{t("mainSection.titleParts.titlePart1")} <br /><span className={styles.highlight}>{t("mainSection.titleParts.titlePart2")}</span></h1>
                    <p className={styles.description}>{t("mainSection.description")}?</p>
                    <button className={styles.btn}>{t("mainSection.button")}</button>
                </div>
                <img className={styles.image} src={mainSectionImage} alt="main section image" />
            </div>
        </main>
    );
}

export default MainSection;