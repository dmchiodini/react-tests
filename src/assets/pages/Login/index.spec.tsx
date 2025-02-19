import { render, screen } from "@testing-library/react";
import Login from ".";

describe("Testa o componente de Login", () => {
  test("Deve renderizar o componente de Login", async () => {
    render(<Login />);
    const signIn = await screen.getByText("Sign In");
    const email = await screen.getByPlaceholderText("Insira seu e-mail");
    const password = await screen.getByPlaceholderText("Insira sua senha");
    const button = await screen.getByText("Entrar");

    expect(signIn).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("Deve haver um título Sign In", () => {
    render(<Login />);
    const signIn = screen.getByText("Sign In");

    expect(signIn).toBeInTheDocument();
  });

  test("Devem haver dois inputs", async () => {
    render(<Login />);
    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(2);
  });

  test("Deve haver um input de e-mail", async () => {
    render(<Login />);
    const email = await screen.findByPlaceholderText("Insira seu e-mail");

    expect(email).toBeInTheDocument();
  });

  test("Deve haver um input de senha", async () => {
    render(<Login />);
    const password = await screen.findByPlaceholderText("Insira sua senha");

    expect(password).toBeInTheDocument();
  });

  test("Deve haver um botão", async () => {
    render(<Login />);
    const button = await screen.findByRole("button");

    expect(button).toBeInTheDocument();
  });
});
