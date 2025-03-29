import customerSectionImage from "../../assets/CustomersSectionImage.svg";
import styles from "../../styles/CustomerFeedbackSection.module.css";
import logo1 from "../../assets/Logo1.svg";
import logo2 from "../../assets/Logo2.svg";
import logo3 from "../../assets/Logo3.svg";
import logo4 from "../../assets/Logo4.svg";
import logo5 from "../../assets/Logo5.svg";
import logo6 from "../../assets/Logo6.svg";

const CustomerFeedbackSection = () => {
  return (
    <section className={styles.customerSection}>
      <div className={styles.container}>
        <img className={styles.image} src={customerSectionImage} alt="image" />
        <div className={styles.textContainer}>
          <p className={styles.feebackText}>
            Working with this team has been a game-changer for our sport. Their
            dedication and innovative approach have helped elevate British
            Dragon Board Racing to new heights. The support we received was
            beyond expectations, from strategic guidance to hands-on
            collaboration. Their commitment to excellence, attention to detail,
            and passion for our success have made a tangible difference. Thanks
            to their expertise, we've reached new audiences, improved our
            operations, and strengthened our community like never before.
          </p>
          <p className={styles.customerName}>Tim Smith</p>
          <p className={styles.customerCompany}>British Dragon Boat Racing Association</p>
          <div className={styles.icons}>
            <img src={logo1} alt="icon image" />
            <img src={logo2} alt="icon image" />
            <img src={logo3} alt="icon image" />
            <img src={logo4} alt="icon image" />
            <img src={logo5} alt="icon image" />
            <img src={logo6} alt="icon image" />
            <a href="#" className={styles.link}>Meet all customers</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedbackSection;
