import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function SignUp() {
  // const navigate = useNavigate();

  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   return navigate("/dashboard");
  // }

  return (
    <div className={styles.container}>
      <h2>Cadastre-se</h2>

      <form>
        <input type="text" placeholder="Insira seu nome" />
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />

        <button>Cadastrar</button>
        <span>
          Já tem cadastro? <Link to="/">Clique Aqui!</Link>
        </span>
      </form>
    </div>
  );
}
