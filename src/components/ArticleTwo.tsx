import styles from "../components/ArticleTwo.module.scss";
import imageTwo from "../assets/imgs/image2.png";
import aviao from "../assets/imgs/tomate.png";
export function ArticleTwo() {
  return (
    <article>
      <div className={styles.secaoGrande}>
      <div className={styles.secao}>
        <img src={imageTwo} className={styles.secaoOne} alt="" />
        <div className={styles.secaoTwo}>
         
          <div className={styles.textHeader}><p >Benefícios</p></div> 
          <div className={styles.textSecaoTwo}>
            <p className={styles.texAviao}>
              Facilidades No encontro de buffets em locais diferentes do habitual.
            </p>
          </div>
          <p></p>
          <div className={styles.textSecaoTwo}>
            <p className={styles.texAviao}>
              Maior segurança na qualidade dos seviços.
            </p>
          </div>

          <p></p>
          <div className={styles.textSecaoTwo}>
            <p className={styles.texAviao}>
                Muitas opções de cardapios e culinárias.
              </p>
          </div>
        </div>
        </div>
        </div>
    </article>
  );
}
