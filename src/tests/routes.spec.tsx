import { MemoryRouter } from "react-router-dom";
import MainRoutes from "../routes";
import { render, screen } from "@testing-library/react";

describe("Testa o componente MainRoutes", () => {
  test("Deve renderizar o componente de Login", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", { name: "Login" });

    expect(title).toBeInTheDocument();
  });

  test("Deve renderizar o componente de Dashboard", async () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", { name: "Dashboard" });

    expect(title).toBeInTheDocument();
  });

  test("Deve renderizar o componente de SignUp", async () => {
    render(
      <MemoryRouter initialEntries={["/sign-up"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      name: "Cadastre-se",
    });

    expect(title).toBeInTheDocument();
  });

  test("Deve renderizar o componente de 404", async () => {
    render(
      <MemoryRouter initialEntries={["/ewfwefwf"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      name: "404 Page Not Found",
    });

    expect(title).toBeInTheDocument();
  });
});
