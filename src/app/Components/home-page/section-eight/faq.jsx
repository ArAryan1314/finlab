import React from "react";
import styles from "./faq.module.scss";
import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import FaqData from "./array/faqdata";

const FaqContainer = () => {
  return (
    <div>
      <div className={styles.faq_wrapper}>
        <div className={`${styles.col_one}`}>
          <div className={`${styles.heading}`}>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className={`${styles.desc}`}>
            <p>
              Track the growth and engagement of your newsletter subscribers
              with analytics.
            </p>
          </div>
          <div className={`${styles.link}`}>
            <Link href="/">how it works</Link> <IoMdArrowDropright />
          </div>
        </div>
        <div className={`${styles.col_two}`}>
          <FaqData />
        </div>
      </div>

      {/* Column Two */}
    </div>
  );
};

export default FaqContainer;
