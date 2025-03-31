import { useTranslation } from "react-i18next";
import icon1 from "../../assets/Icon1.svg";
import icon2 from "../../assets/Icon2.svg";
import icon3 from "../../assets/Icon3.svg";
import styles from "../../styles/MembershipSection.module.css";

const MembershipSection = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {t("membershipSection.titleParts.titlePart1")} <br />
            {t("membershipSection.titleParts.titlePart2")}
          </h1>
          <p className={styles.description}>
            {t("membershipSection.description")}?
          </p>
        </div>
        <div className={styles.blogContainer}>
          <div className={styles.blog}>
            <div className={styles.imageContainer}>
              <img src={icon1} alt="image" />
            </div>
            <div className={styles.blogTextContainer}>
              <h3 className={styles.blogTitle}>
                {t("membershipSection.cards.card1.titleParts.titlePart1")}{" "}
                <br />
                {t("membershipSection.cards.card1.titleParts.titlePart2")}
              </h3>
              <p className={styles.blogDescription}>
                {t("membershipSection.cards.card1.description")}
              </p>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.imageContainer}>
              <img src={icon2} alt="image" />
            </div>
            <div className={styles.blogTextContainer}>
              <h3 className={styles.blogTitle}>
                {t("membershipSection.cards.card2.titleParts.titlePart1")}{" "}
                <br />
                {t("membershipSection.cards.card2.titleParts.titlePart2")}
              </h3>
              <p className={styles.blogDescription}>
                {t("membershipSection.cards.card2.description")}
              </p>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.imageContainer}>
              <img src={icon3} alt="image" />
            </div>
            <div className={styles.blogTextContainer}>
              <h3 className={styles.blogTitle}>
                {t("membershipSection.cards.card3.titleParts.titlePart1")}{" "}
                <br />
                {t("membershipSection.cards.card3.titleParts.titlePart2")}
              </h3>
              <p className={styles.blogDescription}>
                {t("membershipSection.cards.card3.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
