import React from "react";
import styles from "./page.module.scss";
import { IoRocket } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";

const PricingRowOne = () => {
  return (
    <div>
      <div className={styles.pricing_wrapper}>
        <div className={`${styles.row_one}`}>
          <div className={`${styles.heading}`}>
            <h1>Flexible options to fit your financial management</h1>
          </div>
          <div className={`${styles.desc}`}>
            <p>
              Finlab offers transparent and flexible pricing plans designed to
              cater to individuals, families, and businesses.
            </p>
          </div>
        </div>
        <div className={styles.row_two}>
          <div className={styles.pricing_col}>
            {/* Pricing Table One */}
            <div className={styles.pricing_data}>
              <div className={styles.pricing_table}>
                <div className={styles.icon_heading}>
                  <div className={styles.icon}>
                    <IoRocket />
                  </div>
                  <div className={styles.heading}>
                    <div className={styles.subhead}>For individuals</div>
                    <div className={styles.title}>Basic Plan</div>
                  </div>
                </div>
                <div className={styles.price}>
                  <sup>$</sup> <span>$39 </span>
                  /monthly
                </div>
                <div className={styles.title}>What’s included:</div>
                <div className={styles.list}>
                  <ul>
                    <li>All analytics features</li>
                    <li>Up to 250,000 tracked visits</li>
                    <li>Normal support</li>
                  </ul>
                </div>
                <div className={styles.pricing_button}>
                  <button>
                    <div className={styles.content}>
                      <div className={styles.text}>Get Started</div>
                      <div className={styles.hoverText}>Get Started</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Pricing Table One End  */}
            {/* Pricing Table Two */}
            <div className={styles.pricing_data}>
              <div className={styles.save}>
                Save 20% <FaArrowDown />
              </div>
              <div className={styles.pricing_table}>
                <div className={styles.icon_heading}>
                  <div className={styles.icon}>
                    <IoRocket />
                  </div>
                  <div className={styles.heading}>
                    <div className={styles.subhead}>For individuals</div>
                    <div className={styles.title}>Basic Plan</div>
                  </div>
                </div>
                <div className={styles.price}>
                  <sup>$</sup> <span>$69 </span>
                  /monthly <span className={styles.reco}>Recommded</span>
                </div>
                <div className={styles.title}>What’s included:</div>
                <div className={styles.list}>
                  <ul>
                    <li>All analytics features</li>
                    <li>Up to 250,000 tracked visits</li>
                    <li>Normal support</li>
                  </ul>
                </div>
                <div className={styles.pricing_button}>
                  <button>
                    <div className={styles.content}>
                      <div className={styles.text}>Get Started</div>
                      <div className={styles.hoverText}>Get Started</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Pricing Table Two End  */}
            {/* Pricing Table Three */}
            <div className={styles.pricing_data}>
              <div className={styles.pricing_table}>
                <div className={styles.icon_heading}>
                  <div className={styles.icon}>
                    <IoRocket />
                  </div>
                  <div className={styles.heading}>
                    <div className={styles.subhead}>For individuals</div>
                    <div className={styles.title}>Basic Plan</div>
                  </div>
                </div>
                <div className={styles.price}>
                  <sup>$</sup> <span>$99 </span>
                  /monthly
                </div>
                <div className={styles.title}>What’s included:</div>
                <div className={styles.list}>
                  <ul>
                    <li>All analytics features</li>
                    <li>Up to 250,000 tracked visits</li>
                    <li>Normal support</li>
                  </ul>
                </div>
                <div className={styles.pricing_button}>
                  <button>
                    <div className={styles.content}>
                      <div className={styles.text}>Get Started</div>
                      <div className={styles.hoverText}>Get Started</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Pricing Table Three End  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingRowOne;
