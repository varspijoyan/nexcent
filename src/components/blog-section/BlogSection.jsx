import { useTranslation } from "react-i18next";
import image1 from "../../assets/BlogImage1.svg";
import image2 from "../../assets/BlogSectionImage2.svg";
import image3 from "../../assets/BlogSectionImage3.svg";
import styles from "../../styles/BlogSection.module.css";
import i18n from "../../i18n";

const BlogSection = () => {
  const { t } = useTranslation();
  const language = i18n.language;
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{t("blogSection.title")}</h1>
          <p className={styles.description}>{t("blogSection.description")}</p>
        </div>
        <div className={styles.blogContainer}>
          <div className={styles.blog}>
            <img src={image1} alt="blog image" />
            <div className={`${styles.blogTextContainer} ${language === 'ru' ? styles.ruBlogTextContainer : ""}`}>
              <h4 className={styles.blogTitle}>
                {t("blogSection.blogCards.card1.titleParts.titlePart1")} <br />
                {t("blogSection.blogCards.card1.titleParts.titlePart2")}
                <br />
                {t("blogSection.blogCards.card1.titleParts.titlePart3")}
              </h4>
              <a href="#" className={styles.link}>
                {t("blogSection.blogCards.link")}
              </a>
            </div>
          </div>
          <div className={styles.blog}>
            <img src={image2} alt="blog image" />
            <div className={`${styles.blogTextContainer} ${language === 'ru' ? styles.ruBlogTextContainer : ""}`}>
              <h4 className={styles.blogTitle}>
                {t("blogSection.blogCards.card2.titleParts.titlePart1")} <br />
                {t("blogSection.blogCards.card2.titleParts.titlePart2")} <br />
                {t("blogSection.blogCards.card2.titleParts.titlePart3")}?
              </h4>
              <a href="#" className={styles.link}>
                {t("blogSection.blogCards.link")}
              </a>
            </div>
          </div>
          <div className={styles.blog}>
            <img src={image3} alt="blog image" />
            <div className={styles.blogTextContainer}>
              <h4 className={styles.blogTitle}>
                {t("blogSection.blogCards.card3.titleParts.titlePart1")} <br />
                {t("blogSection.blogCards.card3.titleParts.titlePart2")} <br />
                {t("blogSection.blogCards.card3.titleParts.titlePart3")}
              </h4>
              <a href="#" className={styles.link}>
               {t("blogSection.blogCards.link")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
