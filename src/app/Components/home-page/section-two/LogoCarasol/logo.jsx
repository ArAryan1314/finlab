import React from "react";
import styles from "./logo.module.scss";
import Image from "next/image";

const LogoData = () => {
  return (
    <div>
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeItem}>
            <Image
              src="./one.svg"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.marqueeItem}>
            <Image
              src="./two.svg"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.marqueeItem}>
            <Image
              src="./three.svg"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.marqueeItem}>
            <Image
              src="./four.svg"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.marqueeItem}>
            <Image
              src="./five.svg"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.marqueeItem}>
            <Image
              src="./si.svg"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.marqueeItem}>
            <Image
              src="./sev.svg"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.marqueeItem}>
            <Image
              src="./eight.svg"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.marqueeItem}>
            <Image
              src="./nine.svg"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoData;
