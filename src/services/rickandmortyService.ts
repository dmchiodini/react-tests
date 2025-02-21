const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async () => {
  const response = await fetch(`${BASE_URL}/character`);

  const data = await response.json();

  return data;
};

export const fetchCharacterDetail = async (id: number) => {
  const response = await fetch(`${BASE_URL}/character/${id}`);

  const data = await response.json();

  return data;
};
