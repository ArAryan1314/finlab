import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const AboutRowThree = () => {
  return (
    <div>
      <div className={`${styles.paymentWrapper}`}>
        <div className={`${styles.rowOne}`}>
          <div className={`${styles.heading}`}>
            <h2>Empowering a world of confident and informed</h2>
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
            <div className={styles.heading}>
              Business all-ready running finlab revolutionizing financial
            </div>
            <div className={styles.desc}>
              <p>
                To transform how people perceive and interact with their
                finances, making money.
              </p>
            </div>
            <div
              className={` ${styles.image} ${styles.slideOne} ${styles.map}  `}
            >
              <Image
                src="/images/bar1.jpg"
                className={styles.img}
                fill
                sizes="100vw"
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className={`${styles.imageCard}  `}>
            <div className={styles.heading}>
              Change the way you use your money revolution
            </div>
            <div className={styles.desc}>
              <p>
                Founded on the principle of making financial management simple
                and accessible.
              </p>
            </div>
            <div className={` ${styles.image} ${styles.slideOne} `}>
              <Image
                src="/images/bar2.jpg"
                className={styles.img}
                fill
                sizes="100vw"
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className={`${styles.imageCard}  `}>
            <div className={styles.heading}>
              One app for all your money things make your payment
            </div>
            <div className={styles.desc}>
              <p>
                Join the thousands of users who are already mastering their
                money with Finlab.
              </p>
            </div>
            <div className={` ${styles.image} ${styles.slideOne} `}>
              <Image
                src="/images/bar3.jpg"
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
  );
};

export default AboutRowThree;
