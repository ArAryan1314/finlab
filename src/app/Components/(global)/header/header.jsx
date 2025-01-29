"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import { IoBagCheckOutline } from "react-icons/io5";

const HeaderWrapper = () => {
  const [isSticky, setIsSticky] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Attach and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <header className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
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
              <Link className={styles.nav_item} href="/">
                Home
              </Link>
              <Link className={styles.nav_item} href="/about-page">
                About
              </Link>
              <Link className={styles.nav_item} href="/features-page">
                Features
              </Link>
              <Link className={styles.nav_item} href="/pricing-page">
                Pricing
              </Link>
              <Link className={styles.nav_item} href="/contact-page">
                Contact us
              </Link>
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

            {/* Hamburger Icon */}
            <div className={styles.hamburgerMenu} onClick={toggleMenu}>
              <span
                className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
              />
              <span
                className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
              />
              <span
                className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
              />
            </div>
          </div>
        </div>
      </header>
      {/* Hamburger Menu (Visible only when open) */}
      {isMenuOpen && (
        <div
          className={`${styles.hamburgerNavMenu} ${
            isMenuOpen ? styles.active : ""
          }`}
        >
          <Link className={styles.nav_item} href="/">
            Home
          </Link>
          <Link className={styles.nav_item} href="/about-page">
            About
          </Link>
          <Link className={styles.nav_item} href="/features-page">
            Features
          </Link>
          <Link className={styles.nav_item} href="/pricing-page">
            Pricing
          </Link>
          <Link className={styles.nav_item} href="/contact-page">
            Contact us
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderWrapper;
