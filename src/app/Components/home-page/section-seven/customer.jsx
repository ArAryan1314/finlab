import React from "react";
import styles from "./customer.module.scss";
import Image from "next/image";
import BlockOne from "./block-one/blockone";
import SafeBlock from "./safe-block/safeblock";

const CustomerModule = () => {
  return (
    <div>
      <div className={styles.customer_wrapper}>
        <div className={`${styles.row_one}`}>
          <div className={`${styles.heading}`}>
            <h2>Customer sweet words</h2>
          </div>
          <div className={`${styles.desc}`}>
            <p>
              We offer the best financial services for you in terms that our
              services are secure. We’re exist assist you financial plannings,
              and celebrate your achievment
            </p>
          </div>
        </div>

        <div className={styles.row_two_wrapper}>
          <div className={styles.row_two_col}>
            <div className={styles.col_one}>
              <BlockOne />
              <SafeBlock />
            </div>
            <div className={styles.col_two}>
              {" "}
              <Image
                src="testi.svg"
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <div className={styles.subhead}>Trusted Partner</div>
              <div className={styles.heading}>
                Hosh has quickly built trust with us as a partner in solor
                finding candidates for our growing team.
              </div>
              <div className={styles.details}>
                <div className={styles.image}>
                  <Image
                    src="/author.svg"
                    alt="Author"
                    width={60}
                    height={60}
                  />
                </div>
                <div className={styles.author_details}>
                  <div className={styles.name}>Jessica Redman</div>
                  <div className={styles.designation}>Ceo of world cafe</div>
                </div>
                <div className={styles.rating}>
                  <Image
                    src="/whitestar.svg"
                    alt="Star"
                    width={30}
                    height={30}
                  />{" "}
                  4.9
                </div>
              </div>
            </div>

            <div className={styles.col_three}>
              <SafeBlock />
              <BlockOne />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerModule;
