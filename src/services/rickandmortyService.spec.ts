import { faker } from "@faker-js/faker";
import {
  RickandmortyDetailType,
  RickandmortyType,
} from "../types/rickAndMorty";
import { fetchCharacterDetail, fetchCharacters } from "./rickandmortyService";

// global.fetch = vi.fn();

// function createFetchResponse(data: any) {
//   return {
//     json: () => Promise.resolve(data as Response),
//   };
// }

describe("Testa o service rickandmortySerivce", () => {
  test("Verifica se foi feito um get list para a url correta", async () => {
    const characterListResponse: RickandmortyType[] = [
      {
        results: [
          {
            id: 1,
            name: faker.animal.petName(),
            image: faker.image.url(),
            species: faker.animal.type(),
          },
        ],
      },
      {
        results: [
          {
            id: 2,
            name: faker.animal.petName(),
            image: faker.image.url(),
            species: faker.animal.type(),
          },
        ],
      },
      {
        results: [
          {
            id: 3,
            name: faker.animal.petName(),
            image: faker.image.url(),
            species: faker.animal.type(),
          },
        ],
      },
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(characterListResponse),
      } as Response)
    );

    // fetch.mockResolvedValue(createFetchResponse(characterListResponse));

    const characterList = await fetchCharacters();

    expect(fetch).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character"
    );
    expect(characterList).toStrictEqual(characterListResponse);
  });

  test("Verifica se foi feito um get detail para a url correta", async () => {
    const characterDetailResponse: RickandmortyDetailType = {
      id: 1,
      name: faker.animal.petName(),
      image: faker.image.url(),
      species: faker.animal.type(),
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(characterDetailResponse),
      } as Response)
    );

    const character = await fetchCharacterDetail(1);

    expect(fetch).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character/1"
    );
    expect(character).toStrictEqual(characterDetailResponse);
  });
});
