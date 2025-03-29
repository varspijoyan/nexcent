import howToSectionImage from "../../assets/HowToSectionImage.svg";
import styles from "../../styles/HowToSection.module.css";

const HowToSection = () => {
  return (
    <section>
      <div className={styles.container}>
        <img className={styles.image} src={howToSectionImage} alt="image" />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>How to design your site footer like we did</h1>
          <p className={styles.description}>
            A well-designed footer enhances user experience and strengthens your
            brand identity. It should be clean, informative, and easy to
            navigate. Consider including essential links, contact details, and
            social media icons to keep visitors connected. With the right
            design, your footer can be both functional and aesthetically
            pleasing—just like ours.
          </p>
          <button className={styles.btn}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
