import styles from "../../styles/Language.module.css";

const Language = () => {
    return (
        <div className={styles.languageContainer}>
            <div className={styles.language}>
                🇺🇸
            </div>
            <div className={styles.language}>
                🇷🇺
            </div>
        </div>
    );
}

export default Language;