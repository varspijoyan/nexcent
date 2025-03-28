import styles from "../../styles/MainSection.module.css";
import mainSectionImage from "../../assets/mainSectionImage.svg";

const MainSection = () => {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lesson and insights <br /><span className={styles.highlight}>from 8 years</span></h1>
                    <p className={styles.description}>Where to grow your business as a photographer: site or social media?</p>
                    <button className={styles.btn}>Register</button>
                </div>
                <img className={styles.image} src={mainSectionImage} alt="main section image" />
            </div>
        </main>
    );
}

export default MainSection;