import styles from "../components/Header.module.scss";
import image from "../assets/imgs/logo.png";
export function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <a href="/">Home</a>
        <a href="/buffets">Buffets</a>
        <a href="/contatos">Contatos</a>
      </nav>
    </header>
  );
}
