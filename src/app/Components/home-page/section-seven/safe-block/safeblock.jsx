import React from "react";
import Image from "next/image";
import styles from "./safeblock.module.scss";

const SafeBlock = () => {
  return (
    <div>
      <div className={styles.safe}>
        <div className="safe_image">
          <Image src="/sheild.svg" alt="Author" width={20} height={20} /> 100%
          Safe and Secure
        </div>
        <div className="safe_star">
          <Image src="/blackstar.svg" alt="Author" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default SafeBlock;
