import Image from "next/image";
import styles from "./chose.module.scss";

const ChooseUs = () => {
  return (
    <div>
      <div className={styles.chooseWapper}>
        <div className={styles.chooseContent}>
          {/* Row Staste */}
          <div className={styles.rowOne}>
            <div className={`${styles.cHeading} ${styles.cdisplay}`}>
              <div className={styles.subHeading}>Why Choose Us</div>
              <div className={styles.heading}>
                <h3> Easy, Simple, Affordable </h3>
              </div>
            </div>

            <div className={`${styles.cDesc} ${styles.cdisplay}`}>
              Our platform helps your business in managing expenses. These are
              some of the reasons why you should use our platform in business.
            </div>
          </div>

          {/* Row End */}
          {/* Row Start */}

          <div className={styles.imageColum}>
            <div className={`${styles.imageCard}  `}>
              <div className={` ${styles.image} ${styles.slideOne} `}>
                <Image
                  src="/priceImg.jpg"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>
              <div className={styles.heading}>Automatic Invoice Payment</div>
              <div className={styles.desc}>
                <p>
                  No need to pay manually, we provide automatic invoice payment
                  service and you're done, it's that easy!
                </p>
              </div>
            </div>
            <div className={`${styles.imageCard} `}>
              <div className={` ${styles.image} ${styles.slideOne} `}>
                <Image
                  src="/p1.jpg"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>
              <div className={styles.heading}>Clear payment History </div>
              <div className={styles.desc}>
                <p>
                  Still writing manual expenses? Our platform breaks down every
                  expense you log down to the millisecond!
                </p>
              </div>
            </div>
            <div className={`${styles.imageCard}  `}>
              <div className={` ${styles.image} ${styles.slideIn} `}>
                <Image
                  src="/p2.jpg"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>
              <div className={styles.heading}>use of multi currency </div>
              <div className={styles.desc}>
                <p>
                  Have more than 1 bank account credit. Our platform is already
                  integrated with many banks around the world.
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

export default ChooseUs;
