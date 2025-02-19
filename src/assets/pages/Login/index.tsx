import styles from "./styles.module.scss";

export default function Login() {
  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  // }

  return (
    <div className={styles.container}>
      <h2>Sign In</h2>

      <form>
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />

        <button>Entrar</button>
      </form>
    </div>
  );
}
