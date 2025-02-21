import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testa o componente de App", () => {
  test("Deve haver um título na página", async () => {
    render(<App />);

    const title = await screen.findByRole("heading", { level: 1 });

    expect(title).toHaveTextContent("Hello World");
  });
});
