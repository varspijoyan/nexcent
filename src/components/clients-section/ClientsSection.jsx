import logo1 from "../../assets/Logo1.svg";
import logo2 from "../../assets/Logo2.svg";
import logo3 from "../../assets/Logo3.svg";
import logo4 from "../../assets/Logo4.svg";
import logo5 from "../../assets/Logo5.svg";
import logo6 from "../../assets/Logo6.svg";
import styles from "../../styles/ClientsSection.module.css";

const ClientsSection = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Our Clients</h1>
          <p className={styles.description}>
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.image}>
            <img src={logo1} alt="logo image" />
          </div>
          <div className={styles.image}>
            <img src={logo2} alt="logo image" />
          </div>
          <div className={styles.image}>
            <img src={logo3} alt="logo image" />
          </div>
          <div className={styles.image}>
            <img src={logo4} alt="logo image" />
          </div>
          <div className={styles.image}>
            <img src={logo5} alt="logo image" />
          </div>
          <div className={styles.image}>
            <img src={logo6} alt="logo image" />
          </div>
          <div className={styles.image}>
            <img src={logo3} alt="logo image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
