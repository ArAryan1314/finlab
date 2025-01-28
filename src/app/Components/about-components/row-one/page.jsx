import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const AboutRowOne = () => {
  return (
    <div>
      <div className={styles.AboutWrapper}>
        <div className={styles.rowOne}>
          <div className={`${styles.heading}`}>
            <h2> Empowering your financial freedom one smart decision</h2>
          </div>
          <div className={`${styles.desc}`}>
            <p>
              At Finlab, we believe that financial freedom is the cornerstone of
              a fulfilling life. Our mission is to empower individuals t0 money
              with, clarity, and ease.
            </p>
          </div>
        </div>

        <div className={styles.bg_image}>
          <Image
            src="/images/bg3.jpg"
            fill
            sizes="100vw"
            // width={100}
            // height={400}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.counter}>
          <div className={styles.counter_block}>
            <div className={styles.number}>
              85 <sup className={styles.one}>+M</sup>
            </div>
            <div className={styles.heading}>Revenue generated</div>
          </div>
          <div className={styles.counter_block}>
            <div className={styles.number}>
              25 <sup>K+</sup>
            </div>
            <div className={styles.heading}>Worldwide client</div>
          </div>
          <div className={styles.counter_block}>
            <div className={styles.number}>
              18<sup>+</sup>
            </div>
            <div className={styles.heading}>Years in the field</div>
          </div>
          <div className={styles.counter_block}>
            <div className={styles.number}>
              40<sup>+</sup>
            </div>
            <div className={styles.heading}>Years in the field</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRowOne;
