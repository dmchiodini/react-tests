import { render, screen } from "@testing-library/react";
import { fetchCharacterDetail } from "../../services/rickandmortyService";
import { faker } from "@faker-js/faker";
import CharacterDetail from ".";
import * as rrd from "react-router-dom";

const mockFnFetchCharacterDetail = vi
  .fn(fetchCharacterDetail)
  .mockImplementation(async () => {
    return [
      {
        id: 1,
        name: "Rick Sanchez",
        image: faker.image.url(),
        species: "Human",
      },
    ];
  });

describe("Testa o componente de CharacterDetail", () => {
  vi.mock("react-router-dom", () => ({
    useParams: () => ({ id: 1 }),
    Link: vi.fn().mockImplementation(({ children }) => children),
  }));

  test("Deve haver um título na página", async () => {
    render(
      <CharacterDetail fetchCharacterDetail={mockFnFetchCharacterDetail} />
    );

    const character = await screen.findByText("Personagem");

    expect(character).toBeInTheDocument();
  });

  test("Deve haver um link para voltar", async () => {
    render(
      <CharacterDetail fetchCharacterDetail={mockFnFetchCharacterDetail} />
    );

    const linkBack = await screen.findByText("Voltar");

    expect(linkBack).toBeInTheDocument();
  });

  test("Deve validar quando não vier parametro na rota", async () => {
    vi.spyOn(rrd, "useParams").mockImplementationOnce(() => ({ id: "0" }));
    render(
      <CharacterDetail fetchCharacterDetail={mockFnFetchCharacterDetail} />
    );

    const errorText = await screen.findByText("Id inválido");

    expect(errorText).toBeInTheDocument();
  });
});
