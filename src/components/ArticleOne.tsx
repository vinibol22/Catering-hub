import styles from "../components/ArticleOne.module.scss";
import tela from "../assets/imgs/iconTwo.png";
import carrinho from "../assets/imgs/iconThree.png";
import elipseTwo from "../assets/imgs/Ellipse2.png";
import eliseThree from "../assets/imgs/Ellipse3.png";
export function ArticleOne() {
  return (
    <>
      <div className={styles.espacamento}></div>
      <p className={styles.text}>Como Funciona</p>
      <div className={styles.espacamento}></div>

      <article className={styles.iconsArea}>      

        <div className={styles.area1}>
          <p className={styles.ellipse2}>
            <img src={elipseTwo}className={styles.imgElipse1} alt="" />  
          </p>
          <p className={styles.textIcon}>
            Primeiro passo é entrar em nossa plataforma,
            aqui encontrará
            diversos as opções de buffets e terá as opções de contato,
            tanto para buffets interessados em entrar na plataforma ,quanto 
           para os clientes que precisará de um serviço.
          </p>
        </div>
        <div>
        <div className={styles.area2}>
          <p className={styles.ellipse3}>
              <img src={eliseThree} alt="" className={styles.imgElipse2} />
          </p>
          <p className={styles.textIcon}>
              Na aba de buffets,você encontrará as melhores opções de buffets ,
              e poderá escolher por nome,cúlinária ou pela distância do local,
              escolherá por click a melhor opção para o caso.
            </p>
            </div>
        </div>
      </article>
    </>
  );
}
