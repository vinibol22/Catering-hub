import { ArticleOne } from "../components/ArticleOne";
import { ArticleTwo } from "../components/ArticleTwo";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SectionPageOne } from "../components/SectionPageOne";
import styles from "./Home.module.scss";
export function Home() {
  return (
    <>
      <Header />
      <SectionPageOne />
      <ArticleOne />
      <ArticleTwo />
      <div className={styles.paddingMin}></div>
      <Footer />
    </>
  );
}
