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
              <TiSocialDribbble /> <TiSocialDribbble /> <TiSocialDribbble />{" "}
              <TiSocialDribbble />
            </div>
          </div>

          <div className={styles.col_two}>
            <div className="title">pages</div>
            <div className="list">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Career</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className={styles.col_two}>
            <div className="title">pages</div>
            <div className="list">
              <ul>
                <li>Integration</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li> FAQs</li>
              </ul>
            </div>
          </div>
          <div className={styles.col_two}>
            <div className="title">Utility Pages</div>
            <div className="list">
              <ul>
                <li>Style Guide</li>
                <li>License</li>
                <li>Pass Protected</li>
                <li>Change Log</li>
                <li>404</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockTwo;
