import { useTranslation } from "react-i18next";
import learnMoreSectionImage from "../../assets/LearnMoreSectionImage.svg";
import styles from "../../styles/LearnMoreSection.module.css";

const LearnMoreSection = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className={styles.container}>
        <img className={styles.image} src={learnMoreSectionImage} alt="section image" />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {t("learnMoreSection.title")}
          </h1>
          <p className={styles.description}>{t("learnMoreSection.description")}</p>
          <button className={styles.btn}>{t("learnMoreSection.button")}</button>
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSection;
