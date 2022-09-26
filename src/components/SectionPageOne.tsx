import styles from "../components/SectionPageOne.module.scss";
import image2 from "../assets/imgs/image5.jpg";

export function SectionPageOne() {
  return (
    <section className={styles.section}>
      <img src={image2} alt="" />
    </section>
  );
}
