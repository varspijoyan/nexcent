import icon1 from "../../assets/Icon1.svg";
import icon2 from "../../assets/Icon2.svg";
import icon3 from "../../assets/Icon3.svg";
import styles from "../../styles/MembershipSection.module.css";

const MembershipSection = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Manage your entire community <br />
            in a single system
          </h1>
          <p className={styles.description}>Who is Nexcent suitable for?</p>
        </div>
        <div className={styles.blogContainer}>
          <div className={styles.blog}>
            <div className={styles.imageContainer}>
              <img src={icon1} alt="image" />
            </div>
            <div className={styles.blogTextContainer}>
              <h3 className={styles.blogTitle}>
                Membership <br />
                Organizations
              </h3>
              <p className={styles.blogDescription}>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.imageContainer}>
              <img src={icon2} alt="image" />
            </div>
            <div className={styles.blogTextContainer}>
              <h3 className={styles.blogTitle}>
                National <br />
                Associations
              </h3>
              <p className={styles.blogDescription}>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.imageContainer}>
              <img src={icon3} alt="image" />
            </div>
            <div className={styles.blogTextContainer}>
              <h3 className={styles.blogTitle}>
                Clubs And <br />
                Groups
              </h3>
              <p className={styles.blogDescription}>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
