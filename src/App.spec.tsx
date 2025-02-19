import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testa o componente App", () => {
  test("Devem haver dois títulos na página", async () => {
    render(<App />);

    const title = await screen.findByRole("heading");

    expect(title).toHaveLength(2);
  });

  test("Deve haver um título escrito 'Hello World'", async () => {
    render(<App />);

    const title = await screen.findByRole("heading", { name: "Hello World" });

    expect(title).toBeInTheDocument();
  });
});
