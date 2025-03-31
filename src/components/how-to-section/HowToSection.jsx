import { useTranslation } from "react-i18next";
import howToSectionImage from "../../assets/HowToSectionImage.svg";
import styles from "../../styles/HowToSection.module.css";
import i18n from "../../i18n";
const HowToSection = () => {
  const { t } = useTranslation();
  const language = i18n.language;
  return (
    <section>
      <div className={styles.container}>
        <img className={styles.image} src={howToSectionImage} alt="image" />
        <div className={styles.textContainer}>
          <h1 className={`${styles.title} ${language === 'ru' ? styles.titleRu : ""}`}>{t("howToSection.title")}</h1>
          <p className={styles.description}>{t("howToSection.description")}</p>
          <button className={styles.btn}>{t("howToSection.button")}</button>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
