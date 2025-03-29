import styles from "../../styles/ServiceSection.module.css";
import icon1 from "../../assets/Icon3.svg";
import icon2 from "../../assets/Icon4.svg";
import icon3 from "../../assets/Icon5.svg";
import icon4 from "../../assets/Icon6.svg";

const ServiceSection = () => {
    return (
        <section className={styles.serviceSection}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Helping a local <br /><span className={styles.highlight}>business reinvent itself</span></h1>
                    <p className={styles.description}>We reached here with our hard work and dedication</p>
                </div>
                <div className={styles.serviceContainer}>
                    <div className={styles.pair1}>
                    <div className={styles.service}>
                        <img src={icon2} alt="service type image" />
                        <div className={styles.serviceTextContainer}>
                            <h3 className={styles.amount}>2,245,341</h3>
                            <p className={styles.type}>Members</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={icon3} alt="service type image" />
                        <div className={styles.serviceTextContainer}>
                            <h3 className={styles.amount}>828,867</h3>
                            <p className={styles.type}>Events</p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.pair2}>
                    <div className={styles.service}>
                        <img src={icon1} alt="service type image" />
                        <div className={styles.serviceTextContainer}>
                            <h3 className={styles.amount}>46,328</h3>
                            <p className={styles.type}>Clubs</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={icon4} alt="service type image" />
                        <div className={styles.serviceTextContainer}>
                            <h3 className={styles.amount}>1,926,436</h3>
                            <p className={styles.type}>Payments</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;