import React from "react";
import styles from "./footer.module.scss";
import BlockOne from "./1block/blockone";
import BlockTwo from "./block_two/blocktwo";

const FooterWrapper = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <BlockOne />
        {/* <BlockTwo /> */}
      </footer>
    </div>
  );
};

export default FooterWrapper;
