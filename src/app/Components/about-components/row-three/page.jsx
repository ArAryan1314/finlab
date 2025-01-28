import Image from "next/image";
import styles from "./page.module.scss";

const AboutChooseUs = () => {
  return (
    <div>
      <div className={styles.chooseWapper}>
        <div className={styles.chooseContent}>
          {/* Row Staste */}
          <div className={styles.rowOne}>
            <div className={`${styles.cHeading} ${styles.cdisplay}`}>
              <div className={styles.subHeading}>ABOUT US</div>
              <div className={styles.heading}>
                <h2> What sets us apart?</h2>
              </div>
            </div>

            <div className={`${styles.cDesc} ${styles.cdisplay}`}>
              At Finance, we believe that financial freedom is the cornerstone
              of a fulfilling life. Our mission is to empower individuals to
              take control.
            </div>
          </div>

          {/* Row End */}
          {/* Row Start */}

          <div className={styles.imageColum}>
            <div className={`${styles.imageCard}  `}>
              <div className={` ${styles.image} ${styles.slideOne} `}>
                <Image
                  src="/icons/icon1.svg"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </div>
              <div className={styles.heading}>Smart Insights</div>
              <div className={styles.desc}>
                <p>
                  Our AI-driven platform analyzes your spending habits and
                  provides personalized recommenda tions to help you make
                  smarter financial.
                </p>
              </div>
            </div>
            <div className={`${styles.imageCard} `}>
              <div className={` ${styles.image} ${styles.slideOne} `}>
                <Image
                  src="/icons/icon2.svg"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </div>
              <div className={styles.heading}>Security You Can Trust</div>
              <div className={styles.desc}>
                <p>
                  We prioritize your privacy with bank-grade encryption and
                  strict data protection protocols privacy with bank-grade
                  encryption.
                </p>
              </div>
            </div>
            <div className={`${styles.imageCard}  `}>
              <div className={` ${styles.image} ${styles.slideIn} `}>
                <Image
                  src="/icons/icon3.svg"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </div>
              <div className={styles.heading}>Seamless Experience</div>
              <div className={styles.desc}>
                <p>
                  With integrations across banks, credit cards, and other
                  financial tools, managing your money has never been easier.
                </p>
              </div>
            </div>
          </div>

          {/* Row End */}
        </div>
      </div>
    </div>
  );
};

export default AboutChooseUs;
