import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { RickandmortyType } from "../../types/rickAndMorty";

interface Iprops {
  fetchCharacters: () => Promise<RickandmortyType[]>;
}

export default function Dashboard({ fetchCharacters }: Iprops) {
  const navigate = useNavigate();
  const [character, setCharacter] = useState<RickandmortyType[]>([]);

  const handleNavigate = (id: number) => {
    navigate(`/character-detail/${id}`);
  };

  useEffect(() => {
    (async () => {
      const data = await fetchCharacters();
      setCharacter(data);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      <ul className={styles["container-character"]}>
        {character.map((char: RickandmortyType, i) => (
          <li key={i} onClick={() => handleNavigate(char.id)}>
            <img src={char.image} alt={char.name} />
            <strong>{char.name}</strong>
            <span>{char.species}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
