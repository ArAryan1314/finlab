import React from "react";
import styles from "./blockone.module.scss";
import Link from "next/link";
import { TiSocialDribbble } from "react-icons/ti";

const BlockOne = () => {
  return (
    <div>
      <div className={styles.blockone_wrapper}>
        <div className={styles.col_one}>
          <div className={`${styles.slideUp}  ${styles.review}`}>
            🌟 4.9 (5k+Reviews)
          </div>
          <div className={`${styles.slideUpOne}  ${styles.heroTitle}`}>
            <h1>
              Transform How You Manage Your
              <span className={styles.money}></span>
              in a single place.
            </h1>
          </div>

          <div className={`${styles.slideUp}  ${styles.heroDesc}`}>
            Track the growth and engagement of your newsletter subscribers with
            detailed analytics. Understand what works
          </div>

          <div className={styles.link_footer}>
            <Link href="/"> Free Trail</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockOne;
