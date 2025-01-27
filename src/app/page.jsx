import Image from "next/image";
import styles from "./page.module.scss";
import HomePage from "./Components/home-page/home";
import AboutPage from "./Components/about-page/about";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />
      <AboutPage />

      {/* <main className={styles.main}></main> */}
    </div>
  );
}
