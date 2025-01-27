import Image from "next/image";
import styles from "./page.module.scss";
import HomePage from "./Components/home-page/home";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />

      <main className={styles.main}></main>
    </div>
  );
}
