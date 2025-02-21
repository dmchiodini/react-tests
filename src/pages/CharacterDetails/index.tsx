import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { RickandmortyType } from "../../types/rickAndMorty";

interface Iprops {
  fetchCharacterDetail: (id: number) => Promise<RickandmortyType>;
}

export default function CharacterDetail({ fetchCharacterDetail }: Iprops) {
  const params = useParams();
  const [error, setError] = useState("");
  const [character, setCharacter] = useState<RickandmortyType>({
    id: 0,
    name: "",
    image: "",
    species: "",
  });

  useEffect(() => {
    (async () => {
      setError("");

      if (!params.id || params.id === "0") {
        setError("Id inválido");
        return;
      }

      const data = await fetchCharacterDetail(Number(params.id));
      setCharacter(data);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Personagem</h1>
      <div className={styles["container-character"]}>
        <strong>{character?.name}</strong>
        <img src={character?.image} alt={character?.name} />
        <span>{character?.species}</span>
      </div>
      <Link to="/dashboard">Voltar</Link>
      {error && <strong>{error}</strong>}
    </div>
  );
}
