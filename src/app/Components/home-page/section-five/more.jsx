import React from "react";
import styles from "./more.module.scss";

const MoreContainer = () => {
  return (
    <div>
      <div className={styles.more_wrapper}>
        <div className={`${styles.rowOne}`}>
          <div className={`${styles.heading}`}>
            <h2>More that just a scheduling tool</h2>
          </div>
          <div className={`${styles.desc}`}>
            <p>
              Track the growth and engagement of your newsletter subscribers
              with detailed analytics. Understand what works
            </p>
          </div>

          <div className={styles.two_buttons}>
            <button className={styles.content_black}>
              <div className={`${styles.content}  `}>
                <div className={styles.text}>Learn More</div>
                <div className={styles.hoverText}>Learn More</div>
              </div>
            </button>
            <button>
              <div className={styles.content}>
                <div className={styles.text}>Learn More</div>
                <div className={styles.hoverText}>Learn More</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreContainer;
