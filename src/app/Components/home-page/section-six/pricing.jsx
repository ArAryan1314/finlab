import React from "react";
import styles from "./pricing.module.scss";
import { IoRocket } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";

const PricingRow = () => {
  return (
    <div>
      <div className={styles.pricing_wrapper}>
        <div className={`${styles.row_one}`}>
          <div className={`${styles.heading}`}>
            <h2>Our pricing plan</h2>
          </div>
          <div className={`${styles.desc}`}>
            <p>
              Our platform helps your business in managing expenses. These are
              some of the reasons why you should use our platform in business.
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
            {/* Pricing Table Three End  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingRow;
