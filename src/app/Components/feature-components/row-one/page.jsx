import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./feature.module.scss";
import { IoMdArrowDropright } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const FeatureRowOne = () => {
  return (
    <div>
      <div className={`${styles.paymentWrapper}`}>
        <div className={`${styles.rowOne}`}>
          <div className={`${styles.heading}`}>
            <h1>Simplify your financial journey with finlab features</h1>
          </div>
          <div className={`${styles.desc}`}>
            <p>
              At Finlab, we believe that financial freedom is the cornerstone of
              a fulfilling life. Our mission is to empower individuals t0 money
              with, clarity, and ease.
            </p>
          </div>
        </div>

        <div className={styles.blockbg}>
          <div className={`${styles.rowTwo}`}>
            <div className={`${styles.colOne}`}>
              <div className={`${styles.heading}`}>
                <h3>
                  Track spending in real-time and stay on top of your financial
                  goals.
                </h3>
              </div>
              <div className={`${styles.desc}`}>
                <p>
                  At Finlab, we believe that financial freedom is the cornerst
                  one of a fulfilling life. Our mission is to empower.
                </p>
              </div>

              <div className={`${styles.link}`}>
                <IoMdArrowDropright />
                <Link href="/">how it works</Link>
              </div>
            </div>

            <div className={`${styles.colTwo} ${styles.image}  `}>
              <Image
                src="/images/bar4.jpg"
                className={styles.img}
                fill
                sizes="100vw"
                alt="Picture of the author"
              />
            </div>
          </div>

          <div className={`${styles.rowThree}`}>
            <div className={`${styles.colOne}`}>
              <div className={`${styles.heading}`}>
                <h3>Automatically categorize visualize your transactions.</h3>
              </div>
              <div className={`${styles.desc}`}>
                <p>
                  At Finlab, we believe that financial freedom is the corners
                  one of a fulfilling life. Our mission is to empower.
                </p>
              </div>

              <div className={` ${styles.image} `}>
                <Image
                  src="/images/bar5.jpg"
                  fill
                  sizes="100vw"
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className={`${styles.col_two}`}>
              <div className={`${styles.heading}`}>
                <h3> Gain insights into spending patterns smarter choices.</h3>
              </div>
              <div className={`${styles.desc}`}>
                <p>
                  At Finlab, we believe that financial freedom is the corners
                  one of a fulfilling life. Our mission is to empower.
                </p>
              </div>

              <div className={` ${styles.image} `}>
                <Image
                  src="/images/bar6.jpg"
                  fill
                  sizes="100vw"
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRowOne;
