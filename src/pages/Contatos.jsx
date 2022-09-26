import styles from "../pages/Contatos.module.scss";
import { Header } from "../components/Header";
import imagem5 from "../assets/imgs/imagem.png";
import { SectionPageOne } from "../components/SectionPageOne";
import { Footer } from "../components/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const validationPost = yup.object().shape({
  nome: yup.string("O nome é obrigatório").required(),
  email: yup.string("O email é obrigatório").required(),
  phone: yup.string("O telefone é obrigatório").required(),
});
export function Contatos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) => console.log(data);

  return (
    <>
      <Header />
      <SectionPageOne />
      <div className={styles.bigBox}>
        <div className={styles.box}>
          <form action="" onSubmit={handleSubmit(addPost)}>
            <fieldset>
              <div className={styles.formulario}>
                <legend>
                  <b>Contate-nos</b>
                </legend>
              </div>

              <br />
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  className={styles.inputUser}
                  required
                  {...register("nome")}
                />{" "}
                <p className="error-message">{errors.nome?.message}</p>
                <label for="nome" className={styles.labelInput}>
                  Nome completo
                </label>
              </div>
              <br />
              <br />
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={styles.inputUser}
                  {...register("email")}
                  required
                />
                <p className="error-message">{errors.email?.message}</p>
                <label for="email" className={styles.labelInput}>
                  Email
                </label>
              </div>
              <br />
              <br />
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className={styles.inputUser}
                  {...register("phone")}
                  required
                />
               
                  <p className="error-message">{errors.phone?.message}</p>
             
                <label for="phone" className={styles.labelInput}>
                  Telefone (+55)
                </label>
              </div>
              <div className={styles.submit01}>
                {" "}
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  className={styles.submit}
                />
              </div>
            </fieldset>
          </form>
        </div>

        <div className={styles.box2}>
          <img src={imagem5} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}
