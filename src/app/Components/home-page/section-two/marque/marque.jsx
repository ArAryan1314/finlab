import React from "react";
import styles from "./marque.module.scss";
import Image from "next/image";

const PendingDeals = [
  {
    logo: "./one.svg",
    rev: "./nine.svg",
  },
  {
    logo: "./two.svg",
    rev: "./eight.svg",
  },
  {
    logo: "./three.svg",
    rev: "./sev.svg",
  },
  {
    logo: "./four.svg",
    rev: "./si.svg",
  },
  {
    logo: "./five.svg",
    rev: "./five.svg",
  },
  {
    logo: "./si.svg",
    rev: "./four.svg",
  },
  {
    logo: "./sev.svg",
    rev: "./three.svg",
  },
  {
    logo: "./eight.svg",
    rev: "./two.svg",
  },
  // {
  //   logo: "./nine.svg",
  //   rev: "./one.svg",
  // },
];

const MarqueCarasol = () => {
  return (
    <div className={styles.carasol}>
      {PendingDeals.map((image) => {
        return (
          <div>
            <div className={styles.marquee}>
              <div className={styles.logoMarque}>
                <Image
                  src={image.logo}
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>

              <div className={styles.logoTwo}>
                <Image
                  src={image.rev}
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MarqueCarasol;
