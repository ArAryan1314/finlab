import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const FeatureRowTwo = () => {
  return (
    <div>
      <div className={`${styles.paymentWrapper}`}>
        <div className={`${styles.rowOne}`}>
          <div className={`${styles.heading}`}>
            <h2>Smart tools for smarter financial decisions</h2>
          </div>
          <div className={`${styles.desc}`}>
            <p>
              Track the growth and engagement of your newsletter subscribers
              with detailed analytics. Understand what works and supercharge
              your reach.
            </p>
          </div>
        </div>

        <div className={styles.imageColum}>
          <div className={`${styles.imageCard}  `}>
            <div className={styles.heading}>Financial goal setting</div>
            <div className={styles.desc}>
              <p>
                Bank-level encryption ensures financial information stays
                private money.
              </p>
            </div>
            <div className={styles.block}>
              <div
                className={` ${styles.image} ${styles.slideOne} ${styles.map}  `}
              >
                <Image
                  src="/images/bar7.jpg"
                  className={styles.img}
                  fill
                  sizes="100vw"
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>

          {/* Card Two */}

          <div className={`${styles.imageCard}  `}>
            <div className={styles.heading}>Automated expense tracking</div>
            <div className={styles.desc}>
              <p>
                Have more than 1 bank account credit. Our platform is already
                integrated.
              </p>
            </div>

            <div className={styles.block}>
              <div
                className={` ${styles.image} ${styles.slideOne}   ${styles.small}`}
              >
                <Image
                  src="/images/bar8.jpg"
                  className={styles.img}
                  fill
                  sizes="100vw"
                  alt="Picture of the author"
                />
              </div>
              <div className={styles.heading}>Insight Payment</div>
              <div className={styles.desc}>
                <p>
                  Smart categorization and real-time updates for complete
                  spending visibility. set and achieve savings goals with clear
                  milestones
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.imageCard}  `}>
            <div className={styles.heading}>Automated expense tracking</div>
            <div className={styles.desc}>
              <p>
                Have more than 1 bank account credit. Our platform is already
                integrated.
              </p>
            </div>
            <div className={styles.block}>
              <div className={` ${styles.image} ${styles.slideOne} `}>
                <Image
                  src="/images/bar9.jpg"
                  className={styles.img}
                  fill
                  sizes="100vw"
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRowTwo;
