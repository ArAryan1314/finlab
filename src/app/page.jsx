import Image from "next/image";
import styles from "./page.module.scss";
import HomePage from "./Components/home-page";
import AboutPage from "./about-page/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />
      <AboutPage />

      {/* <main className={styles.main}></main> */}
    </div>
  );
}
