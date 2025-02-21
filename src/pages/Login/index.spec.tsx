import { fireEvent, render, screen } from "@testing-library/react";
import Login from ".";

const navigateMock = vi.fn();

describe("Testa o componente de Login", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
    Link: vi.fn().mockImplementation(({ children }) => children),
  }));

  test("Deve renderizar o componente de Login", async () => {
    render(<Login />);
    const signIn = await screen.getByText("Login");
    const email = await screen.getByPlaceholderText("Insira seu e-mail");
    const password = await screen.getByPlaceholderText("Insira sua senha");
    const button = await screen.getByText("Entrar");

    expect(signIn).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("Deve haver um título Login", () => {
    render(<Login />);
    const signIn = screen.getByText("Login");

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

  test("Deve efetuar uma chamada ao clicar no botão", async () => {
    render(<Login />);
    const button = await screen.findByRole("button");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  test("Deve haver um link para ir para página de Sign Up", async () => {
    render(<Login />);

    const link = await screen.getByText("Não tem cadastro? Clique Aqui!");

    expect(link).toBeInTheDocument();
  });
});
