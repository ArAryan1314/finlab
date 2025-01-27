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
            <div className={styles.title}>pages</div>
            <div className={styles.list}>
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
            <div className={styles.title}>pages</div>
            <div className={styles.list}>
              <ul>
                <li>Integration</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li> FAQs</li>
              </ul>
            </div>
          </div>
          <div className={styles.col_two}>
            <div className={styles.title}>Utility Pages</div>
            <div className={styles.list}>
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
        <div className={styles.footer_copyright}>
          © Copyright 2024 | Design & Developed By
          <Link href="/">Onixtheme - License</Link>| Powered By
          <Link href="/">Webflow</Link>
        </div>
      </div>
    </div>
  );
};

export default BlockTwo;
