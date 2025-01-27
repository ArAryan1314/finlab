import styles from "./block_two.module.scss";
import { TiSocialDribbble } from "react-icons/ti";
import Link from "next/link";

const BlockTwo = () => {
  return (
    <div>
      <div className={styles.block_wrapper}>
        <div className={styles.footer_details}>
          <div className={styles.col_one}>
            <div className={styles.title}>
              <Link href="/"> FinLab. </Link>
            </div>
            <div className={styles.desc}>
              Our platform is designed to you do business
            </div>
            <div className={styles.social}>
              <TiSocialDribbble /> <TiSocialDribbble />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockTwo;
