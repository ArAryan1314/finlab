import LogoData from "./LogoCarasol/logo";
import MarqueCarasol from "./marque/marque";
import styles from "./partners.module.scss";

import React from "react";

const RecentClients = () => {
  return (
    <div>
      <div className={styles.partnerWrapper}>
        <div className={styles.hrLine}></div>
        <div className={styles.partnerContent}>
          <div className={styles.title}>
            <h4>Our recent clients & partners </h4>
          </div>
          <div className={styles.logoMarque}></div>
          <MarqueCarasol />

          <div className={styles.desc}>
            <p>
              We offer the best financial services for you in terms that our
              services are secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentClients;
