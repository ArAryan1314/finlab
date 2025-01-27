import React from "react";
import styles from "./payment.module.scss";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const PaymentContainer = () => {
  return (
    <div>
      <div className={`${styles.paymentWrapper}`}>
        <div className={`${styles.rowOne}`}>
          <div className={`${styles.heading}`}>
            <h2>Our Get payment Visualization with precision dataplan</h2>
          </div>
          <div className={`${styles.desc}`}>
            <p>
              Track the growth and engagement of your newsletter subscribers
              with detailed analytics. Understand what works and supercharge
              your reach.
            </p>
          </div>
        </div>

        <div className={`${styles.rowTwo}`}>
          <div className={`${styles.colOne}`}>
            <div className={`${styles.subHeading}`}>
              <FaRegCheckCircle />
              Local and International Payments
            </div>
            <div className={`${styles.heading}`}>
              <h2>Send money locally and internationally</h2>
            </div>
            <div className={`${styles.desc}`}>
              <p>
                Track the growth and engagement of your newsletter subscribers
                with detailed analytics. Understand what works and supercharge
                your reach.
              </p>
            </div>

            <div className={`${styles.link}`}>
              <IoMdArrowDropright />
              <Link href="/">how it works</Link>
            </div>
          </div>

          <div className={`${styles.colTwo} ${styles.slideOne} `}>
            <Image
              src="/p4.jpg"
              width={350}
              height={400}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className={`${styles.rowThree}`}>
          <div className={`${styles.colOne}`}>
            <div className={`${styles.heading}`}>
              <h2>Control your cashflow with insights</h2>
            </div>
            <div className={`${styles.desc}`}>
              <p>Understand what works and supercharge your reach.</p>
            </div>

            <div className={` ${styles.slideOne} `}>
              <Image
                src="/images/p5.jpg"
                fill
                sizes="100vw"
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className={`${styles.col_two}`}>
            <div className={`${styles.heading}`}>
              <h2>Stay up to speed with notifications</h2>
            </div>
            <div className={`${styles.desc}`}>
              <p>
                Track the growth and engagement of your newsletter subscribers
                with detailed analytics. Understand what works and supercharge
                your reach.
              </p>
            </div>
            <div className={`${styles.link}`}>
              <Link href="/">Learn More</Link> <IoMdArrowDropright />
            </div>
            <div className={`${styles.country_map}`}>
              <div className={styles.map}>
                <Image
                  src="./flag7.svg"
                  alt="Profile Picture"
                  className={styles.img}
                  width={40}
                  height={40}
                />
                English
              </div>
              <div className={styles.map}>
                <Image
                  src="./flag7.svg"
                  alt="Profile Picture"
                  className={styles.img}
                  width={40}
                  height={40}
                />
                USA
              </div>
              <div className={styles.map}>
                <Image
                  src="./flag7.svg"
                  alt="Profile Picture"
                  className={styles.img}
                  width={40}
                  height={40}
                />
                MeXico
              </div>
              <div className={styles.map}>
                <Image
                  src="./flag7.svg"
                  alt="Profile Picture"
                  className={styles.img}
                  width={40}
                  height={40}
                />
                South Africa
              </div>
              <div className={styles.map}>
                <Image
                  src="./flag7.svg"
                  alt="Profile Picture"
                  className={styles.img}
                  width={40}
                  height={40}
                />
                Indonesia
              </div>
              <div className={styles.map}>
                <Image
                  src="./flag7.svg"
                  alt="Profile Picture"
                  className={styles.img}
                  width={40}
                  height={40}
                />
                UAE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentContainer;
