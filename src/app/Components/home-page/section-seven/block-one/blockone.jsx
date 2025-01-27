import React from "react";
import styles from "./blockone.module.scss";
import Image from "next/image";

const BlockOne = () => {
  return (
    <div>
      <div className={styles.blockone_wrapper}>
        <div className={styles.subhead}>Trusted Partner</div>
        <div className={styles.heading}>
          Hosh has quickly built trust with us as a partner in solor finding
          candidates for our growing team.
        </div>
        {/* Details Block */}
        <div className={styles.details}>
          <div className={styles.image}>
            <Image src="/author.svg" alt="Author" width={60} height={60} />
          </div>
          <div className={styles.author_details}>
            <div className={styles.name}>Jessica Redman</div>
            <div className={styles.designation}>Ceo of world cafe</div>
          </div>
          <div className={styles.rating}>
            <Image src="/stars.svg" alt="Star" width={30} height={30} /> 4.9
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockOne;
