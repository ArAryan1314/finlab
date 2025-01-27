import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";

import Link from "next/link";
import { IoBagCheckOutline } from "react-icons/io5";

const HeaderWrapper = () => {
  return (
    <div>
      <header className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            {/* Navigation Logo */}
            <div className={styles.navLogo}>
              <Image
                className={styles.logo}
                src="Logo.svg"
                alt="Next.js logo"
                width={80}
                height={25}
                priority
              />
            </div>
            {/* Navigation Menu */}
            <div className={styles.navMenu}>
                <Link href="/home-page">Home</Link>
              <Link href="/about-page">About</Link>
              <Link href="/features-page">Features</Link>
              <Link href="http://">Pages</Link>
              <Link href="/pricing-page">Pricing</Link>
              <Link href="/contact-page">Contact us</Link>
            </div>
            {/* Navigation Right */}
            <div className={styles.navRight}>
              <div className={styles.cartIcon}>
                <IoBagCheckOutline /> <span className={styles.cNum}>0</span>
              </div>
              <button>
                <div class={styles.content}>
                  <div class={styles.text}>Get Started</div>
                  <div class={styles.hoverText}>Get Started</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderWrapper;
