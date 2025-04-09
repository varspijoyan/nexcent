import styles from "../../styles/MainSection.module.css";
import mainSectionImage from "../../assets/MainSectionImage.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {getAuthorizationData} from "../../store/selectors/authSelectors";

const MainSection = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const {isAuthorized} = useSelector(getAuthorizationData);

    return (
        <main>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{t("mainSection.titleParts.titlePart1")} <br /><span className={styles.highlight}>{t("mainSection.titleParts.titlePart2")}</span></h1>
                    <p className={styles.description}>{t("mainSection.description")}?</p>
                    {!isAuthorized ? (
                         <button 
                         className={styles.btn}
                         onClick={() => navigate('/signin-page')}
                     >{t("mainSection.button")}</button>
                    ) : null}
                </div>
                <img className={styles.image} src={mainSectionImage} alt="main section image" />
            </div>
        </main>
    );
}

export default MainSection;