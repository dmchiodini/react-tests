export type RickandmortyType = {
  results: [RickandmortyDetailType];
};

export type RickandmortyDetailType = {
  id: number;
  name: string;
  image: string;
  species: string;
};
