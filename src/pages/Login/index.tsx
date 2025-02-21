import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    return navigate("/dashboard");
  }

  return (
    <div className={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />

        <button>Entrar</button>

        <span>
          Não tem cadastro? <Link to="/sign-up">Clique Aqui!</Link>
        </span>
      </form>
    </div>
  );
}
