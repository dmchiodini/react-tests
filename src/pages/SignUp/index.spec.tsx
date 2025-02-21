import { render, screen } from "@testing-library/react";
import SignUp from ".";

const navigateMock = vi.fn();

describe("Testa o componente de SignUp", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
    Link: vi.fn().mockImplementation(({ children }) => children),
  }));

  test("Deve haver 3 inputs na tela", async () => {
    render(<SignUp />);

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(3);
  });

  test("Deve haver inputs para nome, email e senha", async () => {
    render(<SignUp />);

    const inputName = await screen.findByPlaceholderText("Insira seu nome");
    const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail");
    const inputPassword = await screen.findByPlaceholderText(
      "Insira sua senha"
    );

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  test("Deve haver um botão na tela", async () => {
    render(<SignUp />);

    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("Cadastrar");
  });

  test("Deve haver um título 'Cadastre-se'", async () => {
    render(<SignUp />);

    const title = await screen.findByRole("heading", {
      level: 2,
    });

    expect(title).toBeInTheDocument();
  });

  test("Deve haver um link para ir para página de Login", async () => {
    render(<SignUp />);

    const link = await screen.getByText("Já tem cadastro? Clique Aqui!");

    expect(link).toBeInTheDocument();
  });
});
