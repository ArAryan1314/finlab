import React from "react";
import styles from "./hero.module.scss";

const HeroWrapper = () => {
  return (
    <div>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={`${styles.slideUp}  ${styles.review}`}>
            🌟 4.9 (5k+Reviews)
          </div>
          <div className={`${styles.slideUpOne}  ${styles.heroTitle}`}>
            <h1>
              {styles.marqueeItem}
              Management
              <span className={styles.bank}></span>
              and payments
              <span className={styles.money}></span>
              in a single place.
            </h1>
          </div>
          <div className={`${styles.slideUp}  ${styles.heroDesc}`}>
            The Stacks series of products: Stacks: Landing Page Kit, Stacks:
            Portfolio Kit, &nbsp;Stacks: eCommerce Kit. "Stacks is a
            production-ready library of stackable content blocks built in React
            Native.
          </div>
          <div className={`${styles.slideUpOne}  ${styles.heroEmail}`}>
            <input
              className={styles.btnText}
              type="email"
              name="Email"
              id=""
              placeholder="Enter Your Email"
            />
            <input
              className={styles.btnSubmit}
              type="button"
              value="Free Trail"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWrapper;
