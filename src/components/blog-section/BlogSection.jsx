import styles from "../../styles/BlogSection.module.css";
import image1 from "../../assets/BlogImage1.svg";
import image2 from "../../assets/BlogSectionImage2.svg";
import image3 from "../../assets/BlogSectionImage3.svg";
const BlogSection = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Caring is the new marketing</h1>
          <p className={styles.description}>
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div className={styles.blogContainer}>
            <div className={styles.blog}>
                <img src={image1} alt="blog image" />
                <div className={styles.blogTextContainer}>
                    <h4 className={styles.blogTitle}>Creating Streamlined <br />Safeguarding Processes with <br />OneRed</h4>
                    <a href="#" className={styles.link}>Read more</a>
                </div>
            </div>
            <div className={styles.blog}>
                <img src={image2} alt="blog image" />
                <div className={styles.blogTextContainer}>
                    <h4 className={styles.blogTitle}>What are you safeguarding <br />responsibilities and how can <br />you manage them?</h4>
                    <a href="#" className={styles.link}>Read more</a>
                </div>
            </div>
            <div className={styles.blog}>
                <img src={image3} alt="blog image" />
                <div className={styles.blogTextContainer}>
                    <h4 className={styles.blogTitle}>Revamping the Membership <br />Model with Triathlon <br />Australia</h4>
                    <a href="#" className={styles.link}>Read more</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
