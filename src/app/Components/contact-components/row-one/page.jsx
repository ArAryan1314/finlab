import React from "react";
import styles from "./page.module.scss";

import FormLayout from "../row-two/page";

const ContactRowOne = () => {
  return (
    <div>
      <div className={`${styles.contact_wrapper}`}>
        <div className={`${styles.row_one}`}>
          <div className={`${styles.heading}`}>
            <h1>Your financial journey starts with Us</h1>
          </div>
          <div className={`${styles.desc}`}>
            <p>
              Have questions? Need support? We’re here to help! Reach out to us
              anytime, and we’ll ensure you get the assistance you need.
            </p>
          </div>
        </div>

        <FormLayout />
      </div>
    </div>
  );
};

export default ContactRowOne;
