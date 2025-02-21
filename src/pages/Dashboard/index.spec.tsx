import { fireEvent, render, screen } from "@testing-library/react";
import Dashboard from ".";
import { fetchCharacters } from "../../services/rickandmortyService";
import { faker } from "@faker-js/faker";

const mockFnFetchCharacters = vi
  .fn(fetchCharacters)
  .mockImplementation(async () => {
    return [
      {
        id: 1,
        name: "Rick Sanchez",
        image: faker.image.url(),
        species: "Human",
      },
      {
        id: 2,
        name: "Morty Smith",
        image: faker.image.url(),
        species: "Human",
      },
    ];
  });

const navigateMock = vi.fn();

describe("Testa o componente de Dashboard", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
    Link: vi.fn().mockImplementation(({ children }) => children),
  }));

  test("Deve haver um título na página", async () => {
    render(<Dashboard fetchCharacters={mockFnFetchCharacters} />);

    const title = await screen.findByRole("heading");

    expect(title).toHaveTextContent("Dashboard");
  });

  test("Deve haver uma lista com 2 personagens", async () => {
    render(<Dashboard fetchCharacters={mockFnFetchCharacters} />);

    const characters = await screen.findAllByRole("listitem");

    expect(characters).toHaveLength(2);
  });

  test("Deve haver um Rick Sanchez na lista", async () => {
    render(<Dashboard fetchCharacters={mockFnFetchCharacters} />);

    const character = await screen.findByText("Rick Sanchez");

    expect(character).toBeInTheDocument();
  });

  test("Deve ser possível clicar no li para abrir a pagina detalhes do personagem.", async () => {
    render(<Dashboard fetchCharacters={mockFnFetchCharacters} />);
    const item = await screen.findByText("Rick Sanchez");
    fireEvent.click(item);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
