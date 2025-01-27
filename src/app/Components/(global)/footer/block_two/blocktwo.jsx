import styles from "./block_two.module.scss";

const BlockTwo = () => {
  return (
    <div>
      <div className={styles.block_wrapper}>
        <div className="footer_details">
          <div className="col_one">
            <div className="title">
              {" "}
              <Link href="/"> FinLab. </Link>
            </div>
            <div className="desc">
              {" "}
              Our platform is designed to you do business
            </div>
            <div className="social">
              <TiSocialDribbble />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockTwo;
