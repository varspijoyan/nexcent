import { useCallback, useState } from "react";
import styles from "../../styles/Language.module.css";
import i18n from "../../i18n";

const Language = () => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || 'en');
    const changeLanguage = useCallback((lng) => {
        setLanguage(lng);
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);
    }, []);

    return (
        <div className={styles.languageContainer}>
            <div 
                className={`${styles.language} ${language === 'en' ? styles.langActive : ""}`}
                onClick={() => changeLanguage('en')}
            >
                🇺🇸
            </div>
            <div 
                className={`${styles.language} ${language === 'ru' ? styles.langActive : ""}`}
                onClick={() => changeLanguage('ru')}
            >
                🇷🇺
            </div>
        </div>
    );
}

export default Language;