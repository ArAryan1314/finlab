import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const AboutRowFour = () => {
  return (
    <div>
      <div className={`${styles.four_wrapper}`}>
        <div className={`${styles.rowOne}`}>
          <div className={`${styles.heading}`}>
            <h2>Amazing people create fantastic Features.</h2>
          </div>
          <div className={`${styles.desc}`}>
            <p>
              Track the growth and engagement of your newsletter subscribers
              with detailed analytics. Understand what works.
            </p>
          </div>
        </div>

        <div className={styles.imageColum}>
          <div className={`${styles.imageCard}  `}>
            <div className={` ${styles.image} ${styles.slideOne}  `}>
              <Image
                src="/profile/profile1.jpg"
                className={styles.img}
                fill
                sizes="100vw"
                alt="Picture of the author"
              />
            </div>
            <div className={styles.heading}>Alex smith</div>
            <div className={styles.desc}>
              <p>Chief technology officer (CTO)</p>
            </div>
          </div>
          <div className={`${styles.imageCard}  `}>
            <div className={` ${styles.image} ${styles.slideOne} `}>
              <Image
                src="/profile/profile2.jpg"
                className={styles.img}
                fill
                sizes="100vw"
                alt="Picture of the author"
              />
            </div>
            <div className={styles.heading}>David conway</div>
            <div className={styles.desc}>
              <p>Founder & CEO</p>
            </div>
          </div>
          <div className={`${styles.imageCard}  `}>
            <div
              className={` ${styles.image} ${styles.slideOne}  `}
            >
              <Image
                src="/profile/profile3.jpg"
                className={styles.img}
                fill
                sizes="100vw"
                alt="Picture of the author"
              />
            </div>
            <div className={styles.heading}>Steven jacsion</div>
            <div className={styles.desc}>
              <p>Account officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRowFour;
